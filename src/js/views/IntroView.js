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
            'click .intro-view-state-button': 'onViewStateClick'
        },
        className: 'iapp-panel active',
        template: templates['intro.html'],
        render: function(data) {
            
            this.$el.html(this.template());
            return this;
        },
        onViewStateClick: function() {
            console.log('click');
            Backbone.trigger('app:advance');
        }
    });


});
