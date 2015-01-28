socialPublisher=function(options){
    this.options = options;
}


socialPublisher.prototype = {
    OAuth: Package.oauth1.OAuth1Binding,
    post: function(text){
        for(var i in this.options) {
            this.proceed(i,this.options[i],text);
        }
    },
    proceed: function(service, config, text){
        if(service=="twitter"){

            var oa = new this.OAuth({
                consumerKey: config.consumerKey,
                secret: config.secret
            });
            oa.accessToken = config.accessToken;
            oa.accessTokenSecret = config.accessTokenSecret;
            var tweet = {
                status: text,
                in_reply_to_status_id: null
            }

            var result = oa.call('POST',
                "https://api.twitter.com/1.1/statuses/update.json",
                tweet
            );
        }

        if(service=="facebook"){

            var oa = new this.OAuth({
                consumerKey: config.consumerKey,
                secret: config.secret
            });
            oa.accessToken = config.accessToken;
            var msg = {
                message: text
            }
 
            var result = oa.call('POST',
                "https://graph.facebook.com/v2.2/"+config.userId+"/feed?access_token="+config.accessToken,
                msg
            );
        }
    }
}
