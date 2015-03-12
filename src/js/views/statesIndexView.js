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
            
            //render this views template into this views element
            this.$el.html(this.template());
            
            //store a reference to the view in _this
            var _this = this;
            
            //loop through all the states in the collection and append them to the element
            this.collection.each(function(stateModel) {
                _this.$('.stcont').append(_this.stateEntryTemplate(stateModel.toJSON()));
            });
            return this;
        }
    });


});
