//class to identify places lived and universities studied with from-to date
class Place {
    private placeName:string;
    private fromDate:Date;
    private toDate:Date;
    constructor(placeName:string,fromDate:Date,toDate:Date){
        this.placeName=placeName;
        this.fromDate=fromDate;
        this.toDate=toDate;
    }
}
//class to define basic details about a person
class About {
    private firstName:string;
    private lastName:string;
    private birthdate: Date;
    private gender:string;
    private phone:number;
    private emailAddress:string;
    private worksAt:Place[];
    private schoolOrUniversity:Place[];
    private livesIn:string;
    private homeTown:string;
    private languages:string[];
    private religiousViews:string;
    private politicalViews:string;
    private relationshipStatus:string;
    private familyMembers:string[];
    private nickName:string;
    private quotes:string;
    private describeYourself:string;

    //constructor with mandatory and optional parameters
    constructor(firstName:string,lastName:string,birthdate: Date,gender:string,phone:number,emailAddress:string,
                worksAt?:Place[],schoolOrUniversity?:Place[],livesIn?:string,homeTown?:string,languages?:string[],
                religiousViews?:string,politicalViews?:string,relationshipStatus?:string,familyMembers?:string[],
                nickName?:string,quotes?:string,describeYourself?:string){

                    this.firstName=firstName;
                    this.lastName=lastName;
                    this.birthdate=birthdate;
                    this.gender=gender;
                    this.phone=phone;
                    this.emailAddress=emailAddress;
                    this.worksAt=worksAt;
                    this.schoolOrUniversity=schoolOrUniversity;
                    this.livesIn=livesIn;
                    this.homeTown=homeTown;
                    this.languages=languages;
                    this.religiousViews=religiousViews;
                    this.politicalViews=politicalViews;
                    this.relationshipStatus=relationshipStatus;
                    this.familyMembers=familyMembers;
                    this.nickName=nickName;
                    this.quotes=quotes;
                    this.describeYourself=describeYourself;
                                    
    }
    //getters
    getAllDetails= ()=> {
        let message = ` Firstname: ${this.firstName}
            Lastname: ${this.lastName}
            Birthdate: ${this.birthdate}
            Gender: ${this.gender}
            Phone: ${this.phone}
            Email: ${this.emailAddress}
            Works at: ${this.worksAt}
            School/University: ${this.schoolOrUniversity}
            Lives In: ${this.livesIn}
            HomeTown: ${this.homeTown}
            Languages: ${this.languages}
            Religious views: ${this.religiousViews}
            Political Views: ${this.politicalViews}
            Relationship Status: ${this.relationshipStatus}
            Family Members: ${this.familyMembers}
            Nick Name: ${this.nickName}
            Quotes: ${this.quotes}
            Bio: ${this.describeYourself}`
            console.log(message);
    }
    getFirstName =()=>{
        return this.firstName;
    }
    getLastName =()=>{
        return this.lastName;
    }
    getBirthDate = ()=>{
        return this.birthdate;
    }
    
    getGender = ()=> {
        return this.gender;
    }

    getPhone = ()=> {
        return this.phone;
    }
    
    getEmailAddress =()=> {
        return this.emailAddress;
    }

    getWorksAt = ()=> {
        return this.worksAt;
    }

    getSchoolOrUniversity = ()=> {
        return this.schoolOrUniversity;
    }

    getLivesIn = ()=> {
        return this.livesIn;
    }
    
    getHomeTown = ()=> {
        return this.homeTown;
    }

    getLanguages = ()=> {
        return this.languages;
    }

    getReligiousViews = ()=> {
        return this.religiousViews;
    }

    getPoliticalViews = ()=> {
        return this.politicalViews;
    }

    getRelationshipStatus = ()=> {
        return this.relationshipStatus;
    }

    getFamilyMembers = ()=> {
        return this.familyMembers;
    }

    getNickName =()=> {
        return this.nickName;
    }

    getQuotes = ()=> {
        return this.quotes;
    }

    getDescribeYourself = ()=> {
        return this.describeYourself;
    }
    
    //setters
    setBirthDate = (birthdate:Date)=>{
         this.birthdate = birthdate;
    }
    
    setGender = (gender:string)=> {
        this.gender=gender;
    }

    setPhone = (phone:number)=> {
        this.phone=phone;
    }
    
    setEmailAddress =(emailAddress:string)=> {
        this.emailAddress=emailAddress;
    }

    setWorksAt = (worksAt:Place[])=> {
        this.worksAt=worksAt;
    }

    setSchoolOrUniversity = (schoolOrUniversity:Place[])=> {
        return this.schoolOrUniversity;
    }

    setLivesIn = (livesIn:string)=> {
        this.livesIn=livesIn;
    }
    
    setHomeTown = (homeTown:string)=> {
        this.homeTown=homeTown;
    }

    setLanguages = (languages:string[])=> {
        this.languages=languages;
    }

    setReligiousViews = (religiousViews:string)=> {
        this.religiousViews=religiousViews;
    }

    setPoliticalViews = (politicalViews:string)=> {
        this.politicalViews=politicalViews;
    }

    setRelationshipStatus = (relationshipStatus:string)=> {
        this.relationshipStatus=relationshipStatus;
    }

    setFamilyMembers = (familyMembers:string[])=> {
        this.familyMembers=familyMembers;
    }

    setNickName =(nickName:string)=> {
        this.nickName=nickName;
    }

    setQuotes = (quotes:string)=> {
        this.quotes=quotes;
    }

    setDescribeYourself = (describeYourself:string)=> {
        this.describeYourself=describeYourself;
    }
}


//demostration of usage
//created object called suresh for About class with mandatory arguments and one optional argument worksAt
let suresh=new About("suresh","kumar",new Date(1983,1,1),"male",1234567890,"suresh@xyz.com",[new Place("abc company",new Date(2013),new Date(2017))]);
//to display all details about suresh
console.log("Basic details of suresh");
suresh.getAllDetails();
//to diplay worksAt detail of suresh
console.log("Suresh works at : ");
console.log(suresh.getWorksAt());
//to change phone number of suresh
suresh.setPhone(7878798787)
//to display changed phone number of suresh
console.log("New phone number of suresh is "+ suresh.getPhone())