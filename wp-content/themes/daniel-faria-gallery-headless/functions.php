<?php

// Frontend origin
require_once 'inc/frontend-origin.php';

// ACF commands
require_once 'inc/class-acf-commands.php';

// Logging functions
require_once 'inc/log.php';

// CORS handling
require_once 'inc/cors.php';

// Admin modifications
require_once 'inc/admin.php';

// Add Menus
require_once 'inc/menus.php';

// Add Contact Settings area
require_once 'inc/acf-options.php';

// Add custom API endpoints
require_once 'inc/api-routes.php';

// Add featured image
add_theme_support('post-thumbnails');

// Force WP Rocket to Cache the Rest API
// https://docs.wp-rocket.me/article/744-rocketcacherejectwprestapi
apply_filters( 'rocket_cache_reject_wp_rest_api', false );

// Add image sizes
add_image_size('img_thumbnail',600, 600, true);
add_image_size('img_medium',800, 800, false);
add_image_size('img_large',1200, 800, false);
add_image_size('img_xlarge',1600, 1000, false);

// remove gallery css
add_filter( 'use_default_gallery_style', '__return_false' );


// Custom post types with REST API support

add_action('init', 'create_post_types' );

if ( ! function_exists( 'create_post_types' ) ) {

  function create_post_types() {

    $exhibition_args = array(
      'public' => true,
      'label' => 'Exhibitions',
      'has_archive' => true,
      'show_in_rest' => true,
      'rest_base' => 'exhibitions',
      'rewrite' => array( 'slug' => 'exhibition' ),
      'supports' => array( 'title', 'thumbnail', 'editor'),
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'exhibition',
      'graphql_plural_name' => 'exhibitions',
      'menu_icon' => 'dashicons-format-gallery'
    );

    register_post_type( 'exhibition', $exhibition_args );

    $artist_args = array(
      'public' => true,
      'label' => 'Artists',
      'has_archive' => true,
      'show_in_rest' => true,
      'rest_base' => 'artists',
      'rewrite' => array( 'slug' => 'artist' ),
      'supports' => array( 'title', 'thumbnail', 'editor'),
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'artist',
      'graphql_plural_name' => 'artists',
      'menu_icon' => 'dashicons-admin-customizer'
    );

    register_post_type( 'artist', $artist_args );

    $fair_args = array(
      'public' => true,
      'label' => 'Fairs',
      'has_archive' => true,
      'show_in_rest' => true,
      'rest_base'             => 'fairs',
      'rewrite' => array( 'slug' => 'fair' ),
      'supports' => array( 'title', 'thumbnail', 'editor'),
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'fair',
      'graphql_plural_name' => 'fairs',
      'menu_icon' => 'dashicons-tickets-alt'
    );

    register_post_type( 'fair', $fair_args );

    $publication_args = array(
      'public' => true,
      'label' => 'Publications',
      'has_archive' => true,
      'show_in_rest' => true,
      'rest_base'             => 'publications',
      'rewrite' => array( 'slug' => 'publication' ),
      'supports' => array( 'title', 'thumbnail', 'editor'),
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'publication',
      'graphql_plural_name' => 'publications',
      'menu_icon' => 'dashicons-book'
    );

    register_post_type( 'publication', $publication_args );

    $news_args = array(
      'public' => true,
      'label' => 'News',
      'has_archive' => true,
      'show_in_rest' => true,
      'rest_base'             => 'news',
      'rewrite' => array( 'slug' => 'news' ),
      'supports' => array( 'title', 'thumbnail', 'editor'),
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'newsItem',
      'graphql_plural_name' => 'news',
      'menu_icon' => 'dashicons-admin-site'

    );

    register_post_type( 'news', $news_args );

    $video_args = array(
      'public' => true,
      'label' => 'Videos',
      'has_archive' => true,
      'show_in_rest' => true,
      'rest_base'             => 'videos',
      'rewrite' => array( 'slug' => 'video' ),
      'supports' => array( 'title', 'thumbnail'),
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'video',
      'graphql_plural_name' => 'videos',
      'menu_icon' => 'dashicons-format-video'
    );

    register_post_type( 'video', $video_args );

    $room_args = array(
      'public' => true,
      'label' => 'Viewing rooms',
      'has_archive' => true,
      'show_in_rest' => true,
      'rest_base'             => 'rooms',
      'rewrite' => array( 'slug' => 'room' ),
      'supports' => array( 'title', 'thumbnail', 'editor'),
      'show_in_graphql' => true,
      'hierarchical' => true,
      'graphql_single_name' => 'room',
      'graphql_plural_name' => 'rooms',
    );

    register_post_type( 'room', $room_args );

    flush_rewrite_rules( false );

  }

}
