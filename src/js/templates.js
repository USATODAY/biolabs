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
__p += '<div class="page-wrap index">\n  <h1 class="page-header container"> \n    <img class="info" src="/img/info.svg" alt="info">\n    <img class="logo" src="/img/biologo.svg" alt="BIOLABS IN YOUR BACKYARD">\n   </h1>\n\n  <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n\n  <div class="button intro-view-state-button">view your state</div>\n  <div class="button intro-read-story-button">read story</div>\n\n  <div class ="container foot"> \n    <div class="ftbutton"> share </div>\n  </div>\n</div>\n\n';

}
return __p
};

this["templates"]["labView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap content">\n  <h1 class="page-header container"> \n    <img class="info" src="/img/info.svg" alt="info">\n    <img class="headimg vt" src="/img/virginiatech.svg" alt="Virginia">\n  </h1>\n\n  <img class="photo" src="/img/vtphoto.svg">\n  <figcaption class="photocred">(Photo: ' +
((__t = ( photo_credit )) == null ? '' : __t) +
')</figcaption>\n\n  <a class="link" href="https://www.ento.vt.edu/facilities/bsl-labs.html" target="_blank">\n    <p class="text labnm">' +
((__t = ( name )) == null ? '' : __t) +
'</p>\n  </a>\n  <p class="text chatt">' +
((__t = ( city )) == null ? '' : __t) +
', ' +
((__t = ( state )) == null ? '' : __t) +
'</p>\n  <div class="hr1"></div>\n  <p class="text chatt lab-body">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n\n\n  <div class ="container foot">\n    <p class="byline"> by ' +
((__t = ( byline )) == null ? '' : __t) +
'</p> \n      <div class="document-button">\n          download incident documentation          \n      </div>\n    <div class="ftbutton">read story</div>\n    <div class="backtostate">\n      <div class="ftbutton">' +
((__t = ( state )) == null ? '' : __t) +
'</div>\n    </div>\n    <div class="ftbutton">share</div>\n  </div>\n</div>';

}
return __p
};

this["templates"]["stateEntry.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="text labnm">' +
((__t = ( name )) == null ? '' : __t) +
'</p>\n    <p class="text labloc">' +
((__t = ( city )) == null ? '' : __t) +
' , ' +
((__t = ( state )) == null ? '' : __t) +
'</p>\n\n<div class="hr2"></div>';

}
return __p
};

this["templates"]["stateIndexView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap content">\n<h1 class="page-header container"> \n    <img class="info" src="/img/info.svg" alt="info">\n    <img class="headimg" src="/img/states.svg" alt="States">\n  </h1>\n\n  <div class="stcont">\n  </div>\n\n<img class="range" src="/img/range.svg">\n \n\n  <div class ="container foot"> \n    <div class="ftbutton">read story</div>\n    <a href="index.html">\n      <div class="ftbutton">intro</div>\n    </a>\n    <div class="ftbutton">share</div>\n  </div>\n  </div>\n';

}
return __p
};

this["templates"]["stateView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap content">\n  <h1 class="page-header container"> \n    <img class="info" src="/img/info.svg" alt="info">\n    <img class="headimg" src="/img/virginia.svg" alt="Virginia">\n  </h1>\n\n  <p class="text chatt">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>\n  <div class="hr1"></div>\n\n<div class="lablistcont"></div>\n\n  <div class ="container foot"> \n    <div class="ftbutton">read story</div>\n    <div class="backtoindex">\n      <div class="ftbutton">States</div>\n    </div>\n    <div class="ftbutton">share</div>\n  </div>\n</div>';

}
return __p
};

  return this["templates"];

});