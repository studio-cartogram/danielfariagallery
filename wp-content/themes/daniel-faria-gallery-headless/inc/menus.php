<?php

/**
 * Register navigation menu.
 *
 * @return void
 */
function register_menus() {
    register_nav_menu( 'header-menu', __( 'Header Menu', 'daniel-faria-gallery-headless' ) );
    register_nav_menu( 'main-nav', __( 'Main Nav', 'daniel-faria-gallery-headless' ) );
    register_nav_menu( 'footer-nav', __( 'Footer Nav', 'daniel-faria-gallery-headless' ) );
}
add_action( 'after_setup_theme', 'register_menus' );
