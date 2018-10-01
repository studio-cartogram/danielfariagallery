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

export function compareLastNames(a, b) {
  //split the names as strings into arrays
  var aName = a.split(' ');
  var bName = b.split(' ');

  // get the last names by selecting
  // the last element in the name arrays
  // using array.length - 1 since full names
  // may also have a middle name or initial
  var aLastName = aName[aName.length - 1];
  var bLastName = bName[bName.length - 1];

  // compare the names and return either
  // a negative number, positive number
  // or zero.
  if (aLastName < bLastName) return -1;
  if (aLastName > bLastName) return 1;
  return 0;
}

export function getYearFromDateString(date) {
  return date.substr(-4);
}

export function getPastExhibitions(exhibitions) {
  return exhibitions.slice(1);
}

export function getFeaturedImage(postType) {
  return postType._embedded &&
    postType._embedded['wp:featuredmedia'][0].media_details.sizes.large
    ? postType._embedded['wp:featuredmedia'][0].media_details.sizes.large
        .source_url
    : null;
}
