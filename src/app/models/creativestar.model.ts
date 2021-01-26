import { Timestamp } from "rxjs";

export class Creativestar {
    id: string;
    photoURL: string;
    title: string;
    description: string;
    author: string;
    email: string;
    createdDate: any;
    browseurl: string;
    color: string;
    uid: string;

    constructor() {
        this.id= "";
        this.photoURL= "";
        this.title= "";
        this.description= "";
        this.author= "";
        this.email= "";
        this.createdDate = null;
        this.browseurl= "";
        this.color= "";
        this.uid= "";
    }
}
