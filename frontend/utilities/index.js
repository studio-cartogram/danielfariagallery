import isWithinRange from 'date-fns/is_within_range';
import isFuture from 'date-fns/is_future';

import {basename, extname} from 'path';

export function getCurrentExhibition(exhibitions) {
  if (!exhibitions || !exhibitions.length) {
    return [];
  }
  return exhibitions.filter((exhibition) => {
    return isWithinRange(
      new Date(),
      new Date(exhibition.start_date),
      new Date(exhibition.end_date),
    );
  });
}

export function getUpcomingExhibition(exhibitions) {
  if (!exhibitions || !exhibitions.length) {
    return [];
  }
  return exhibitions.filter((exhibition) => {
    return isFuture(new Date(exhibition.start_date));
  });
}

export function getYearFromDateString(date) {
  return date.substr(-4);
}

export function getPastExhibitions(exhibitions) {
  return exhibitions.slice(1);
}

export function getFeaturedImage(post, size = 'img_thumbnail') {
  return post._embedded &&
    post._embedded['wp:featuredmedia'][0].media_details.sizes[size]
    ? post._embedded['wp:featuredmedia'][0].media_details.sizes[size].source_url
    : null;
}

export function getFileNameFromPath(path) {
  const filename = basename(path, extname(path));
  return filename;
}

export function isEquivalent(a, b) {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
