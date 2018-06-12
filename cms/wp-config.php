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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'into_prim');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'U)l.b(92>N?Z_-p%3LdDa}!6L6_Y!=3Yr3*+)d:2-v7Oe*D$*L=9Wm;<@Bg_<DCH');
define('SECURE_AUTH_KEY',  '# F~7ikPNt1S)2z^?p`/>X.&;YUzX3*_jhUdNxsG,Jo|.B/*N:) ti K@RyiG)le');
define('LOGGED_IN_KEY',    'tBY3SDGB*AydQy#CrZz%9K&7&LtQ0g6Y6Qwye`0;F65/tyLh*hC=KFc@n`TPoUk%');
define('NONCE_KEY',        'E}sevua`0Y3{vCH<5%f{UQ 1DGAuDAsg[a8{Q>VNWNx40!i*].|iSc]eS**5Zf(K');
define('AUTH_SALT',        'j2g-E:.h8;}aLgZ,ENqS}SJ5h+p$P<oAR+[]GA3+Lw$J#5mtEK[gSp,34Vou< 5i');
define('SECURE_AUTH_SALT', '=9W[%2@aX@?jiW]I#*u=k^/zWd,>oRh0,edu8F*yZ7Iu@1S3t33#ij^50VpP{V{J');
define('LOGGED_IN_SALT',   'eemP$47r>:Q2=BrU(Zb{c3z:Pie$#rg]2BT+=zQ+3vzKpn)#zetO 7nL>v^N4Y6,');
define('NONCE_SALT',       'xyS1:BTp~WYB/Kqh_GtP|$z`+W$d GzN:LF{)jFP!d,cnHVRV%Gq6TQJtn*u t>m');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'into_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
