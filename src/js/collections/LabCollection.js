define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/labModel'
    ], 
    function(jQuery, _, Backbone, LabModel) {
        return Backbone.Collection.extend({
            model: LabModel
        });
});
