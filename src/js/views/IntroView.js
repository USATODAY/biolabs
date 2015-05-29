define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/config'
  ],
  function(jQuery, _, Backbone, templates, config) {
    return Backbone.View.extend({
        initialize: function() {
            this.listenTo(Backbone, "window:resize", this.resizeVideo);
        },
        events: {
            'click .intro-view-state-button': 'onViewStateClick',
            'click .share-button': 'onShareShow',
        },
        className: 'iapp-panel active intro-panel',
        template: templates['intro.html'],
        render: function(data) {
            
            this.$el.html(this.template({isMobile: config.isMobile || config.isTablet}));
            this.resizeVideo();
            return this;
        },
        onViewStateClick: function() {
            Backbone.trigger('app:advance');
        },
        onShareShow: function() {
            Backbone.trigger('ShareShow');
        },
        onCreditsShow: function() {
            Backbone.trigger('CreditsShow');
        },
        resizeVideo: function() {
            var $videoEl = this.$('video');
            if (window.innerWidth / window.innerHeight < 1920 / 1080) {
                var numWidth = 100 * ((1920 / 1080) / (window.innerWidth / window.innerHeight));
                $videoEl.css({"width" : numWidth.toString() + "%", "left" : ((100 - numWidth) / 2).toString() + "%"});
            } else {
                $videoEl.css({"width" : "100%", "left" : "0%"});
            }
        }
    });


});
