<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'OdjozB8HyZbishpyEeqNhBbJKSP9IPq/MDIHzL2+lisKnRVmCkJdhdptOld5Vr5zTddyWxGHDXCVGHTqq+l6BQ==');
define('SECURE_AUTH_KEY',  'YMjOtAARgiRGqeqtggMwU0GHjkQTGfrwpWs0L2wfij1LnB//lubgsV1WAQZw6puNfn1JU2u+mIUDB2XV8pEMhA==');
define('LOGGED_IN_KEY',    '566MbuNYvhBFUnvwtSdcnf1a2ALOCUtsvgkVETgmFHIJXm+cgTFcHyh384Kg4oFhLJT0zD86iIQfG+oubOGc7Q==');
define('NONCE_KEY',        '8Y6EpvvvgeT9+8xlFTUPmUUFc51XCcRgZjvLQ2lWx+jSR9NMQctkC07CotW0xu1ECZ9sfKpls+GCh9OfRAq3lA==');
define('AUTH_SALT',        'DcbUxEcA+x4qpAl7egkk5hytiiMJJMP4KjvmB4/ErZcl4pfC/eKuKEkFRlIITgo0WicjWe9UVxmVUGV9vgeg1g==');
define('SECURE_AUTH_SALT', 'x58MG+9/iLJ+K5fBpnSbZSE+sq5X9GS8QzHWTJR0mOGg00FCmT4siR/y6Cwy3sijxR9Bcyuk91wDJW0iJeyf0w==');
define('LOGGED_IN_SALT',   'x0tTofVorOiWALCme4yonwoBAITm+zCUb+ZWP3ISv4hjqLn+ahTN/JPfWFVbyafFpPZZH35uyWgSKSMHw1LVUQ==');
define('NONCE_SALT',       'n+a7K+O8048JcniQMI/MZSoJEw1BSbTGlb1Fg42k+r7SERCj/FVBuBA4RLAdJyh0WK2TTqchHBEg2N4EZLd+Xg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
