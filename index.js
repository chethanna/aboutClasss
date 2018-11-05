//class to identify places lived and universities studied with from-to date
var Place = /** @class */ (function () {
    function Place(placeName, fromDate, toDate) {
        this.placeName = placeName;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
    return Place;
}());
//class to define basic details about a person
var About = /** @class */ (function () {
    //constructor with mandatory and optional parameters
    function About(firstName, lastName, birthdate, gender, phone, emailAddress, worksAt, schoolOrUniversity, livesIn, homeTown, languages, religiousViews, politicalViews, relationshipStatus, familyMembers, nickName, quotes, describeYourself) {
        var _this = this;
        //getters
        this.getAllDetails = function () {
            var message = " Firstname: " + _this.firstName + "\n            Lastname: " + _this.lastName + "\n            Birthdate: " + _this.birthdate + "\n            Gender: " + _this.gender + "\n            Phone: " + _this.phone + "\n            Email: " + _this.emailAddress + "\n            Works at: " + _this.worksAt + "\n            School/University: " + _this.schoolOrUniversity + "\n            Lives In: " + _this.livesIn + "\n            HomeTown: " + _this.homeTown + "\n            Languages: " + _this.languages + "\n            Religious views: " + _this.religiousViews + "\n            Political Views: " + _this.politicalViews + "\n            Relationship Status: " + _this.relationshipStatus + "\n            Family Members: " + _this.familyMembers + "\n            Nick Name: " + _this.nickName + "\n            Quotes: " + _this.quotes + "\n            Bio: " + _this.describeYourself;
            console.log(message);
        };
        this.getFirstName = function () {
            return _this.firstName;
        };
        this.getLastName = function () {
            return _this.lastName;
        };
        this.getBirthDate = function () {
            return _this.birthdate;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getPhone = function () {
            return _this.phone;
        };
        this.getEmailAddress = function () {
            return _this.emailAddress;
        };
        this.getWorksAt = function () {
            return _this.worksAt;
        };
        this.getSchoolOrUniversity = function () {
            return _this.schoolOrUniversity;
        };
        this.getLivesIn = function () {
            return _this.livesIn;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.getLanguages = function () {
            return _this.languages;
        };
        this.getReligiousViews = function () {
            return _this.religiousViews;
        };
        this.getPoliticalViews = function () {
            return _this.politicalViews;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getFamilyMembers = function () {
            return _this.familyMembers;
        };
        this.getNickName = function () {
            return _this.nickName;
        };
        this.getQuotes = function () {
            return _this.quotes;
        };
        this.getDescribeYourself = function () {
            return _this.describeYourself;
        };
        //setters
        this.setBirthDate = function (birthdate) {
            _this.birthdate = birthdate;
        };
        this.setGender = function (gender) {
            _this.gender = gender;
        };
        this.setPhone = function (phone) {
            _this.phone = phone;
        };
        this.setEmailAddress = function (emailAddress) {
            _this.emailAddress = emailAddress;
        };
        this.setWorksAt = function (worksAt) {
            _this.worksAt = worksAt;
        };
        this.setSchoolOrUniversity = function (schoolOrUniversity) {
            return _this.schoolOrUniversity;
        };
        this.setLivesIn = function (livesIn) {
            _this.livesIn = livesIn;
        };
        this.setHomeTown = function (homeTown) {
            _this.homeTown = homeTown;
        };
        this.setLanguages = function (languages) {
            _this.languages = languages;
        };
        this.setReligiousViews = function (religiousViews) {
            _this.religiousViews = religiousViews;
        };
        this.setPoliticalViews = function (politicalViews) {
            _this.politicalViews = politicalViews;
        };
        this.setRelationshipStatus = function (relationshipStatus) {
            _this.relationshipStatus = relationshipStatus;
        };
        this.setFamilyMembers = function (familyMembers) {
            _this.familyMembers = familyMembers;
        };
        this.setNickName = function (nickName) {
            _this.nickName = nickName;
        };
        this.setQuotes = function (quotes) {
            _this.quotes = quotes;
        };
        this.setDescribeYourself = function (describeYourself) {
            _this.describeYourself = describeYourself;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.gender = gender;
        this.phone = phone;
        this.emailAddress = emailAddress;
        this.worksAt = worksAt;
        this.schoolOrUniversity = schoolOrUniversity;
        this.livesIn = livesIn;
        this.homeTown = homeTown;
        this.languages = languages;
        this.religiousViews = religiousViews;
        this.politicalViews = politicalViews;
        this.relationshipStatus = relationshipStatus;
        this.familyMembers = familyMembers;
        this.nickName = nickName;
        this.quotes = quotes;
        this.describeYourself = describeYourself;
    }
    return About;
}());
//demostration of usage
//created object called suresh for About class with mandatory arguments and one optional argument worksAt
var suresh = new About("suresh", "kumar", new Date(1983, 1, 1), "male", 1234567890, "suresh@xyz.com", [new Place("abc company", new Date(2013), new Date(2017))]);
//to display all details about suresh
console.log("Basic details of suresh");
suresh.getAllDetails();
//to diplay worksAt detail of suresh
console.log("Suresh works at : ");
console.log(suresh.getWorksAt());
//to change phone number of suresh
suresh.setPhone(7878798787);
//to display changed phone number of suresh
console.log("New phone number of suresh is " + suresh.getPhone());
