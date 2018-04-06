var Video = /** @class */ (function () {
    //constructor function
    function Video(videoId, videoTitle, videoURL, captions, channelId, isPublic, views, likes, dislikes, playListIds, description, tags, category, license, comments, recommended) {
        var _this = this;
        //methods
        this.addToPlaylist = function () {
            console.log("This adds the video to a playlist");
        };
        this.addView = function () {
            _this.views++;
            console.log("added a view");
        };
        this.addLike = function () {
            _this.likes++;
            console.log("added a like");
        };
        this.addDislike = function () {
            _this.dislikes++;
            console.log("added a dislike");
        };
        this.assignChannelName = function () {
            console.log("gets channel name from channel id");
        };
        this.addComment = function (comment) {
            _this.comments.push(comment);
            console.log("added a comment");
        }; //methods end
        //getters
        this.getVideoId = function () {
            return _this.videoId;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getVideoURL = function () {
            return _this.videoURL;
        };
        this.getCaptions = function () {
            return _this.captions;
        };
        this.getChannelId = function () {
            return _this.channelId;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getIsPublic = function () {
            return _this.isPublic;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getPlaylistIds = function () {
            return _this.playListIds;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getLicense = function () {
            return _this.license;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getRecommended = function () {
            return _this.recommended;
        }; //getters end
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        this.videoURL = videoURL;
        this.captions = captions;
        this.channelId = channelId;
        this.isPublic = isPublic;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.playListIds = playListIds;
        this.description = description;
        this.tags = tags;
        this.category = category;
        this.license = license;
        this.comments = comments;
        this.recommended = recommended;
    } //constructor function ends
    return Video;
}());
//  Make an object
var introToTypeScript = new Video(12345, //Video Id
"Intro to TypeScript", //Video Title
"https://youtu.be/mr66Ag8z7B0", // Video URL
"http://www.captios.srt/234532", //Video caption file 
123456, //channel ID
false, //If the video is public
50, //Views
2, //Likes
0, //dislikes
[12345, 34456, 2234], //playlists in which the video had been added
"This is intro to typescript video", //description
["typescript", "ES6", "EdWisor"], //tags
"People and Blogs", //category
"Youtube License", //license
[
    {
        name: "saurav",
        comment: "Great",
        timeStamp: "527255171"
    },
    { name: "Ajay",
        comment: "awesome",
        timeStamp: "232432437"
    }
], [
    {
        videoId: 3627252
    },
    {
        videoId: 3434343
    }
]);
//Show the values
console.log("Video Id : ", introToTypeScript.getVideoId());
console.log("Video Title : ", introToTypeScript.getVideoTitle());
console.log("Video URL : ", introToTypeScript.getVideoURL());
console.log("Channel Id : ", introToTypeScript.getChannelId());
console.log("Video Accessiblity : ", introToTypeScript.getIsPublic());
console.log("Views : ", introToTypeScript.getViews());
console.log("Likes : ", introToTypeScript.getLikes());
console.log("Dislikes : ", introToTypeScript.getDislikes());
console.log("The video is in following playlists : ", introToTypeScript.getPlaylistIds());
console.log("Description : ", introToTypeScript.getDescription());
console.log("Category : ", introToTypeScript.getCategory());
console.log("License : ", introToTypeScript.getLicense());
console.log("Comments : ", introToTypeScript.getComments());
console.log("Recommended : ", introToTypeScript.getRecommended());
//add a view
introToTypeScript.addView();
//add a like
introToTypeScript.addLike();
//add a comment
introToTypeScript.addComment({
    name: "Rahul",
    comment: "What is TypeScript",
    timeStamp: "23232322"
});
//New values after the methods have been operated
console.log("New Values #################################################################");
console.log("Video Id : ", introToTypeScript.getVideoId());
console.log("Video Title : ", introToTypeScript.getVideoTitle());
console.log("Video URL : ", introToTypeScript.getVideoURL());
console.log("Channel Id : ", introToTypeScript.getChannelId());
console.log("Video Accessiblity : ", introToTypeScript.getIsPublic());
console.log("Views : ", introToTypeScript.getViews());
console.log("Likes : ", introToTypeScript.getLikes());
console.log("Dislikes : ", introToTypeScript.getDislikes());
console.log("The video is in following playlists : ", introToTypeScript.getPlaylistIds());
console.log("Description : ", introToTypeScript.getDescription());
console.log("Category : ", introToTypeScript.getCategory());
console.log("License : ", introToTypeScript.getLicense());
console.log("Comments : ", introToTypeScript.getComments());
console.log("Recommended : ", introToTypeScript.getRecommended());
