<?php if(session_id() == '') {session_start();} ?>
<!doctype html>
<html lang="en">
<head>
<title>INTO: A Digital Magazine For The Modern Queer World</title>
<meta charset="utf-8">
<meta http-equiv="Cache-Control" content="no-cache"/>
<meta http-equiv="Cache-Control" content="must-revalidate"/>
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="Cache-Control" content="max-age=0"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, target-densitydpi=medium-dpi, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<?php wp_head(); ?>
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css" />
</head>
<body <?php body_class(); ?>>
<?php if(!is_front_page()) { ?>
<div class="container-fluid grindr-header-container">
    <!-- Mobile header start -->
  <div class="into-header-mobile-wrapper">
    <div class="into-header-mobile">
            <div><div class="into-burger-mobile"></div></div>
            <div><a ><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt=""></a></div>
            <div></div>
    </div>
    <div class="into-header-mobile-nav">
        <div class="into-search-container">
            <div class="mobile-nav-search">
                <form action="">
                    <input type="text" placeholder="Search...">
                    <span class="cancel"><i class="fa fa-times-circle"></i></span>
                </form>
            </div>
        </div>
        <ul class="into-header-mobile-menu">
            <li><a >latest</a></li>
            <li><a >video</a></li>
            <li><a >travel</a></li>
            <li><a >culture</a></li>
            <li><a >you</a></li>
            <li><a >impact</a></li>
        </ul>
        <div class="">
             <div class="grindr-footer-form ">
                <p>SIGN ME UP FOR THE LATEST.</p>
                <div class="subscription-form">
                    <form action="">
                        <div class="grindr-sub">
                            <input type="email" name="email" class="grindr-sub-input" placeholder="yourname@email.com">
                            <button class="btn-grindr-sub" type="submit">Subscribe</button>
                        </div>
                    </form>
                 <div class="loading-email" style="display:none;">
                     <i class="fa fa-spinner fa-spin"></i>
                 </div>
                    <div class="error grindr-errorbox" style="display:none;">
                        <i class="fa fa-warning"></i>Oops! something went wrong. Please try again.
                    </div>
                </div>
            </div>

            <div class="into-socialbox">
                <ul class="into-socialbox-links text-center">
                    <li><a  class="social-svg facebook-svg"></a></li>
                    <li><a  class="social-svg twitter-svg"></a></li>
                    <li><a  class="social-svg instagram-svg"></a></li>
                </ul>
            </div>
            <div class="into-nav-links-center">
                <ul>
                    <li><a >advertise</a></li>
                    <li><a >about us</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- Mobile header end -->

 <!-- Desktop header start -->
   <div class="into-header-wrapper">
       <div class="into-header">
           <a  class="logo"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt=""></a>
           <ul class="into-nav">
               <li><a >latest</a></li>
               <li><a >video</a></li>
               <li><a >travel</a></li>
               <li><a >culture</a></li>
               <li><a >you</a></li>
               <li><a >impact</a></li>
           </ul>
           <div class="into-burger"></div>
           <div class="into-envelope"></div>
           <div class="into-search" >
               <span></span>
               <div class="nav-into-search-popover">
                   <form action="">
                       <input type="text" placeholder="Search...">
                   </form>
               </div>
           </div>
       </div>
           <div id="into-menu">
               <div class="social-left">
                     <div>
                        <ul class="into-socialbox-links">
                            <li><a  class="social-svg facebook-svg"></a></li>
                            <li><a  class="social-svg twitter-svg"></a></li>
                            <li><a  class="social-svg instagram-svg"></a></li>
                        </ul>
                     </div>
                   <div class="into-links-right">
                        <ul>
                           <li><a >Advertise</a></li>
                           <li><a >About Us</a></li>
                        </ul>
                   </div>
               </div>
           </div>
           <div id="into-email-nav">
               <div class="email-subscribe">
                   <div>
                       <span class="new-here">We're new here.</span> Queer news and culture.  For everyone.
                   </div>
                   <form action="" class="subscription-form">
                        <div class="grindr-sub">
                            <input type="email" name="email" class="grindr-sub-input"  placeholder="yourname@email.com">
                            <button>subscribe</button>
                        </div>
                   </form>
                   <div class="loading-email" style="display:none;">
                       <i class="fa fa-spinner fa-spin"></i>
                   </div>
                   <div class="error grindr-errorbox" style="display:none;">
                       <i class="fa fa-warning"></i>Oops! something went wrong. Please try again.
                   </div>
                   <div class="subscription-down" style="display:none;">
                      Woohoo!!! You're on the list!
                   </div>
               </div>
           </div>
     </div>
<!-- Desktop header end -->
</div>

<!--index-main start-->
<div class="into-container-article">

        <!--  display  in pc and pad -->
        <div class="article-share-buttons pc-block">
            <a  class="social-svg facebook-svg"></a>
            <a  class="social-svg twitter-svg"></a>
        </div>
<?php } else { ?>
  <img class="white-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/into-logo.svg"/>
<?php } ?>
