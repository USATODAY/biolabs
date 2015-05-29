define(
    [
        'jquery',
        'underscore',
        'backbone',
        'templates',
        'api/analytics'
    ],
    function(jQuery, _, Backbone, templates, Analytics) {
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "InfoShow", this.onInfoShow);
                this.render();
            },
            render: function() {
                
                this.$el.html(this.template());



                return this;
            },
            events: {
                'click .iapp-share-close': 'onClickClose',
            },
            template: templates['info.html'],
            className: 'iapp-share-panel iapp-panel upcoming',
            onInfoShow: function() {
                this.$el.removeClass('upcoming').addClass('active');
            },
            onClickClose: function() {
                this.$el.addClass('upcoming').removeClass('active');
                Backbone.trigger('share:close');
            },
            windowPopup: function(url, width, height) {
                // Calculate the position of the popup so
                // it’s centered on the screen.
                var left = (screen.width / 2) - (width / 2),
                top = (screen.height / 2) - (height / 2);

                window.open(
                    url,
                    "",
                    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
                );
            }
        });
});
