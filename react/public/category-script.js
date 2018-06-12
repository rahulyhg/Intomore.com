//Category Page Ads

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

/*
Each category page should have its own ads array with the value of the category EX:
  keywords: {
    ads: ['travel']
  },

*/
var discoveryModalAdAvailable = false;
apntag.anq.push(function() {
  apntag.setPageOpts({
    member: 7692,
    keywords: {
    // ads: ['Name of category page']
  },
  });

  if (isMobile) {
    // Mobile
    apntag.defineTag({
      tagId: 11862149,
      sizes: [
        [320, 50]
      ],
      targetId: 'Sec_M_Banner'
    });

    apntag.defineTag({
      tagId: 12912864,
      sizes: [
        [300, 600]
      ],
      targetId: 'Sec_M_HalfPage'
    });


  } else {
    // Desktop
    apntag.defineTag({
      tagId: 11862144,
      sizes: [
        [728, 90]
      ],
      targetId: 'Sec_D_Top_LB'
    });

    apntag.defineTag({
      tagId: 11862152,
      sizes: [
        [300, 250]
      ],
      targetId: 'Sec_M_MedRec2'
    });

    apntag.defineTag({
      tagId: 11862153,
      sizes: [
        [300, 250]
      ],
      targetId: 'Sec_M_MedRec3'
    });
  }

  // Responsive
  apntag.defineTag({
    tagId: 11862151,
    sizes: [
      [300, 250]
    ],
    targetId: 'Sec_M_MedRec1'
  });

  apntag.loadTags();
});
