define(
    [
        'jquery',
        'underscore',
        'backbone',
        'dataManager',
        'views/AppView',
        'templates'
    ],
    function(jQuery, _, Backbone, dataManager, AppView, templates) {
        return {
            init: function() {

                //remove page header
                // $('header').fadeOut();

                //Initialize main appView
                var appView = new AppView({
                    el: ".iapp-wrap"
                });

                //Make data request
                dataManager.getData();

                jQuery(window).resize(function() {
                    Backbone.trigger("window:resize");
                });

                if(window.Modernizr !== undefined && window.innerWidth <=1100) {
                    if (Modernizr.touch) {
                        $('.iapp-wrap').addClass('tablet');
                    }
                }


                if (this.isInIframe()) {
                    $('header').hide();
                    $('.iapp-wrap').addClass('embed');
                }

                $(window).on("resize", function(e) {
                    Backbone.trigger("window:resize");
                    var height = $('.container').height();
                    parent.postMessage({height: height}, '*');
                });

                $(window).trigger('resize');
            },
            isInIframe: function() {
                var blnIsInFrame = window != window.parent;
                return window != window.parent;
            }
        };
    });
