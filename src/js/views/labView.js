define(
  [
    'jquery',
    'underscore',
    'backbone',
    'router',
    'templates'
  ],
  function(jQuery, _, Backbone, router, templates) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        events: {
            'click .backtostate': 'onBackClick',
            'click .iapp-back-button': 'onBackClick',
            'click .share-button': 'onShareShow',
            'click .lablevel-button': 'onLevelClick'
        },
        className: 'iapp-panel upcoming',
        template: templates['labView.html'],
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        onBackClick: function() {
            router.navigate('/_');
            Backbone.trigger("unset:lab");
            Backbone.trigger('app:goBack');
        },
        onShareShow: function() {
            Backbone.trigger('ShareShow');
        },
        onLevelClick: function() {
            Backbone.trigger("ModalShow");
        }
    });


});
