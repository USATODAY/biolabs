define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/stateEntryView'
  ],
  function(jQuery, _, Backbone, templates, stateEntryView) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        events: {
            'click .backtoindex': 'onBackClick'
        },
        className: 'iapp-panel upcoming',
        template: templates['stateView.html'],
        render: function(data) {
            console.log(this.collection.toJSON());
            
            this.$el.html(this.template({states: this.collection.toJSON()}));
            this.collection.each(function(labmodel) {
                var entryView = new stateEntryView({
                    model: labmodel
                });
                this.$('.lablistcont').append(
                entryView.render().el
                );

            });
            return this;
        },
        onBackClick: function() {
            Backbone.trigger('app:goBack');
        }
    });


});
