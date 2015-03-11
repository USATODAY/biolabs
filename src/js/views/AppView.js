define(
  [
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'dataManager',
    'api/analytics',
    'views/IntroView',
    'router',
    'models/config',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, Analytics, IntroView, router, config, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
                this.listenTo(Backbone, "app:advance", this.goForward);
                this.listenTo(Backbone, "app:goBack", this.goBack);
            },
            events: {
                'click .intro-next-button': 'onNextClick',
                'click .iapp-usat-logo-image': 'onLogoClick'
            },
            onDataReady: function() {
                this.render();
                console.log(dataManager.data);
                Backbone.history.start();
                _.delay(function() {
                    this.$('.iapp-preloader').fadeOut(250);
                }, 1000);
                
            },
            onNextClick: function() {
                Analytics.trackEvent('Into next button click.');
                Backbone.trigger("app:advance");
            },
            render: function() {
               this.$el.append(this.template({logo: this.logoURL, title: dataManager.data.title, page_url: this.getURL()}));
               this.addSubViews();
               return this;
            },
            template: templates["app.html"],
            subViews: [],
            addSubViews: function() {
               var introView = new IntroView();
               this.$el.append(introView.render(dataManager.data).el);
               this.subViews.push(introView);
            },
            currentSubView: 0,
            goForward: function() {
                
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView++;
                var newSub = this.subViews[this.currentSubView];

                if (this.currentSubView == 3) {
                    this.$el.append(this.subViews[3].render().el);
                    this.subViews[3].renderVideo();

                    this.$el.append(this.subViews[4].render().el);
                }

                oldSub.$el.removeClass('active').addClass('done');
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            goBack: function() {
                var oldSub = this.subViews[this.currentSubView];
                console.log("back");
                this.currentSubView--;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('upcoming');
                newSub.$el.removeClass('done').addClass('active');
            },
            getURL: function() {
                 return 'http://' + window.location.hostname + window.location.pathname;
            }
        });
});
