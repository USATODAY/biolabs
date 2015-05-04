define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/stateIndexEntry'
  ],
  function(jQuery, _, Backbone, templates, StateIndexEntry) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        events: {
            'click .backtointro': 'onBackClick',
            'click .iapp-back-button': 'onBackClick',
            'click .share-button': 'onShareShow'
        },
        className: 'iapp-panel upcoming',
        template: templates['stateIndexView.html'],
        render: function(data) {
            
            //render this views template into this views element
            this.$el.html(this.template());
            
            //store a reference to the view in _this
            var _this = this;
            
            //loop through all the states in the collection and append them to the element
            this.collection.each(function(stateModel) {
                var indexEntryView = new StateIndexEntry({model: stateModel});
                
                
                //render each state button with the state model and className defined above
                _this.$('.stcont').append(indexEntryView.el);
            });
            return this;
        },
        onBackClick: function() {
            Backbone.trigger('app:goBack');
        },
        onShareShow: function() {
            Backbone.trigger('ShareShow');
        }
    });


});
