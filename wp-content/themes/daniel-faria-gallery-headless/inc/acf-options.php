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

// this exposes the options pages to the json api 
// http://localhost:8080/wp-json/acf/v2/options?option_id=contact-information
add_action( 'acf/rest_api/id', function( $id ) {
    if ( 'options' == $id ) {
    	$available = array( 'homepage-information', 'contact-information' );
    	
    	if ( isset( $_GET['option_id'] ) && in_array( $_GET['option_id'], $available ) ) {
    		return esc_sql( $_GET['option_id'] );
    	}
    }

    return $id;
} );
