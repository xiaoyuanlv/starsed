import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private firestore: AngularFirestore) {}

  GetData(doc: any) {
    if(doc != null) {
      return this.firestore
      .collection("wish", (ref) =>
        ref.startAfter(doc)
        .orderBy("createdDate", "desc")
        .limit(31)
      )
      .snapshotChanges();
    } else {
      return this.firestore
      .collection("wish", (ref) =>
        ref.orderBy("createdDate", "desc")
        .limit(31)
      )
      .snapshotChanges();
    } 
  }

}
