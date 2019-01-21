import lscache from 'lscache';
import fetch from 'isomorphic-fetch';

const TTL_MINUTES = 5;

export default async function(url, {disableCache, ...options} = {}) {
  if (typeof window === 'undefined') {
    return fetch(url, options).then((response) => response.json());
  }

  let cachedResponse = disableCache ? null : lscache.get(url);

  if (cachedResponse === null) {
    console.log(`fetching: ${url} (without cache)`);
    cachedResponse = await fetch(url, options).then((response) =>
      response.json(),
    );
    lscache.set(url, cachedResponse, TTL_MINUTES);
  } else {
    console.log(`${url} (loaded from cache)`);
  }

  return cachedResponse;
}

export function overrideCache(key, val) {
  lscache.set(key, val, TTL_MINUTES);
}
