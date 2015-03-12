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
        className: function() {
            var className = 'stbutton ';
            //get the number of labs for each state
            numLabs = this.model.get('labNum');

            //set the className variable based on the number of labs.
            if (numLabs < 1) {
                className += 'none';
            } else if (numLabs < 5) {
                className += 'light';
            } else if (numLabs < 10) {
                className += 'medium';
            } else {
                className += 'dark';
            }
            return className;
        },
        template: _.template('<%= abbreviation %>'),
        render: function(data) {
            
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        onClick: function() {
            Backbone.trigger('set:state', this.model);
        }
    });


});
