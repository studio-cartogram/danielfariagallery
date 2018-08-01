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

// Show ACF in relationship

add_filter( 'acf/rest_api/page/get_fields', function( $data, $request, $response ) {
  if ( $response instanceof WP_REST_Response ) {
      $data = $response->get_data();
  }

  array_walk_recursive( $data, 'deepIncludeACFFields', array( 'exhibition' ) );

  return $data;
}, 10, 3 );

// add_filter( 'acf/rest_api/exhibition/get_fields', function( $data ) {
//   $_data = $data->data;
// 	$thumbnail_id = get_post_thumbnail_id( $post->ID );
// 	$thumbnail = wp_get_attachment_image_src( $thumbnail_id );
// 	$_data['featured_image_thumbnail_url'] = $thumbnail[0];
// 	$data->data = $_data;

//   return $data;
// }, 10 );

// add_filter( 'acf/rest_api/exhibition/get_fields', function( $data, $request, $response ) {
//   if ( $response instanceof WP_REST_Response ) {
//       $data = $response->get_data();
//   }

//   array_walk_recursive( $data, 'deepIncludeACFFields', array( 'artist' ) );

//   return $data;
// }, 10, 3 );

// function rest_api_format( &$object ) {
//   if ( isset( $object->post_type ) ) {
//     $post_type_object =  get_post_type_object( $object->post_type );
    
//     $request = new WP_REST_Request( 
//       'GET',
//       sprintf( '/wp/v2/%s/%d', ! empty( $post_type_object->rest_base ) ? $post_type_object->rest_base : $post_type_object->name, $object->ID )
//     );
    
//     $response = rest_do_request( $request );
    
//     if ( ! $response->is_error() ) {
//       $object = $response->get_data();
//     }   
//   }
// }


function deepIncludeACFFields( &$item, $key, $postTypes ) {
  if ( isset( $item->post_type ) && in_array( $item->post_type, $postTypes ) ) {
    $item->acf = get_fields( $item->ID );
  }
}

