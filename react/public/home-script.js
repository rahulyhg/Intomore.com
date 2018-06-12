//Homepage Ads

var isMobile = false;

if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true;
}

var apntag = apntag || {};
apntag.anq = apntag.anq || [];

(function() {
  var d = document,
    e = d.createElement('script'),
    p = d.getElementsByTagName('head')[0];
  e.type = 'text/javascript';
  e.async = true;
  e.src = 'https://acdn.adnxs.com/ast/ast.js';
  p.insertBefore(e, p.firstChild);
})();

var discoveryModalAdAvailable = false;
apntag.anq.push(function() {
  apntag.setPageOpts({
    member: 7692
  });

  if (isMobile) {
    // Mobile
    apntag.defineTag({
      tagId: 11771303,
      sizes: [
        [320, 50]
      ],
      targetId: 'HP_M_Banner'
    });

    apntag.defineTag({
      tagId: 12912864,
      sizes: [
        [300, 600]
      ],
      targetId: 'HP_M_HalfPage'
    });
  } else {
    // Desktop
    apntag.defineTag({
      tagId: 12894277,
      sizes: [
        [970, 250]
      ],
      targetId: 'HP_D_Top_SLB'
    });

    apntag.defineTag({
      tagId: 11771651,
      sizes: [
        [728, 90]
      ],
      targetId: 'HP_D_Top_LB'
    });

    apntag.defineTag({
      tagId: 12377182,
      sizes: [
        [300, 600]
      ],
      targetId: 'HP_R_HalfPage2'
    });

    apntag.defineTag({
      tagId: 11771296,
      sizes: [
        [1, 1]
      ],
      targetId: 'HP_D_Takeover_Skin'
    });
  }

  // Responsive
  apntag.defineTag({
    tagId: 11771295,
    sizes: [
      [300, 600]
    ],
    targetId: 'HP_D_Half_Page'
  });

  apntag.defineTag({
    tagId: 11771298,
    sizes: [
      [300, 250]
    ],
    targetId: 'HP_R_MedRec'
  });

  apntag.defineTag({
    tagId: 11771304,
    sizes: [
      [300, 250]
    ],
    targetId: 'HP_M_MedRec'
  });

  apntag.loadTags();
});
