import { Timestamp } from "rxjs";

export class Letter {
    id: string;
    stamp: string;
    senderuid: string;
    fromEmail: string;
    fromName: string;
    toEmail: string;
    toName: string;
    title: string;
    message: string;
    readStatus: boolean;
    sentdate: string;

    constructor() {
        this.id= "";
        this.stamp= "";
        this.senderuid= "";
        this.fromEmail= "";
        this.fromName= "";
        this.toEmail= "";
        this.toName= "";
        this.title= "";
        this.message= "";
        this.readStatus = false;
        this.sentdate= "";
    }
}
