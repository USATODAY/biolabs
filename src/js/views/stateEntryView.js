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
            this.render();
        },
        events: {
            'click': 'onClick'
        },

        template: templates["stateEntry.html"],
        render: function(data) {
            
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        onClick: function() {
            Backbone.trigger('set:lab', this.model);
        }
    });


});
