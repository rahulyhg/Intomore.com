//Article Page Ads

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
Each Article page should have an empty input field in the CMS where you can place an optional ad keyword to target that specific page with a specific ad EX:
https://drive.google.com/file/d/1izlS_0yVabgvULlZGxEo3a1Bpm0SBDag/view?usp=sharing
https://drive.google.com/open?id=1NDoMaP9wzBzjqtX6LMM2pcS0nYYX7sGX

  keywords: {
    ads: ['dynasty']
  },

*/

let adKeyword = null

if (window.location.pathname === '/videos/pillow-talk-celebrity-hairstylist-eric-leonardos-on-taking-responsibility-for-your-health' || window.location.pathname === '/videos/pillow-talk-bryan-and-ken-get-in-bed-with-jen-richards') {
  adKeyword = 'pillowtalk'
}
var discoveryModalAdAvailable = false;
apntag.anq.push(function() {
  apntag.setPageOpts({
    member: 7692,
    keywords: {
      ads: [adKeyword]
    },
  });
  console.log(adKeyword)
  
  if (isMobile) {
    // Mobile
    apntag.defineTag({
      tagId: 11771475,
      sizes: [
        [320, 50]
      ],
      targetId: 'A_M_Banner'
    });

    apntag.defineTag({
      tagId: 11771476,
      sizes: [
        [300, 250]
      ],
      targetId: 'A_M_MedRec1'
    });
  } else {
    // Desktop
    apntag.defineTag({
      tagId: 11771472,
      sizes: [
        [728, 90]
      ],
      targetId: 'A_D_Top_LB'
    });

    apntag.defineTag({
      tagId: 11771474,
      sizes: [
        [300, 600]
      ],
      targetId: 'A_D_HalfPage'
    });
  }

  // Responsive
  apntag.defineTag({
    tagId: 11938084,
    sizes: [
      [1, 1]
    ],
    targetId: 'A_R_Outstream'
  });

  apntag.loadTags();
});
