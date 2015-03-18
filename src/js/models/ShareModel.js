define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/config'
  ],
  function(jQuery, _, Backbone, config){

    return Backbone.Model.extend( {
        defaults: {
            'default_share_language': 'Biolabs',
            'stillimage': 'http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb-post.jpg',
            'lab_id': null,
            'fbShare': '',
            'twitterShare': '',
            'share_language': '',  
            'encodedShare': '',
            'fb_id': '',
            'fb_redirect': 'http://' + window.location.hostname + '/pages/interactives/fb-share/',
            'email_link': ''

 

            
        },

        initialize: function() {
            var baseURL = window.location.origin + window.location.pathname;
           this.set({
                'baseURL': baseURL,
                'fbShare': this.createFbShareURL(baseURL),
                'twitterShare': this.createTwitterShareURL(baseURL),
                'share_language': this.get('default_share_language'),  
                'encodedShare': encodeURIComponent(this.get('default_share_language')),
                'fb_id': config.facebook.app_id,
                'email_link': this.createEmailLink(baseURL)
                
            }); 

           this.listenTo(Backbone, "set:lab", this.onSetLab);
          
           
        },

        createFbShareURL: function(url) {   
            url = url.replace('#', '%23');
            return encodeURI(url); 
        },

        createTwitterShareURL: function(url) {

            return encodeURIComponent(url); 
        },

        createEmailLink: function(url) {
            return "mailto:?body=" + encodeURIComponent(this.get('sharelanguage')) +  "%0d%0d" + this.createTwitterShareURL(url) + "&subject=";
        },

        updateLanguage: function(newShareStr) {
            this.set({
                'sharelanguage': newShareStr,
                'encodedShare': encodeURIComponent(newShareStr)
            });


        },

        updateUrls: function() {
            var shareUrl;
            var baseURL = this.get('baseURL');
            
            this.updateLanguage(this.get('default_share_language'));
            shareUrl = baseURL;

            var lab_id = this.get('lab_id');

            if (lab_id !== null) {
                shareUrl = shareUrl + '#lab/' + lab_id;
            }

            this.set({
                'fbShare': this.createFbShareURL(shareUrl),
                'twitterShare': this.createTwitterShareURL(shareUrl),
                'email_link': this.createEmailLink(shareUrl)
            });

        },

        onSetLab: function(labModel) {
            var lab_id = labModel.get("lab_id");
            this.set({lab_id: lab_id});

            this.updateUrls();

        }

        

        

       
    });

});