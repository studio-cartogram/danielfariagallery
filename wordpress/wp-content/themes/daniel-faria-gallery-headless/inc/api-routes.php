<?php
/**
 * Register custom REST API routes.
 */
add_action(
    'rest_api_init',
    function () {
        // Define API endpoint arguments
        $slug_arg = [
            'validate_callback' => function ( $param, $request, $key ) {
                return( is_string( $param ) );
            },
        ];
        $post_slug_arg = array_merge(
            $slug_arg,
            [
                'description' => 'String representing a valid WordPress post slug',
            ]
        );
        $page_slug_arg = array_merge(
            $slug_arg,
            [
                'description' => 'String representing a valid WordPress page slug',
            ]
        );

        // Register routes
        register_rest_route( 'dfg/v1', '/post', [
            'methods'  => 'GET',
            'callback' => 'rest_get_post',
            'args' => [
                'slug' => array_merge(
                    $post_slug_arg,
                    [
                        'required' => true,
                    ]
                ),
            ],
        ] );

        // Register routes
        // This route is not used because we are using the exhibitions route only
        register_rest_route( 'dfg/v1', '/exhibition', [
            'methods'  => 'GET',
            'callback' => 'rest_get_exhibition',
            'args' => [
                'slug' => array_merge(
                    $post_slug_arg,
                    [
                        'required' => true,
                    ]
                ),
            ],
        ] );

        // Register routes
        register_rest_route( 'dfg/v1', '/exhibitions', [
            'methods'  => 'GET',
            'callback' => 'rest_get_exhibitions',
            'args' => [
                
            ],
        ] );

         register_rest_route( 'dfg/v1', '/artists', [
            'methods'  => 'GET',
            'callback' => 'rest_get_artists',
            'args' => [
                
            ],
        ] );

        register_rest_route( 'dfg/v1', '/fairs', [
            'methods'  => 'GET',
            'callback' => 'rest_get_fairs',
            'args' => [
                
            ],
        ] );

        register_rest_route( 'dfg/v1', '/publications', [
            'methods'  => 'GET',
            'callback' => 'rest_get_publications',
            'args' => [
                
            ],
        ] );

        register_rest_route( 'dfg/v1', '/news', [
            'methods'  => 'GET',
            'callback' => 'rest_get_news',
            'args' => [
                
            ],
        ] );


        register_rest_route( 'dfg/v1', '/page', [
            'methods'  => 'GET',
            'callback' => 'rest_get_page',
            'args' => [
                'slug' => array_merge(
                    $page_slug_arg,
                    [
                        'required' => true,
                    ]
                ),
            ],
        ] );

        register_rest_route('dfg/v1', '/post/preview', [
            'methods'  => 'GET',
            'callback' => 'rest_get_post_preview',
            'args' => [
                'id' => [
                    'validate_callback' => function ( $param, $request, $key ) {
                        return ( is_numeric( $param ) );
                    },
                    'required' => true,
                    'description' => 'Valid WordPress post ID',
                ],
            ],
            'permission_callback' => function () {
                return current_user_can( 'edit_posts' );
            },
        ] );
    }
);

/**
 * Respond to a REST API request to get post data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_post( WP_REST_Request $request ) {
    return rest_get_content( $request, 'post', __FUNCTION__ );
}

/**
 * Respond to a REST API request to get page data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_page( WP_REST_Request $request ) {
    return rest_get_content( $request, 'page', __FUNCTION__ );
}

/**
 * Respond to a REST API request to get exhibition data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_exhibition( WP_REST_Request $request ) {
    return rest_get_content( $request, 'exhibition', __FUNCTION__ );
}

/**
 * Respond to a REST API request to get exhibitions data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_exhibitions( WP_REST_Request $request ) {
    $response = rest_get_list( $request, 'exhibition', __FUNCTION__ );

    return $response;
}

/**
 * Respond to a REST API request to get exhibitions data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_fairs( WP_REST_Request $request ) {
    $response = rest_get_list( $request, 'fair', __FUNCTION__ );

    return $response;
}

/**
 * Respond to a REST API request to get exhibitions data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_publications( WP_REST_Request $request ) {
    $response = rest_get_list( $request, 'publication', __FUNCTION__ );

    return $response;
}

/**
 * Respond to a REST API request to get exhibitions data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_news( WP_REST_Request $request ) {
    $response = rest_get_list( $request, 'news', __FUNCTION__ );

    return $response;
}

/**
 * Respond to a REST API request to get artists data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_artists( WP_REST_Request $request ) {
    $response = rest_get_list( $request, 'artist', __FUNCTION__ );

    return new WP_REST_Response( $response );

}


/**
 * Respond to a REST API request to a list of post's data.
 * * Handles changed slugs
 * * Doesn't return posts whose status isn't published
 * * Redirects to the admin when an edit parameter is present
 *
 * @param WP_REST_Request $request Request
 * @param str             $type Type
 * @param str             $function_name Function name
 * @return WP_REST_Response
 */
function rest_get_list( WP_REST_Request $request, $type, $function_name ) {

    $content_in_array = in_array(
        $type,
        [
            'artist',
            'exhibition',
            'fair',
            'publication',
            'news',
        ],
        true
    );
    if ( ! $content_in_array ) {
        $type = 'exhibition'; // why just exhibitions here?
    }

    $response = get_content_for_list($type);

    return $response;
}


function get_artist_list( $type = 'exhibition' ) {
    $artists = get_posts([
        'post_type'   => 'artist',
        'post_status' => 'publish',
        'numberposts' => 100, // change in production
    ]);

    $response = array();

    if ($artists) {
        foreach($artists as $artist) {
            $id = $artist->ID;
            $data = array(
                'id' => $id,
                'name'=> $artist->post_title,
                'slug' => $artist->post_name,
                'representation' => get_field('representation', $id),
            );
                
            array_push($response, $data);
        }
    }

    return $response;
}

/**
 * Returns a list of exhibitions.
 *
 * @return Posts
 */
function get_content_for_list( $type = 'exhibition' ) {
    $args = [
        'post_type'   => $type,
        'post_status' => 'publish',
        'numberposts' => 100, // change in production
    ];


    $items = get_posts($args);

    if ( ! $items ) {
        return new WP_Error(
            $function_name,
            $slug . ' ' . $type . ' does not exist',
            [
                'status' => 404,
            ]
        );
    };
    
    $response = array();
     
    foreach( $items as $item) {
        $id = $item->ID;
        $content = $item->post_content;
        $additionalFields = array();

        if ($type === 'exhibition') {
            $artists = get_artist_list();
            $additionalFields =  array(
                'works' => get_works_for_post($id),
                'artists' => get_artists_for_post($id),
                'start_date' => get_field('start_date', $id),
                'end_date' => get_field('end_date', $id),
                'opening_reception' => get_field('opening_reception', $id),
            );
        }

        if ($type === 'artist') {
            $artists = get_artist_list();
            $additionalFields =  array(
                'name'=> $item->post_title,
                'representation' => get_field('representation', $item),
                'works' => get_works_for_post($id),
                'press' => get_press_for_post($id),
            );
        }

        if ($type === 'publication') {
            $additionalFields =  array(
                'title'=> $item->post_title,
                'images' => get_images_for_post($id),
                'artists' => get_artists_for_post($id),
            );
        }

        if ($type === 'news') {
            $additionalFields =  array(
                'title'=> $item->post_title,
                'artists' => get_artists_for_post($id),
            );
        }

        if ($type === 'fair') {
            // $artists = get_artists_from_work();
            $additionalFields =  array(
                'title'=> $item->post_title,
                'works' => get_works_for_post($id),
                'artists' => get_artists_for_post($id),
                'start_date' => get_field('start_date', $id),
                'end_date' => get_field('end_date', $id),
                'location' => get_field('location', $id),
            );
        }

        $data = array(
            'id' => $id,
            'title' => $item->post_title,
            'content' => wpautop($content),
            'slug' =>  $item->post_name,
            'post_type' => $item->post_type,
            'link' => get_permalink($id),
            'featuredImage' => wp_get_attachment_url( get_post_thumbnail_id($id), 'img_medium' ),
            

            // 'time'			  => microtime(true),
            // 'category' 		  => get_the_category($post['ID']),
            // 'title'           => get_the_title( $post['ID'] ), // $post['post_title'],
            // 'slug'            => $post['post_name'], // $post['post_title'],
            // 'type'            => $post['post_type'],
            // 'content'         => $content,
            // 'htmlcontent'	  => wpautop( $content ),
            // 'post_content' => $post_content,
            // 'parent'          => (int) $post['post_parent'],
            // 'link'            => get_permalink( $post['ID'] ),
            // 'tags' 			  => $this->cartogram_prepare_tags($post['ID']),
            // 'instagram_video'	      => $this->cartogram_prepare_instagram_video($this->cartogram_prepare_tags($post['ID']), get_the_content()),
            // 'instagram_img'	      => $this->cartogram_prepare_instagram_img($this->cartogram_prepare_tags($post['ID']), get_the_content()),
            // 'youtube_video_img'	      => $this->cartogram_prepare_video_img(get_the_category($post['ID']), get_the_content()),
            // 'images'		  => $this->prepare_images(get_post_thumbnail_id($post['ID'])),
            // 'previous'		  	  => $this->prepare_next($post['ID']),
            // 'next'		  => $this->prepare_previous($post['ID']),
            // 'info'			  => get_field('info'),
            // 'external_link'			  => get_field('external_link'),
            // 'extra'			  => $this->cartogram_prepare_extra($post['ID'])
        );

        $data = array_merge($data, $additionalFields);
        array_push($response, $data);

    }

    if ($type === 'exhibition') {
        $artists = get_artist_list();
        return array('artists' => $artists, 'exhibitions' => $response);

    }

    return $response;
}




function get_artists_for_post($id) {

    $artists = get_field('artist', $id);
    $response = array();

    if ($artists) {
        foreach($artists as $artist) {
            $data = array(
                'id' => $artist->ID,
                'name'=> $artist->post_title,
                'slug' => $artist->post_name,
                'representation' => get_field('representation', $artist),
            );
                
            array_push($response, $data);
        }
    }

    return $response;
}


function get_works_for_post($id) {

    $works = get_field('work', $id);
    $response = array();


    if ($works) {
        foreach($works as $work) {
            $details = $work['work_details'];

            if ($details) {
                foreach($details as $detail) {
                    $data = array(
                        'detail'=> $detail['work_detail'],
                    );    
                }
            }
            $data = array(
                'title'=> $work['work_title'],
                'image'=> $work['work_image'],
                'artist'=> $work['work_artist'],
                'details'=> $details,
            );
                
            array_push($response, $data);
        }
    }

    return $response;
}

function get_images_for_post($id) {

    $images = get_field('images', $id);
    $response = array();


    if ($images) {
        foreach($images as $image) {
            $data = array(
                'title'=> $image['work_title'],
                'image'=> $image['work_image'],
            );
                
            array_push($response, $data);
        }
    }

    return $response;
}

// function get_artist_for_works($id) {

//     $works = get_field('work', $id);
//     $response = array();


//     if ($works) {
//         foreach($works as $work) {
//             $details = $work['work_details'];

//             if ($details) {
//                 foreach($details as $detail) {
//                     $data = array(
//                         'detail'=> $detail['work_detail'],
//                     );    
//                 }
//             }
//             $data = array(
//                 'artist'=> $work['work_artist'],
//             );
                
//             array_push($response, $data);
//         }
//     }

//     return $response;
// }

function get_press_for_post($id) {

    $press = get_field('press', $id);
    $response = array();


    if ($press) {
        foreach($press as $press) {

            $data = array(
                'title'=> $press['press_title'],
                'download'=> $press['press_download'],
            );
            array_push($response, $data);
        }
    }

    return $response;
}

/**
 * Respond to a REST API request to get post or page data.
 * * Handles changed slugs
 * * Doesn't return posts whose status isn't published
 * * Redirects to the admin when an edit parameter is present
 *
 * @param WP_REST_Request $request Request
 * @param str             $type Type
 * @param str             $function_name Function name
 * @return WP_REST_Response
 */
function rest_get_content( WP_REST_Request $request, $type, $function_name ) {
    $content_in_array = in_array(
        $type,
        [
            'post',
            'page',
            'exhibition',
        ],
        true
    );
    if ( ! $content_in_array ) {
        $type = 'post';
    }
    $slug = $request->get_param( 'slug' );
    $post = get_content_by_slug( $slug, $type );
    if ( ! $post ) {
        return new WP_Error(
            $function_name,
            $slug . ' ' . $type . ' does not exist',
            [
                'status' => 404,
            ]
        );
    };

    // Shortcut to WP admin page editor
    $edit = $request->get_param( 'edit' );
    if ( 'true' === $edit ) {
        header( 'Location: /wp-admin/post.php?post=' . $post->ID . '&action=edit' );
        exit;
    }
    $controller = new WP_REST_Posts_Controller( 'post' );
    $data = $controller->prepare_item_for_response( $post, $request );
    $response = $controller->prepare_response_for_collection( $data );

    return new WP_REST_Response( $response );
}

/**
 * Returns a post or page given a slug. Returns false if no post matches.
 *
 * @param str $slug Slug
 * @param str $type Valid values are 'post' or 'page'
 * @return Post
 */
function get_content_by_slug( $slug, $type = 'post' ) {
    $content_in_array = in_array(
        $type,
        [
            'post',
            'page',
            'exhibition'
        ],
        true    
    );
    if ( ! $content_in_array ) {
        $type = 'post';
    }
    $args = [
        'name'        => $slug,
        'post_type'   => $type,
        'post_status' => 'publish',
        'numberposts' => 1,
    ];

    // phpcs:ignore WordPress.VIP.RestrictedFunctions.get_posts_get_posts
    $post_search_results = get_posts( $args );

    if ( !$post_search_results ) { // Maybe the slug changed
        // check wp_postmeta table for old slug
        $args = [
            // phpcs:ignore WordPress.VIP.SlowDBQuery.slow_db_query_meta_query
            'meta_query' => [
                [
                    'key' => '_wp_old_slug',
                    'value' => $post_slug,
                    'compare' => '=',
                ],
            ],
        ];
        $query = new WP_Query( $args );
        $post_search_results = $query->posts;
    }
    if ( isset( $post_search_results[0] ) ) {
        return $post_search_results[0];
    }
    return false;
}

/**
 * Respond to a REST API request to get a post's latest revision.
 * * Requires a valid _wpnonce on the query string
 * * User must have 'edit_posts' rights
 * * Will return draft revisions of even published posts
 *
 * @param  WP_REST_Request $request Rest request.
 * @return WP_REST_Response
 */
function rest_get_post_preview( WP_REST_Request $request ) {

    $post_id = $request->get_param( 'id' );
    // Revisions are drafts so here we remove the default 'publish' status
    remove_action( 'pre_get_posts', 'set_default_status_to_publish' );
    $check_enabled = [
        'check_enabled' => false,
    ];
    if ( $revisions = wp_get_post_revisions( $post_id, $check_enabled ) ) {
        $last_revision = reset( $revisions );
        $rev_post = wp_get_post_revision( $last_revision->ID );
        $controller = new WP_REST_Posts_Controller( 'post' );
        $data = $controller->prepare_item_for_response( $rev_post, $request );
    } elseif ( $post = get_post( $post_id ) ) { // There are no revisions, just return the saved parent post
        $controller = new WP_REST_Posts_Controller( 'post' );
        $data = $controller->prepare_item_for_response( $post, $request );
    } else {
        $not_found = [
            'status' => 404,
        ];
        $error = new WP_Error(
            'rest_get_post_preview',
            'Post ' . $post_id . ' does not exist',
            $not_found
        );
        return $error;
    }
    $response = $controller->prepare_response_for_collection( $data );
    return new WP_REST_Response( $response );
}
