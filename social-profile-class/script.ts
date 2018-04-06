class Profile {
    private id : number// The facebook Id
    private about ?: string// About Me
    private phoneNo ?: number// Phone No
    private email ?: string// Email
    private workPlaces ?: string[]// Workplaces
    private education ?: string[]// Education
    private dob : string// Date of Birth
    private homeTown ?: string// home town
    private familyMember ?: number[]// Facebook Ids of Family members
    private friends ?: number[]// Facebook Ids of friends
    private photos ?: string[]// URL of photos
    private videos ?: string[]// URL of videos
    private checkIns ?: string[]// Checkins
    private sports ?: string[]// sports
    private music ?: string[]// music
    private likes ?: string[]// likes

    constructor(id : number, dob : string, friends ?: number[], photos ?: string[], videos ?: string[], about ?: string, phoneNo ?: number, email ?: string, workPlaces ?: string[],education ?: string[],  homeTown ?: string, familyMember ?: number[],    checkIns ?: string[], sports ?: string[], music ?: string[], likes ?: string[]){
        this.id = id
        this.about = about
        this.phoneNo = phoneNo
        this.email = email
        this.workPlaces = workPlaces
        this.education = education
        this.dob = dob
        this.homeTown = homeTown
        this.familyMember = familyMember
        this.friends = friends
        this.photos = photos
        this.videos = videos
        this.checkIns = checkIns
        this.sports = sports
        this.music = music
        this.likes = likes
    }
    //getters
    getId = () => {
        return this.id
    }
    getDob = () => {
        return this.dob
    }
    
    getAbout = () => {
        if(this.about){
            return this.about
        } else {
            return null
        }
    }
    getPhoneNo = () => {
        if(this.phoneNo){
            return this.phoneNo
        } else {
            return null
        }
    }
    getEmail = () => {
        if(this.email){
            return this.email
        } else {
            return null
        }
    }
    getWorkPlaces = () => {
        if(this.workPlaces){
            return this.workPlaces
        } else {
            return null
        }
    }
    getEducation = () => {
        if(this.education){
            return this.education
        } else {
            return null
        }
    }
    getHomeTown = () => {
        if(this.homeTown){
            return this.homeTown
        } else {
            return null
        }
    }
    getFamilyMember = () => {
        if(this.familyMember){
            return this.familyMember
        } else {
            return null
        }
    }
    getFriends = () => {
        if(this.friends){
            return this.friends
        } else {
            return null
        }
    }
    getPhotos = () => {
        if(this.photos){
            return this.photos
        } else {
            return null
        }
    }
    getVideos = () => {
        if(this.videos){
            return this.videos
        } else {
            return null
        }
    }
    getCheckIns = () => {
        if(this.checkIns){
            return this.checkIns
        } else {
            return null
        }
    }
    getSports = () => {
        if(this.sports){
            return this.sports
        } else {
            return null
        }
    }
    getMusic = () => {
        if(this.music){
            return this.music
        } else {
            return null
        }
    }
    getLikes = () => {
        if(this.likes){
            return this.likes
        } else {
            return null
        }
    }

    //methods
    getAge = () => {
        console.log("Calculates the age")
    }

}

//Make an object
let sauravGanguly = new Profile(
    123, //Facebook Id
    "8/11/1993", //Dob
    [144,323,56,454,34], //Friends facebok Id list
    ["http://www.facebook.com/photo/1234","http://www.facebook.com/photo/12","http://www.facebook.com/photo/122"], //Photos
    ["http://www.facebook.com/videos/1234","http://www.facebook.com/videos/12","http://www.facebook.com/videos/122"], //Videos
    "Hi! I am saurav", //About
    6232527777827, //Phone No
    "surav@gmail.com", //Email
    ["Rajasthan Electronics"], //Work places
    ["MPS","BIT,Mesra"], //Education
    "Jaipur, Rajasthan", //Home Town
    [123,4554,3232], //Family Members
    ["Kota","Ajmer"], //Check Ins
    ["Cricket","Chess"], //Sports
    ["Ed Sheeran","Shaun Mendes","Liknkin Park"], //Music
    ["EdWisor","Javascript","Full Stack Dev"] //Likes
)

//show the output
console.log("Id : ",sauravGanguly.getId())
console.log("About :",sauravGanguly.getAbout())
console.log("Dob :", sauravGanguly.getDob())
console.log("Phone No :", sauravGanguly.getPhoneNo())
console.log("Email :", sauravGanguly.getEmail())
console.log("Education :", sauravGanguly.getEducation())
console.log("Work Places", sauravGanguly.getWorkPlaces())
console.log("Home Town", sauravGanguly.getHomeTown())
console.log("Friends :",  sauravGanguly.getFriends())
console.log("Family :", sauravGanguly.getFamilyMember())
console.log("Photos :", sauravGanguly.getPhotos())
console.log("Videos :", sauravGanguly.getVideos())
console.log("Check Ins", sauravGanguly.getCheckIns())
console.log("Sports", sauravGanguly.getSports())
console.log("Music", sauravGanguly.getMusic())
console.log("Likes", sauravGanguly.getLikes())