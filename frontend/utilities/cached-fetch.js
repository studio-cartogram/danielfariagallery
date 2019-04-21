import lscache from 'lscache';
import fetch from 'isomorphic-unfetch';

lscache.enableWarnings(true);

function holdCacheForUrl(url) {
  const shouldHold = url.match(/menus|contact-information/);

  return shouldHold;
}

export default async function(url, {disableCache, ...options} = {}) {
  if (typeof window === 'undefined') {
    return fetch(url, options).then((response) => response.json());
  }

  const ttlMinutes = holdCacheForUrl(url) ? 30 : 30;

  let cachedResponse = disableCache ? null : lscache.get(url);

  if (!cachedResponse) {
    cachedResponse = await fetch(url, options).then((response) =>
      response.json(),
    );

  lscache.set(url, cachedResponse, ttlMinutes);

  return cachedResponse;
}

export function overrideCache(key, val) {
  const ttlMinutes = holdCacheForUrl(key) ? 30 : 15;

  lscache.set(key, val, ttlMinutes);
}
