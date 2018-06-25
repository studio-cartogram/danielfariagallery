<?php

// Add a custom options page to associate ACF fields with
if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page( [
        'page_title' => 'Contact Information',
        'menu_title' => 'Contact',
        'menu_slug'  => 'contact-information',
        'capability' => 'manage_options',
        'post_id'    => 'contact-information',
        'redirect'   => false,
    ] );

    acf_add_options_page( [
        'page_title' => 'Homepage Information',
        'menu_title' => 'Home',
        'menu_slug'  => 'homepage-information',
        'capability' => 'manage_options',
        'post_id'    => 'homepage-information',
        'redirect'   => false,
    ] );
}
