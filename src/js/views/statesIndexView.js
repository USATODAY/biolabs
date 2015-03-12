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
        template: templates['stateIndexView.html'],
        stateEntryTemplate: _.template('<div class="stbutton medium"><%= abbreviation %></div>'),
        render: function(data) {
            
            this.$el.html(this.template());
            this.collection.each(function(stateModel) {
                this.$('.stcont').append(this.stateEntryTemplate.toJSON());
            });
            return this;
        }
    });


});
