
class Video{
    //properties
    private videoId :number //Video Id
    private videoTitle:string // Title
    private videoURL:string //URL
    private captions:string //Captions
    private channelId:number // Channel Id that uploaded the video
    private channelName:string //Channel Name
    private isPublic:boolean // Accessiblity of video
    private views:number //No. of views
    private likes:number // No of likes
    private dislikes:number // No of dislikes
    private playListIds:number[] //Playlist Ids in which the video is there
    private description:string //Description
    private tags:string[] //Tags
    private category:string //Category
    private license:string //License
    private comments:object[] //Comments
    private recommended:object[] //Recommended

    //constructor function
    constructor(videoId:number,videoTitle:string,videoURL:string,captions:string,channelId:number,isPublic:boolean,views:number,likes:number,dislikes:number,playListIds:number[],description:string,tags:string[],category:string,license:string,comments:object[],recommended:object[]){
        this.videoId = videoId
        this.videoTitle = videoTitle
        this.videoURL = videoURL
        this.captions = captions
        this.channelId = channelId
        this.isPublic = isPublic
        this.views = views
        this.likes = likes
        this.dislikes = dislikes
        this.playListIds = playListIds
        this.description = description
        this.tags = tags
        this.category = category
        this.license = license
        this.comments = comments
        this.recommended = recommended
    } //constructor function ends

    //methods
    addToPlaylist = () => {
        console.log("This adds the video to a playlist")
    }
    addView = () => {
        this.views++
        console.log("added a view")
    }
    addLike = () => {
        this.likes++
        console.log("added a like")
        
    }
    addDislike = () => {
        this.dislikes++
        console.log("added a dislike")
    }
    assignChannelName = () => {
        console.log("gets channel name from channel id")
    }
    addComment = (comment:object) => {
        this.comments.push(comment)
        console.log("added a comment")
    }//methods end
    
    //getters
    getVideoId = () => {
        return this.videoId
    }
    getVideoTitle = () => {
        return this.videoTitle
    }
    getVideoURL = () => {
        return this.videoURL
    }
    getCaptions = () => {
        return this.captions
    }
    getChannelId = () => {
        return this.channelId
    }
    getChannelName = () => {
        return this.channelName
    }
    getIsPublic = () => {
        return this.isPublic
    }
    getViews = () => {
        return this.views
    }
    getLikes = () => {
        return this.likes
    }
    getDislikes = () => {
        return this.dislikes
    }
    getPlaylistIds = () => {
        return this.playListIds
    }
    getDescription = () =>{
        return this.description
    }
    getCategory = () => {
        return this.category
    }
    getLicense = () => {
        return this.license
    }
    getComments = () => {
        return this.comments
    }
    getRecommended = () => {
        return this.recommended
    }//getters end
}

//  Make an object
let introToTypeScript = new Video(
    12345, //Video Id
    "Intro to TypeScript", //Video Title
    "https://youtu.be/mr66Ag8z7B0", // Video URL
    "http://www.captios.srt/234532",//Video caption file 
    123456, //channel ID
    false, //If the video is public
    50, //Views
    2, //Likes
    0, //dislikes
    [12345,34456,2234], //playlists in which the video had been added
    "This is intro to typescript video",//description
    ["typescript","ES6","EdWisor"],//tags
    "People and Blogs",//category
    "Youtube License",//license
    [   //comments
        {   
            name: "saurav",
            comment: "Great",
            timeStamp : "527255171"
        },
        {   name : "Ajay",
            comment : "awesome", 
            timeStamp : "232432437"
        }
    ],
    [ //recommended
        {
            videoId : 3627252
        },
        {
            videoId : 3434343
        }
    ]
);

//Show the values
console.log("Video Id : ",introToTypeScript.getVideoId())
console.log("Video Title : ", introToTypeScript.getVideoTitle())
console.log("Video URL : ", introToTypeScript.getVideoURL())
console.log("Channel Id : ",introToTypeScript.getChannelId())
console.log("Video Accessiblity : ", introToTypeScript.getIsPublic())
console.log("Views : ", introToTypeScript.getViews())
console.log("Likes : ",introToTypeScript.getLikes())
console.log("Dislikes : ",introToTypeScript.getDislikes())
console.log("The video is in following playlists : ", introToTypeScript.getPlaylistIds())
console.log("Description : ", introToTypeScript.getDescription())
console.log("Category : ", introToTypeScript.getCategory())
console.log("License : ",introToTypeScript.getLicense())
console.log("Comments : ",introToTypeScript.getComments())
console.log("Recommended : ", introToTypeScript.getRecommended())

//add a view
introToTypeScript.addView()
//add a like
introToTypeScript.addLike()
//add a comment
introToTypeScript.addComment({
    name : "Rahul",
    comment : "What is TypeScript",
    timeStamp : "23232322"
})

//New values after the methods have been operated
console.log("New Values #################################################################")
console.log("Video Id : ",introToTypeScript.getVideoId())
console.log("Video Title : ", introToTypeScript.getVideoTitle())
console.log("Video URL : ", introToTypeScript.getVideoURL())
console.log("Channel Id : ",introToTypeScript.getChannelId())
console.log("Video Accessiblity : ", introToTypeScript.getIsPublic())
console.log("Views : ", introToTypeScript.getViews())
console.log("Likes : ",introToTypeScript.getLikes())
console.log("Dislikes : ",introToTypeScript.getDislikes())
console.log("The video is in following playlists : ", introToTypeScript.getPlaylistIds())
console.log("Description : ", introToTypeScript.getDescription())
console.log("Category : ", introToTypeScript.getCategory())
console.log("License : ",introToTypeScript.getLicense())
console.log("Comments : ",introToTypeScript.getComments())
console.log("Recommended : ", introToTypeScript.getRecommended())