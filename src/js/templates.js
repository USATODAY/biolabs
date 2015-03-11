define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["templates"]["intro.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap index">\n  <h1 class="page-header container"> \n    <img class="info" src="/img/info.svg" alt="info">\n    <img class="logo" src="/img/biologo.svg" alt="BIOLABS IN YOUR BACKYARD">\n   </h1>\n\n  <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n\n  <a href="viewyourstate.html">\n    <div class="button">view your state</div>\n  </a>\n  <div class="button">read story</div>\n\n  <div class ="container foot"> \n    <div class="ftbutton"> share </div>\n  </div>\n</div>\n\n';

}
return __p
};

this["templates"]["stateView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});