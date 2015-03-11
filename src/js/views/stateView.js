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
        className: 'iapp-panel active',
        template: templates['stateView.html'],
        render: function(data) {
            
            this.$el.html(this.template());
            return this;
        }
    });


});
