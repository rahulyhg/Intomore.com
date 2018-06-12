<?php

// Add editor stylesheet
function editor_style() {
add_editor_style( 'editor-style.css' );
}
add_action( 'admin_init', 'editor_style' );


//Remove Customize option in admin bar
add_action('admin_bar_menu', 'my_custom_admin_styles_and_scripts');
function my_custom_admin_styles_and_scripts() {
	echo '
	<style>
		#wp-admin-bar-customize,
		#category-adder,
		#category-tabs,
		#link-post_tag,
		body.post-type-post #mceu_77,
		body.post-type-post #mceu_138-body,
		body.post-type-post #mceu_148-body,
		body.post-type-post #mceu_118,
		body.post-type-post #mceu_119,
		body.post-type-post #mceu_120,
		body.post-type-post #mceu_121,
		body.post-type-post #mceu_122,
		body.post-type-post #mceu_123,
		body.post-type-post #mceu_124,
		body.post-type-post #mceu_125,
		body.post-type-post #mceu_126,
		body.post-type-post #mceu_127,
		body.post-type-post #mceu_128,
		body.post-type-post #mceu_129,
		body.post-type-post #mceu_130,
		body.post-type-post #mceu_131,
		body.post-type-post #mceu_132,
		body.post-type-post #mceu_133,
		body.post-type-post #mceu_134,
		.ls-cb-dialog .ls-cb-mce-label,
		.ls-cb-dialog .ls-cb-mce-field-radio,
		.ls-cb-dialog .ls-cb-mce-field-radio-label,
		#ls_cb_option_para,
		.jaxtag {
			display: none !important;
		}
		img {
			max-width: 100%;
		}
    ::-webkit-input-placeholder {
      color: #b0b0b0;
    }
		#mceu_147 iframe {
	    height: 100px !important;
	    min-height: auto;
		}
		#categorydiv {
			margin-top: 20px;
		}
  </style>
	<script>
	jQuery(document).ready(function() {
		setTimeout(function() {
			jQuery("#link-post_tag").trigger("click");
		}, 500);
});

	</script>
	';
}
?>
