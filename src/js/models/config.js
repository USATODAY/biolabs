define(
  [
    'jquery'
  ],
  function(jQuery) {



    var isMobile, fb_app_id;
    var isTablet = false;

    var staticInfo = JSON.parse(jQuery(".staticinfo").html());

    if (staticInfo.platform == "desktop") {
        isMobile = false;
    } else {
        isMobile = true;
    }

    if (isMobile === false) {
        if (Modernizr.touch) {
            isTablet = true;
        }
    }

    fb_app_id = staticInfo.facebook.app_id;

    return {
        isMobile: isMobile,
        isTablet: isTablet,
        facebook: staticInfo.facebook,
        staticInfo: staticInfo
    };
});
