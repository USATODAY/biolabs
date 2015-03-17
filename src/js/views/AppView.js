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
    'collections/StateCollection',
    'collections/LabCollection',
    'router',
    'models/config',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, Analytics, IntroView, StatesIndexView, StateView, LabView, StateCollection, LabCollection, router, config, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
                this.listenTo(Backbone, "app:advance", this.goForward);
                this.listenTo(Backbone, "app:goBack", this.goBack);
                this.listenTo(Backbone, "set:state", this.onSetState);
                this.listenTo(Backbone, "set:lab", this.onSetLab);
                this.listenTo(Backbone, "router:lab", this.onLabRoute);

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
                console.log(this.labCollection);

                var introView = new IntroView();
                this.$el.append(introView.render(dataManager.data).el);
                this.subViews.push(introView);

                var stateIndexView = new StatesIndexView({collection: new StateCollection(dataManager.data.states)});
                this.$el.append(stateIndexView.render().el);
                this.subViews.push(stateIndexView);

                var stateView = new StateView();
                this.$el.append(stateView.el);
                this.subViews.push(stateView);

                var labView = new LabView();
                this.$el.append(labView.el);
                this.subViews.push(labView);
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
                console.log("back");
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
                    this.subViews[i].$el.removeClass('active').addClass('done');
                }
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            getURL: function() {
                //returns a string of the current root URL
                return 'http://' + window.location.hostname + window.location.pathname;
            },
            onSetState: function(stateModel) {
                //store referene to current state
                this.currentState = stateModel;
                
                //find lab models for this state
                var labModels = this.labCollection.filter(function(lab){
                    return lab.get('state') == stateModel.get('name');
                });
                //create new lab collection of the new state's labs
                var stateLabCollection = new LabCollection(labModels);
                console.log(stateLabCollection);

                //assign stateModel to the state sub view
                this.subViews[2].collection = stateLabCollection;

                //render the state subview
                this.subViews[2].render();
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

            onLabRoute: function(lab_id) {
                var lab = this.labCollection.find(function(labModel) {
                    return labModel.get("lab_id") == lab_id;
                });

                this.currentLab = lab;

                this.subViews[3].model = lab;
                //render the lab subview
                this.subViews[3].render();

                this.goToSubView(3);
                console.log(this.currentLab);


            },
        });
});
