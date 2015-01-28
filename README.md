# social-publisher
facebook and twitter status update library for Meteor 
 
Example:

var publisher = new socialPublisher(
    {
        "twitter":
        {
            accessTokenSecret:"%%%",
            accessToken:"%%%",
            "consumerKey":"%%%",
            "secret":"%%%"
        },
        "facebook":
        {
            accessToken:"%%%",
            "consumerKey":"%%%",
            "secret":"%%%"
        }
    });
publisher.post(new Date());
