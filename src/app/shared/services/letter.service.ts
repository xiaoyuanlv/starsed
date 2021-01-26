import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class LetterService {
  
  constructor(private firestore: AngularFirestore) {}

  SetSentLetter(data: any, uid: any) {
    try {
      this.firestore.collection("letter").doc("sent").collection(uid).add(data);
      window.alert("success");
    } catch (ex) {
      window.alert(ex);
    }
  }

  SetReceiverLetter(data: any, toMail: any) {
    try {
      this.firestore
        .collection("letter")
        .doc("receive")
        .collection(toMail)
        .add(data);
    } catch (ex) {
      window.alert(ex);
    }
  }

}
