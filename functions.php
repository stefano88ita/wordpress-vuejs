<?php
    if( !is_admin() ){
        add_action('init',function(){
            wp_enqueue_style( 'theme-style', get_template_directory_uri().'/dist/css/index.css', [], '1.1' );
            wp_enqueue_script( 'theme-scripts',  get_template_directory_uri().'/dist/js/index.js', ['jquery'], '1.1', true );
      });
    }