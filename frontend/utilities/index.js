import isWithinRange from 'date-fns/is_within_range';

export function getCurrentExhibition(exhibitions) {
  return exhibitions.filter((exhibition) =>
    isWithinRange(
      new Date(),
      new Date(exhibition.acf.start_date),
      new Date(exhibition.acf.end_date),
    ),
  );
}

export function getYearFromDateString(date) {
  return date.substr(-4);
}

export function getPastExhibitions(exhibitions) {
  return exhibitions.slice(1);
}

export function getFeaturedImage(postType) {
  return postType._embedded
    ? postType._embedded['wp:featuredmedia'][0].media_details.sizes.large
        .source_url
    : null;
}
