import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private firestore: AngularFirestore) { }

  getInfo(id: any) {
    return this.firestore.collection('users').doc(id).get();
  }

  GetData(doc: any) {
    if(doc != null) {
      return this.firestore
      .collection("users", (ref) =>
        ref.startAfter(doc)
        
        .limit(31)
      )
      .snapshotChanges();
    } else {
      return this.firestore
      .collection("users", (ref) =>
        ref
        .limit(31)
      )
      .snapshotChanges();
    } 
  }
  
}
