const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = {slug: req.params.slug, apiRoute: 'post'};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/page/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = {slug: req.params.slug, apiRoute: 'page'};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/exhibition/:slug', (req, res) => {
      const actualPage = '/exhibition';
      const queryParams = {slug: req.params.slug, apiRoute: 'exhibitions'};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/artist/:slug', (req, res) => {
      const actualPage = '/artist';
      const queryParams = {slug: req.params.slug, apiRoute: 'artists'};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/fair/:slug', (req, res) => {
      const actualPage = '/fair';
      const queryParams = {slug: req.params.slug, apiRoute: 'fairs'};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/publication/:slug', (req, res) => {
      const actualPage = '/publication';
      const queryParams = {slug: req.params.slug, apiRoute: 'publications'};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/category/:slug', (req, res) => {
      const actualPage = '/category';
      const queryParams = {slug: req.params.slug};
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
