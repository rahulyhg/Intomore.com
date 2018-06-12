<?php get_header(); ?>
<div class="article-banner <?php the_field('section'); ?>">
  <div class="grindr-title order-2">
    <div class="grindr-banner-section">
      <?php the_field('section'); ?>
    </div>
    <div class="grindr-banner-title">
      <?php echo get_the_title(); ?>
    </div>
    <div class="grindr-banner-byline">
      <div class="grindr-banner-author">By: <strong><?php the_field('author_name'); ?></strong></div>
      <div class="grindr-banner-time">
        <?php
              /* Start the Loop */
              while ( have_posts() ) : the_post();
                echo the_date();
              endwhile; // End of the loop.
              ?>
      </div>
    </div>
    <!--  display  in mobile  -->
    <div class="article-share-buttons mobile-block">
      <div class="artice-mobile-container">
        <a class="social-svg facebook-svg"></a>
        <a class="social-svg twitter-svg"></a>
      </div>
    </div>
  </div>
  <div class="grindr-banner order-1">
    <div class="banner-image" style="background-image:url(<?php echo get_field('wide_crop'); ?>)">
    </div>
    <div class="banner-video">
      <?php the_field('video_embed'); ?>
    </div>
  </div>
</div>
<div class="article-content">
  <div class="row">
    <div class="col-lg-7 col-md-7 col-xs-12">
      <div class="content">
        <?php
    			/* Start the Loop */
    			while ( have_posts() ) : the_post();
    				get_template_part( 'template-parts/post/content', get_post_format() );
    			endwhile; // End of the loop.
    			?>
      </div>
      <div class="author-extra">
        <div class="author-box">
          <div class="w-100">
            <hr class="" style="">
          </div>
          <div class="author-msg">
            <div class="author-image"></div>
            <div class="author-text ">
              <div class="author-title"></div>
              <div class="author-description">
                <?php the_field('select_author'); ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-md-5 col-xs-12">
      <div class="article-right-trend">
        <!--trend-->
        <div class="trend">
          <div class="trend-label text-uppercase">trending</div>
          <a class="gc  gc-sm">
              <div class="gc-image" style="background-image:url(<?php echo get_stylesheet_directory_uri(); ?>/images/index_p2.jpg)"></div>
              <div class="gc-detail">
                  <h2 class="gc-detail-title">
                      Trump Voters Love the ‘Heathers’ Reboot: ‘SJWs Are Going to Lose...
                  </h2>
                  <div class="gc-detail-author">
                      Harron Walker
                  </div>
              </div>
          </a>
          <a class="gc  gc-sm">
              <div class="gc-image" style="background-image:url(<?php echo get_stylesheet_directory_uri(); ?>/images/index_p2.jpg)"></div>
              <div class="gc-detail">

                  <h2 class="gc-detail-title">
                      Trump Voters Love the ‘Heathers’ Reboot: ‘SJWs Are Going to Lose...
                  </h2>
                  <div class="gc-detail-author">
                      Harron Walker
                  </div>
              </div>
          </a>
          <a class="gc  gc-sm">
          <div class="gc-image" style="background-image:url(<?php echo get_stylesheet_directory_uri(); ?>/images/index_p2.jpg)"></div>
          <div class="gc-detail">

              <h2 class="gc-detail-title">
                  Trump Voters Love the ‘Heathers’ Reboot: ‘SJWs Are Going to Lose...
              </h2>
              <div class="gc-detail-author">
                  Harron Walker
              </div>
          </div>
          </a>
        </div>

        <!--sidebar-subscribe-->
        <div class="sidebar-subscribe">
          <div class="black-box">
            <div class="queer-news">Queer news and culture.</div>
            <div class="for-everyone">For everyone.</div>
          </div>

          <form action="" class="into-socialbox-form">
            <input type="email" name="email" class="grindr-sub-input" placeholder="yourname@email.com">
            <button class="btn-grindr-sub" type="submit">Subscribe</button>
          </form>
          <div class="subscribe-end">
            <div class="loading-email" style="display:none;">
              <i class="fa fa-spinner fa-spin"></i>
            </div>
            <div class="error grindr-errorbox" style="display:none;">
              <i class="fa fa-warning"></i> Oops! something went wrong. Please try again.
            </div>
            <div class="subscription-done" style="display:none;">
              <i class="fa fa-"></i> Yay! You're on the list!
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
<script>
  const pTags = () => [...document.querySelectorAll('.content p')].map((item) => {
    item.innerHTML === '&nbsp;' ? item.remove() : null
  })
  pTags()
  
  const iframes = () => [...document.querySelectorAll('.content iframe')].map((item) => {
    item.parentElement.classList.add("responsive-wrapper")
  })
  iframes()

  const getAuthorTitle = document.querySelector('.author-description h1').innerHTML
  const addAuthorTitle = document.querySelector('.author-title').innerHTML = getAuthorTitle

  const getAuthorImg = document.querySelector('.author-description img').getAttribute('src')
  const addAuthorImg = document.querySelector('.author-image').style.backgroundImage = 'url(' + getAuthorImg + ')'
</script>
<?php get_footer();
