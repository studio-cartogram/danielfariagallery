export const config = {apiUrl: 'https://api.danielfariagallery.com'};
// export const config = {apiUrl: 'http://localhost:8080'};

const mainNav = `${config.apiUrl}/wp-json/menus/v1/menus/main-nav`;
const footerNav = `${config.apiUrl}/wp-json/menus/v1/menus/footer-nav`;
const contactInfo = `${
  config.apiUrl
}/wp-json/acf/v2/options?option_id=contact-information`;

export const endpoints = {
  mainNav,
  footerNav,
  contactInfo,
};

// export const fetchOptions = {
//   mode: 'no-cors',
//   credentials: 'include',
// };
