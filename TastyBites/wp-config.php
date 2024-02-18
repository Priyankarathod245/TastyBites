<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tastybites' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'H63IADVv[:.&d^J~o %Ym%B)w4~)ftp|juAs@WjK5(KJL<X1J5tm;Z)zH0,lnvRE' );
define( 'SECURE_AUTH_KEY',  'N8O363+G+71$L5DxE$`hv`ZP?@!_fI}oXxmphDGK]>@fdj$|$%lFtd7#s*$V#kS8' );
define( 'LOGGED_IN_KEY',    'I>okd~doS67;W;~3$@17f.yq%2Hjc#W.&0Ogruc+tD~er*]N[]`G,psWH5%90,he' );
define( 'NONCE_KEY',        'tZ;EyhaL gt)Ql> t9h%cbj[18$.D!{&rvJ72ALcoT]|T`]4CJSn_bZ29/>r*PFo' );
define( 'AUTH_SALT',        '2I!Hr5OJt!]!4Xu~{Dep;Cfj>OgR~AqZsAPc-~/S^J6cLr5`CYX|]rtdPy VC*]>' );
define( 'SECURE_AUTH_SALT', '$eD-Z /1ys8g1l)ZmsVEP(MLj/3$Ycr|sISu vHKa93[y|I/twm 7yFGF~Cf% cz' );
define( 'LOGGED_IN_SALT',   ',S6)dErPnA4j{gVims~zE@PVL?pI4)_o;pY!!I2VfWYmv2RT@C0JC%i*I9F; gbo' );
define( 'NONCE_SALT',       'x]TYbzUx#B?1] ]Q./uBN>5aDfa+,3&G~]P4be#8=RqK[0uXR_>g{=A 3ZC/GsZ&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
