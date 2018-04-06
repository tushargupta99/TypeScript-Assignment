var Profile = /** @class */ (function () {
    function Profile(id, dob, friends, photos, videos, about, phoneNo, email, workPlaces, education, homeTown, familyMember, checkIns, sports, music, likes) {
        var _this = this;
        //getters
        this.getId = function () {
            return _this.id;
        };
        this.getDob = function () {
            return _this.dob;
        };
        this.getAbout = function () {
            if (_this.about) {
                return _this.about;
            }
            else {
                return null;
            }
        };
        this.getPhoneNo = function () {
            if (_this.phoneNo) {
                return _this.phoneNo;
            }
            else {
                return null;
            }
        };
        this.getEmail = function () {
            if (_this.email) {
                return _this.email;
            }
            else {
                return null;
            }
        };
        this.getWorkPlaces = function () {
            if (_this.workPlaces) {
                return _this.workPlaces;
            }
            else {
                return null;
            }
        };
        this.getEducation = function () {
            if (_this.education) {
                return _this.education;
            }
            else {
                return null;
            }
        };
        this.getHomeTown = function () {
            if (_this.homeTown) {
                return _this.homeTown;
            }
            else {
                return null;
            }
        };
        this.getFamilyMember = function () {
            if (_this.familyMember) {
                return _this.familyMember;
            }
            else {
                return null;
            }
        };
        this.getFriends = function () {
            if (_this.friends) {
                return _this.friends;
            }
            else {
                return null;
            }
        };
        this.getPhotos = function () {
            if (_this.photos) {
                return _this.photos;
            }
            else {
                return null;
            }
        };
        this.getVideos = function () {
            if (_this.videos) {
                return _this.videos;
            }
            else {
                return null;
            }
        };
        this.getCheckIns = function () {
            if (_this.checkIns) {
                return _this.checkIns;
            }
            else {
                return null;
            }
        };
        this.getSports = function () {
            if (_this.sports) {
                return _this.sports;
            }
            else {
                return null;
            }
        };
        this.getMusic = function () {
            if (_this.music) {
                return _this.music;
            }
            else {
                return null;
            }
        };
        this.getLikes = function () {
            if (_this.likes) {
                return _this.likes;
            }
            else {
                return null;
            }
        };
        //methods
        this.getAge = function () {
            console.log("Calculates the age");
        };
        this.id = id;
        this.about = about;
        this.phoneNo = phoneNo;
        this.email = email;
        this.workPlaces = workPlaces;
        this.education = education;
        this.dob = dob;
        this.homeTown = homeTown;
        this.familyMember = familyMember;
        this.friends = friends;
        this.photos = photos;
        this.videos = videos;
        this.checkIns = checkIns;
        this.sports = sports;
        this.music = music;
        this.likes = likes;
    }
    return Profile;
}());
//Make an object
var sauravGanguly = new Profile(123, //Facebook Id
"8/11/1993", //Dob
[144, 323, 56, 454, 34], //Friends facebok Id list
["http://www.facebook.com/photo/1234", "http://www.facebook.com/photo/12", "http://www.facebook.com/photo/122"], //Photos
["http://www.facebook.com/videos/1234", "http://www.facebook.com/videos/12", "http://www.facebook.com/videos/122"], //Videos
"Hi! I am saurav", //About
6232527777827, //Phone No
"surav@gmail.com", //Email
["Rajasthan Electronics"], //Work places
["MPS", "BIT,Mesra"], //Education
"Jaipur, Rajasthan", //Home Town
[123, 4554, 3232], //Family Members
["Kota", "Ajmer"], //Check Ins
["Cricket", "Chess"], //Sports
["Ed Sheeran", "Shaun Mendes", "Liknkin Park"], //Music
["EdWisor", "Javascript", "Full Stack Dev"] //Likes
);
//show the output
console.log("Id : ", sauravGanguly.getId());
console.log("About :", sauravGanguly.getAbout());
console.log("Dob :", sauravGanguly.getDob());
console.log("Phone No :", sauravGanguly.getPhoneNo());
console.log("Email :", sauravGanguly.getEmail());
console.log("Education :", sauravGanguly.getEducation());
console.log("Work Places", sauravGanguly.getWorkPlaces());
console.log("Home Town", sauravGanguly.getHomeTown());
console.log("Friends :", sauravGanguly.getFriends());
console.log("Family :", sauravGanguly.getFamilyMember());
console.log("Photos :", sauravGanguly.getPhotos());
console.log("Videos :", sauravGanguly.getVideos());
console.log("Check Ins", sauravGanguly.getCheckIns());
console.log("Sports", sauravGanguly.getSports());
console.log("Music", sauravGanguly.getMusic());
console.log("Likes", sauravGanguly.getLikes());
