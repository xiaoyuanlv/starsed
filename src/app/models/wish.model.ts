import { Timestamp } from "rxjs";

export class Wish {
    id: string;
    title: string;
    message: string;
    author: string;
    email: string;
    fulfilled: boolean;
    createdDate: any;
    uid: string;
    
    constructor() {
        this.id= "";
        this.title= "";
        this.message= "";
        this.author= "";
        this.email= "";
        this.fulfilled= false;
        this.createdDate = null;
        this.uid= "";
    }
}
