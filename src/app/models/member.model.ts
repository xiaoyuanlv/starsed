export class Member {
    id: string;
    uid: string;
    displayName: string;
    email: string;
    emailVerified: boolean;
    photoURL: string;
    username: string;
    avatar: string;
    city: string;
    country: string;
    about: string;
    dob: string;
    skill: string;
    language: string;
    starsign: string;
    gender: string;
    religion: string;

    constructor() {
        this.id = "";
        this.uid = "";
        this.displayName= "";
        this.email= "";
        this.emailVerified = false;
        this.photoURL= "";
        this.username= "";
        this.avatar= "";
        this.city= "";
        this.country= "";
        this.about= "";
        this.dob= "";
        this.skill= "";
        this.language= "";
        this.starsign= "";
        this.gender= "";
        this.religion= "";
    }
}