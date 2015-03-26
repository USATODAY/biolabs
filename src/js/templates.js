define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap"><img class="info" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/info.svg" alt="info"></div>\n';

}
return __p
};

this["templates"]["info.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close"></div>\n\n<div class="iapp-content-wrap">\n    \n    <h2 class="iapp-share-intro iapp-panel-text-main">This is the info page.</h2>\n    \n\n</div>';

}
return __p
};

this["templates"]["intro.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap index">\n  <h1 class="page-header container"> \n      <img class="logo" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/biologo.svg" alt="BIOLABS IN YOUR BACKYARD">\n  </h1>\n\n  <p class="text intro"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n\n  <div class="button intro-view-state-button">view your state</div>\n  <div class="button intro-read-story-button">read story</div>\n\n  <div class ="container foot"> \n    <div class="ftbutton share-button"> share </div>\n  </div>\n</div>\n\n';

}
return __p
};

this["templates"]["labView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap content">\n  <div class="main">\n    <h1 class="page-header container"> \n      <img class="headimg lbhd" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/locator.svg" alt="">\n      <div class="text header labhd">' +
((__t = ( name )) == null ? '' : __t) +
'</div>\n    </h1>\n   \n    <p class="text labloc">' +
((__t = ( city )) == null ? '' : __t) +
', ' +
((__t = ( state )) == null ? '' : __t) +
'</p>\n    <div class="hr1"></div>\n    <p class="text chatt">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n\n    \n      <img class="photo" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/vtphoto.svg">\n      <div class="photocap">Photo caption will go here</div>\n      <div class="photocred">(Photo: ' +
((__t = ( photo_credit )) == null ? '' : __t) +
')</div>\n  </div>\n\n  <div class ="container foot">\n    <p class="byline"> by ' +
((__t = ( byline )) == null ? '' : __t) +
'</p> \n      <div class="document-button">\n          download incident documentation          \n      </div>\n    <div class="ftbutton">read story</div>\n    <div class="ftbutton backtostate">' +
((__t = ( state )) == null ? '' : __t) +
'</div>\n    <div class="ftbutton share-button">share</div>\n  </div>\n</div>\n';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close"></div>\n\n<div class="iapp-content-wrap">\n    \n    <h2 class="iapp-share-intro iapp-panel-text-main">Your turn. Continue this conversation by sharing this video.</h2>\n    \n    <p class="iapp-share-preview">' +
((__t = (share_language)) == null ? '' : __t) +
'</p>\n\n<div class="iapp-share-buttons">\n    <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/twitter.svg" alt="Twitter share"></a>\n    <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb.svg" alt="Facebook share"></a>\n    <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" alt="Email share"></a>\n</div>\n</div>';

}
return __p
};

this["templates"]["stateEntry.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="text lablevel">' +
((__t = ( highest_bsl )) == null ? '' : __t) +
'</p>\n<p class="text labnm">' +
((__t = ( name )) == null ? '' : __t) +
'</p>\n<p class="text labloc">' +
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
__p += '<div class="page-wrap content">\n  <div class="main">\n    <h1 class="page-header container"> \n      <img class="headimg stindexhd" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/locator.svg" alt="">\n      <div class="text header"> States </div>\n    </h1>\n    <div class="stcont"></div>\n    <img class="range" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/range.svg">\n  </div>\n\n  <div class ="container foot"> \n    <div class="ftbutton">read story</div>\n    <div class="ftbutton backtointro">intro</div>\n    <div class="ftbutton share-button">share</div>\n  </div>\n</div>\n';

}
return __p
};

this["templates"]["stateView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap content">\n\n  <div class="main">\n    <h1 class="page-header container"> \n      <img class="headimg sthd" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/locator.svg" alt="">\n      <div class="text header">' +
((__t = ( state )) == null ? '' : __t) +
'</div>\n    </h1>\n    <p class="text chatt explain">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>\n    <div class="hr1"></div>\n    <div class="lablistcont"></div>\n  </div>\n\n  <div class ="container foot"> \n    <div class="ftbutton">read story</div>\n    <div class="ftbutton backtoindex">States</div>\n    <div class="ftbutton share-button">share</div>\n  </div>\n\n</div>\n';

}
return __p
};

  return this["templates"];

});