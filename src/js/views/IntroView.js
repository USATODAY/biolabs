define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates'
  ],
  function(jQuery, _, Backbone, templates) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        events: {
            'click .intro-view-state-button': 'onViewStateClick',
            'click .share-button': 'onShareShow',
        },
        className: 'iapp-panel active intro-panel',
        template: templates['intro.html'],
        render: function(data) {
            
            this.$el.html(this.template());
            return this;
        },
        onViewStateClick: function() {
            console.log('click');
            Backbone.trigger('app:advance');
        },
        onShareShow: function() {
            Backbone.trigger('ShareShow');
        },
        onCreditsShow: function() {
            Backbone.trigger('CreditsShow');
        }
    });


});
