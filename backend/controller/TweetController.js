const { Router } = require("express");
const Tweets = require("../models/Tweets");

class TweetNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.code = "TWEET_NOT_FOUND";
        this.message = "This tweet does not exists"
        this.status = 404
    }
}

class TweetBadRequestException extends Error {
    constructor(message) {
      super(message);
      this.code = "BAD_REQUEST_FOR_TWEET";
      this.message = "This tweet endpoint not exists";
      this.status = 400;
    }
}

/**
 * @param {Express.Application} app
 * @param {Router} router
 */
module.exports = function(app, router){
    router.get(
        "/tweets",
        [],
        async (req, res)=>{
            try {
                res.send(await Tweets.findAll());
            } catch (error) {
                throw new TweetNotFoundException();
            }
            
        }
    );
    router.post(
        "/tweets",
        [],
        async (req, res)=>{
            console.log(req.body)
            try {
                res.send(await Tweets.create({
                    title : req.body.title,
                    message : req.body.message
                }));
            } catch (error) {
                throw new TweetBadRequestException();
            }
            
        }
    );
}