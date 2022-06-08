<?php
/*

  Plugin Name: Block Sandwitch
  plugin description : custom gutenberg block

*/

add_action('init', function() {
	wp_register_script('block-sandwitch-js', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
 
	register_block_type('bs/block-sandwitch', [
		'editor_script' => 'block-sandwitch-js',
	]);
});

