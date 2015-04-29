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
                this.listenTo(Backbone, "ModalShow", this.onModalShow);
                this.render();
            },
            render: function() {
                this.$el.html(this.template({text: "Laboratories operate at one of four biological containment levels, ranging from biosafety level 1 (BSL-1), used for the least risky pathogens, to biosafety level 4 (BSL-4), which is used for deadly pathogens that lack treatments. Most organizations that operate BSL-3 or BSL-4 labs, also operate labs at the lower biosafety levels."}));
                return this;
            },
            events: {
                'click .iapp-modal-close': 'onClickClose'
            },
            template: templates['modal.html'],
            className: 'iapp-modal upcoming',
            onModalShow: function() {
                this.$el.removeClass('upcoming').addClass('active');
            },
            onClickClose: function() {
                this.$el.addClass('upcoming').removeClass('active');
                Backbone.trigger('modal:close');
            },
        });
});
