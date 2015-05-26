define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-wrap">\n</div>\n';

}
return __p
};

this["templates"]["credits.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close"></div>\n\n<div class="page-wrap iapp-content-wrap">\n    \n    <h2 class="iapp-share-intro iapp-panel-text-main">Contributors</h2>\n    <p><strong>Reporting:</strong> Alison Young, Nick Penzenstadler, Catherine Sheffo, Mark Hannan, USA TODAY; Paul Giblin, The Arizona Republic; Liv Osby, (Asheville, N.C.) Citizen-Times; Jessie Balmert, Newspaper Network of Central Ohio; Jason Clayworth, The Des Moines Register; Shari Rudavsky, The Indianapolis Star; Emily Le Coz, The (Jackson, Miss.) Clarion-Ledger; Russ Walker, KING5 Seattle; Justin A. Hinkley, Lansing State Journal; Tom Wilemon, The (Nashville) Tennessean; Brett Kelman, The (Palm Springs, Calif.) Desert Sun; Jim Goodman, Rochester Democrat & Chronicle; Jeff Montgomery, The (Wilmington, Del.) News Journal</p>\n    <p><strong>Editing:</strong> John Hillkirk, John Kelly, Terry Byrne, Evan Eile, Kelly Jordan</p>\n    <p><strong>Design and presentation:</strong> Mitchell Thorson, Jerry Mosemak, Madeleine Deason</p>\n</div>\n';

}
return __p
};

this["templates"]["info.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close"></div>\n\n<div class="iapp-content-wrap">\n    <h2 class="iapp-share-intro iapp-panel-text-main">About the labs and records in this interactive</h2>\n    <p>USA TODAY identified these biosafety level 3 and biosafety level 4 labs through publicly available information, including government grant records and reports, research published in scientific journals and information found in the organizations’ own websites and press releases.</p>\n    <p>To gain insight into the safety records of a diverse group of labs, many of them operated by private organizations that are not subject to freedom of information laws, USA TODAY reporters sought copies of the organizations’ institutional biosafety committee (IBC) records. </p>\n    <p>Labs that do research involving genetic manipulations of organisms, or recombinant DNA, and that receive funding from the National Institutes of Health and some other government entities are required under their grants to comply with certain research guidelines. These NIH Guidelines contain a requirement that labs provide copies of their IBC meeting minutes and records of NIH-reportable incidents to any member of the public who requests them.</p>\n    <p>The IBC minutes posted on this site generally cover meetings that occurred  in 2013 and 2014. USA TODAY’s request generally sought documents of NIH-reportable incidents that occurred from 2012 to late 2014.</p>\n    <p>Although these records provide an important window on an organization’s safety record, they may cover only a subset of the research going on at any given lab because their focus is on rDNA research. Therefore, incidents involving pathogens that aren’t genetically modified may not be reflected in the documents collected here. Also, not all labs receive NIH funding and  may not be subject to the transparency mandated by the NIH Guidelines.</p>\n    <p>For many of the labs operated by federal agencies and the military, USA TODAY filed Freedom of Information Act requests for copies of recent lab incident reports. Reporters also filed state open records requests for some state universities.</p>\n    <p>Some lab operators, citing a risk of terrorism, balked at providing information about their research, lab accidents or the names of the pathogens involved – even when these organizations publicized research with these same pathogens on their websites, in press releases and in scientific journal articles. Some claimed that the Federal Select Agent Program, which oversees research with organisms that have the potential to be used as bioweapons, prohibits them from releasing information about lab incidents or about the kind of research they do. But that’s not true, said officials at the CDC and USDA, the two agencies that run the select agent program.</p>\n    <p>“With the exception of specific security information (such as IT system passwords, key locations and lock combinations), the select agent regulations place no restrictions on the releasing [of] information related to select agents or toxins by regulated entities,” said CDC spokesman Jason McDonald.</p>\n    <p>At the USDA’s Animal Plant Health Inspection Service, Freeda Isaac, APHIS’ director of Agriculture Select Agent Services, said: “The CDC and APHIS Federal Select Agent Program has not instructed entities to withhold select agent information from the public.”</p>\n    <p>Officials at NIH, a significant funding source for research across the country involving dangerous pathogens – including potential bioterror agents – also have emphasized to grant recipients that the public is entitled to a certain level of transparency. In response to questions from labs about requests for copies of their safety committee records, the NIH issued a November 2014 memo that states: “Integral to the NIH Guidelines … are the principles of public participation and transparency” through the release of biosafety committee minutes and incident reports. </p>\n    <p>While institutions can redact certain information for privacy or proprietary concerns, the NIH memo reminded lab officials that “information that is widely available from numerous other sources (e.g., agent names and names of principal investigators) is not generally considered private or proprietary.” </p>\n    \n\n</div>\n';

}
return __p
};

this["templates"]["intro.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-panel-inner-wrap">\n    <div class="info ftbutton">About this project</div>\n    <div class="page-wrap index">\n        <div class="main">\n            <h1 class="page-header container"> \n                <img class="logo" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/biologo.svg" alt="BIOLABS IN YOUR BACKYARD">\n            </h1>\n\n            <p class="text intro">A USA TODAY Network investigation identifies more than 200 biosafety level 3 and 4 lab facilities that work with dangerous pathogens - and reveals safety records that some of them fought to keep secret.</p>\n\n            <div class="button intro-view-state-button">view your state</div>\n        </div>\n         <div class ="container foot"> \n            <div class="ftbutton read-story">read story</div>\n            <div class="ftbutton share-button"> share </div>\n            <div class="ftbutton credits-button"> contributors </div>\n        </div>\n    </div>\n</div>\n';
 if (! isMobile) { ;
__p += '\n<video id="introvid" class="bgvideo" loop autoplay poster="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/biolabs_intro_still.jpg">\n    <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/video/intro.mp4" type="video/mp4" />\n    <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/video/intro.ogv" type="video/ogg" />\n</video>\n';
 } else { ;
__p += '\n<img class="iapp-intro-bg-image" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/intro.gif" alt="">\n';
 } ;
__p += '\n\n<div class="iapp-intro-video-overlay"></div>\n\n';

}
return __p
};

this["templates"]["labView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-panel-inner-wrap">\n<div class="page-wrap content">\n    <div class="main">\n    <div class="info ftbutton">About this project</div>\n    <div class="iapp-back-button ftbutton">Back</div>\n    <div class="page-header container"> \n        <img class="headimg lbhd" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/locator.svg" alt="">\n        <div class="page-header-info-wrap">\n          <h2 class="text header labhd">' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\n          <p class="text labloc">' +
((__t = ( city )) == null ? '' : __t) +
', ' +
((__t = ( state )) == null ? '' : __t) +
'</p>\n        </div>\n    </div>\n   <div class="lablevel-button">' +
((__t = ( highest_bsl )) == null ? '' : __t) +
'</div>\n  ';
 if(photo !== "") { ;
__p += '\n\n\n   <img class="photo" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/labs/' +
((__t = ( photo )) == null ? '' : __t) +
'">\n      <div class="photocred">(Photo: ' +
((__t = ( photo_credit )) == null ? '' : __t) +
')</div>\n\n   ';
 } ;
__p += '\n    <div class="hr1"></div>\n    <p class="byline"> by ' +
((__t = ( byline )) == null ? '' : __t) +
'</p> \n    <div class="text chatt">\n        ';
 _.each(description, function(description_paragraph) { ;
__p += '\n        \n        <p class="">' +
((__t = ( description_paragraph )) == null ? '' : __t) +
'</p>\n\n        ';
 }) ;
__p += '\n    </div>\n    ';
 if(photo !== "") { ;
__p += '\n    <div class="photocap"><strong>Photo: </strong>' +
((__t = ( photo_cutline )) == null ? '' : __t) +
'</div>\n     ';
 } ;
__p += '\n  </div>\n\n  \n</div>\n</div>\n<div class ="container foot">\n    ';
 if(docs_file !== "") { ;
__p += '\n          <a class="link" href="' +
((__t = (docs_file)) == null ? '' : __t) +
'" target="_blank">\n          <div class="document-button">\n          DOWNLOAD SAFETY, ACCIDENT RECORDS\n          </div>\n      </a>\n    ';
 } ;
__p += '\n    <div class="ftbutton ">read story</div>\n    <div class="ftbutton share-button">share</div>\n    <div class="ftbutton credits-button"> contributors </div>\n</div>\n\n';

}
return __p
};

this["templates"]["modal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-modal-close"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/close-icon.svg" alt="close" /></div>\n<p class="modal-text">' +
((__t = ( text )) == null ? '' : __t) +
'</p>\n';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-close iapp-clickable"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/black-history/img/close.svg" alt="close"></div>\n\n<div class="page-wrap iapp-content-wrap">\n    \n    <h2 class="iapp-share-intro iapp-panel-text-main">Share this interactive</h2>\n    \n\n<div class="iapp-share-buttons">\n    <a href="https://twitter.com/intent/tweet?url=' +
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
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" alt="Email share"></a>\n</div>\n</div>\n';

}
return __p
};

this["templates"]["stateEntry.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="text lablevel">' +
((__t = ( highest_bsl )) == null ? '' : __t) +
'</p>\n<p class="text labloc">' +
((__t = ( city )) == null ? '' : __t) +
' , ' +
((__t = ( state )) == null ? '' : __t) +
'</p>\n<p class="text labnm">' +
((__t = ( name )) == null ? '' : __t) +
'</p>\n\n<div class="hr2"></div>\n';

}
return __p
};

this["templates"]["stateIndexView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel-inner-wrap">\n    <div class="page-wrap content">\n      <div class="main">\n        <div class="info ftbutton">About this project</div>\n        <div class="iapp-back-button ftbutton">Back</div>\n        <div class="page-header container"> \n          <img class="headimg stindexhd" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/locator.svg" alt="">\n          <div class="text header">Choose Your State</div>\n        </div>\n          <p class="text chatt explain">Because of fragmented oversight, even the federal government doesn’t know where all of the “high containment” labs in the U.S. are located. These biosafety level 3 and 4 labs, the highest levels of containment, use special equipment and procedures to prevent the release of bacteria, viruses and toxins.</p>\n        <div class="stcont"></div>\n        <img class="range" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/range.svg">\n      </div>\n    </div>\n</div>\n      <div class ="container foot"> \n        <div class="ftbutton ">read story</div>\n        <div class="ftbutton share-button">share</div>\n        <div class="ftbutton credits-button"> contributors </div>\n      </div>\n\n';

}
return __p
};

this["templates"]["stateView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel-inner-wrap">\n    <div class="page-wrap content">\n\n      <div class="main">\n        <div class="info ftbutton">About this project</div>\n        <div class="iapp-back-button ftbutton">Back</div>\n        <h1 class="page-header container"> \n          <img class="headimg sthd" src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/biolabs/img/locator.svg" alt="">\n          <div class="text header">' +
((__t = ( state )) == null ? '' : __t) +
'</div>\n        </h1>\n        <p class="text chatt explain">Facilities that include BSL-3 or BSL-4 labs identified by USA TODAY’s research. Additional “high-containment” labs may also exist in this state.</p>\n        <div class="hr1"></div>\n        <div class="lablistcont"></div>\n      </div>\n\n  </div>\n\n</div>\n<div class ="container foot"> \n        <div class="ftbutton ">read story</div>\n        <div class="ftbutton share-button">share</div>\n        <div class="ftbutton credits-button"> contributors </div>\n      </div>\n\n\n';

}
return __p
};

  return this["templates"];

});