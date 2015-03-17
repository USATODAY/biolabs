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
        className: 'iapp-panel upcoming',
        template: templates['stateView.html'],
        render: function(data) {
            console.log(this.collection.toJSON());
            
            this.$el.html(this.template({states: this.collection.toJSON()}));
            return this;
        }
    });


});
