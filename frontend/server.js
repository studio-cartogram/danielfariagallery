const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => {
      const actualPage = '/';
      renderAndCache(req, res, actualPage, req.query);
    });

    server.get('/page/:slug', (req, res) => {
      const actualPage = '/post';
      renderAndCache(req, res, actualPage, req.query);
    });

    server.get('/artist/:slug', (req, res) => {
      const actualPage = '/artist';
      const queryParams = Object.assign({}, {slug: req.params.slug}, req.query);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/artists', (req, res) => {
      const actualPage = '/artists';
      renderAndCache(req, res, actualPage, req.query);
    });

    server.get('/exhibition/:slug', (req, res) => {
      const actualPage = '/exhibition';
      const queryParams = Object.assign({}, {slug: req.params.slug}, req.query);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/exhibitions', (req, res) => {
      const actualPage = '/exhibitions';
      renderAndCache(req, res, actualPage, req.query);
    });

    server.get('/exhibitions/past', (req, res) => {
      const actualPage = '/exhibitions/past';
      renderAndCache(req, res, actualPage, req.query);
    });

    server.get('/news/:slug', (req, res) => {
      const actualPage = '/new';
      const queryParams = Object.assign({}, {slug: req.params.slug}, req.query);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/news', (req, res) => {
      const actualPage = '/news';
      renderAndCache(req, res, actualPage, req.query);
    });

    server.get('/fair/:slug', (req, res) => {
      const actualPage = '/fair';
      const queryParams = Object.assign({}, {slug: req.params.slug}, req.query);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/fairs', (req, res) => {
      const actualPage = '/fairs';
      renderAndCache(req, res, actualPage, req.query);
    });

    server.get('/publication/:slug', (req, res) => {
      const actualPage = '/publication';
      const queryParams = Object.assign({}, {slug: req.params.slug}, req.query);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/publications', (req, res) => {
      const actualPage = '/publications';
      renderAndCache(req, res, actualPage, req.query);
    });

    server.get('/work/:id', (req, res) => {
      const actualPage = '/media';
      const queryParams = Object.assign({}, {slug: req.params.slug}, req.query);
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/_preview/:id/:wpnonce', (req, res) => {
      const actualPage = '/preview';
      const queryParams = {id: req.params.id, wpnonce: req.params.wpnonce};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })

  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);
    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
