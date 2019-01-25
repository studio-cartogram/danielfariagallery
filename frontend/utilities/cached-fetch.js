import lscache from 'lscache';
import fetch from 'isomorphic-fetch';

lscache.enableWarnings(true);

function holdCacheForUrl(url) {
  const shouldHold = url.match(/menus|contact-information/);
  if (shouldHold) {
    console.log('holding', url);
  } else {
    console.log('not holding', url);
  }
  return shouldHold;
}

export default async function(url, {disableCache, ...options} = {}) {
  console.log(url);
  if (typeof window === 'undefined') {
    return fetch(url, options).then((response) => response.json());
  }

  const ttlMinutes = holdCacheForUrl(url) ? 30 : 30;

  let cachedResponse = disableCache ? null : lscache.get(url);

  if (cachedResponse === null) {
    console.log(`fetching: ${url} (without cache)`);
    cachedResponse = await fetch(url, options).then((response) =>
      response.json(),
    );
    lscache.set(url, cachedResponse, ttlMinutes);
  } else {
    console.log(`${url} (loaded from cache)`);
  }

  return cachedResponse;
}

export function overrideCache(key, val) {
  const ttlMinutes = holdCacheForUrl(key) ? 30 : 15;

  lscache.set(key, val, ttlMinutes);
}
