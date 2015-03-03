define(
  [
    'jquery',
    'underscore',
    'templates',
    'd3'
  ],
  function(jQuery, _, templates, d3){
    var app = app || {};

    app.init = function() {
      console.log("app initialized");
      jQuery("body").append(templates["template.html"]({test:""}));
    };

    $.getJSON("data/data.json", function(data) {
      console.log(data);
    });

    return app;

});
