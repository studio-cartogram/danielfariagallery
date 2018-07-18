<?php
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

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db185472_daniel2018' );

/** MySQL database username */
define( 'DB_USER', 'db185472' );

/** MySQL database password */
define( 'DB_PASSWORD', 'nCg2rU.ysbGUjed' );

/** MySQL hostname */
define( 'DB_HOST', 'internal-db.s185472.gridserver.com' );

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
define( 'AUTH_KEY',         'na^o^tZnCWB(uVkR@[K9Mb#SyRV}13=4bboEL!+K({C&;r-DZU[e`U_[p+Au:!qg' );
define( 'SECURE_AUTH_KEY',  '!=xo2%jB<Y;^_&#FU1^TXbywh:e}YyHmpiqbs[AR<^b1N!3l8xL2vA07~[Pi{{@l' );
define( 'LOGGED_IN_KEY',    '.[!Uhj| DU q?`~+eEgp3{hP9Na]P}>IA*_:}wI?wIRhfG},]QqvSo{V[)cVr,p$' );
define( 'NONCE_KEY',        '%L jS[r2egf#x u;![>Rq+|faL/iR hTKl2N8Na!=:q=sbf%~p88g@p-.dLn41&D' );
define( 'AUTH_SALT',        '500;)>O}.*=jx-E+LO+e*lK2,wH!=07@n9pg#EHD|E8q/jbo+nsa(Sjn+_(0KyP2' );
define( 'SECURE_AUTH_SALT', '-E/L2T]gJi]`,(E7^#3>i@h=c?}7THmmq:z/X3@}DbXOdZWXaJsPsA21fc}gwio]' );
define( 'LOGGED_IN_SALT',   '3:?m~(oiU1C2N!d6*IGtUx@zxf>o17$zL_BOJ&rK4G:=>?wE@5=w9^(FttV@Rk.c' );
define( 'NONCE_SALT',       'YjOQV.m1kidjJjZCc]mRr^B!DURKW6yX4#@88BnarQnw~D5Tb#a`B`{L$fz8$W[8' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
