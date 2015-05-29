define(
  [
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'dataManager',
    'api/analytics',
    'views/IntroView',
    'views/statesIndexView',
    'views/stateView',
    'views/labView',
    'views/modalView',
    'views/shareView',
    'views/InfoView',
    'views/CreditsView',
    'collections/StateCollection',
    'collections/LabCollection',
    'router',
    'models/config',
    'models/ShareModel',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, Analytics, IntroView, StatesIndexView, StateView, LabView, ModalView, ShareView, InfoView, CreditView, StateCollection, LabCollection, router, config, ShareModel, templates){
        return Backbone.View.extend({
            initialize: function() {
                //clear out cached lab info
                this.$el.empty();
                this.listenTo(Backbone, "dataReady", this.onDataReady);
                this.listenTo(Backbone, "app:advance", this.goForward);
                this.listenTo(Backbone, "app:goBack", this.goBack);
                this.listenTo(Backbone, "set:state", this.onSetState);
                this.listenTo(Backbone, "set:lab", this.onSetLab);
                this.listenTo(Backbone, "router:lab", this.onLabRoute);

            },
            events: {
                'click .intro-next-button': 'onNextClick',
                'click .iapp-usat-logo-image': 'onLogoClick',
                'click .credits-button': 'onCreditsShow',
                'click .info': 'onInfoShow'
            },
            onDataReady: function() {
                this.render();
                Backbone.history.start();
                _.delay(function() {
                    this.$('.iapp-preloader').fadeOut(250);
                }, 1000);
                
            },
            onNextClick: function() {
                Analytics.trackEvent('Into next button click.');
                Backbone.trigger("app:advance");
            },
            onInfoShow: function() {
                Backbone.trigger('InfoShow');
            },
            render: function() {
               this.$el.append(this.template());
               this.addSubViews();
               return this;
            },
            template: templates["app.html"],
            subViews: [],
            addSubViews: function() {
                // adds all the necessary  sub views to the app view
                
                //first, create master lab collection
                this.labCollection = new LabCollection(dataManager.data.labs);

                var introView = new IntroView();
                this.$el.append(introView.render(dataManager.data).el);
                this.subViews.push(introView);

                this.stateCollection = new StateCollection(dataManager.data.states);

                var stateIndexView = new StatesIndexView({collection: this.stateCollection});
                this.$el.append(stateIndexView.render().el);
                this.subViews.push(stateIndexView);

                var stateView = new StateView();
                this.$el.append(stateView.el);
                this.subViews.push(stateView);

                var labView = new LabView();
                this.$el.append(labView.el);
                this.subViews.push(labView);

                var shareView = new ShareView({
                    model: new ShareModel()
                });
                this.$el.append(shareView.el);

                var infoView = new InfoView();
                this.$el.append(infoView.el);
                
                var creditView = new CreditView();
                this.$el.append(creditView.el);

                var modalView = new ModalView();
                this.$el.append(modalView.el);
            },
            currentSubView: 0,
            goForward: function() {
                //advance 1 sub view
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView++;
                var newSub = this.subViews[this.currentSubView];


                oldSub.$el.removeClass('active').addClass('done');
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            goBack: function() {
                //goes back 1 sub view
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView--;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('upcoming');
                newSub.$el.removeClass('done').addClass('active');
            },
            goToSubView: function(viewNum) {
                //advance 1 sub view
                var oldSub = this.subViews[this.currentSubView];
                previousSubView = this.currentSubView;
                this.currentSubView = viewNum;
                var newSub = this.subViews[this.currentSubView];

                for (var i = previousSubView; i < viewNum; i++) {
                    this.subViews[i].$el.removeClass('active').removeClass('upcoming').addClass('done');
                }
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            getURL: function() {
                //returns a string of the current root URL
                return 'http://' + window.location.hostname + window.location.pathname;
            },
            onSetState: function(stateModel) {
                this.setCurrentState(stateModel);
                this.goForward();
            },
            onSetLab: function(labModel) {
                 //store referene to current lab
                this.currentLab = labModel;

                //assign labModel to the lab sub view
                this.subViews[3].model = labModel;

                //render the lab subview
                this.subViews[3].render();
                this.goForward();

                router.navigate('lab/' + labModel.get('lab_id'));

            },
            currentState: null,
            currentLab: null,

            setCurrentState: function(stateModel) {
                //store referene to current state
                this.currentState = stateModel;
                
                //find lab models for this state
                var labModels = this.labCollection.filter(function(lab){
                    return lab.get('state') == stateModel.get('name');
                });
                //create new lab collection of the new state's labs
                var stateLabCollection = new LabCollection(labModels);

                //assign stateModel to the state sub view
                this.subViews[2].collection = stateLabCollection;

                //render the state subview
                this.subViews[2].render();
            },

            onLabRoute: function(lab_id) {
                var lab = this.labCollection.find(function(labModel) {
                    return labModel.get("lab_id") == lab_id;
                });

                var labState = lab.get('state');
                stateModel = this.stateCollection.find(function(stateModel) {
                    return stateModel.get('name') == labState;
                });
                
                Backbone.trigger('set:state', stateModel);

                this.currentLab = lab;

                this.subViews[3].model = lab;
                //render the lab subview
                this.subViews[3].render();

                this.goToSubView(3);


            },
            onCreditsShow: function() {
                Backbone.trigger('CreditsShow');
            }

        });
});
