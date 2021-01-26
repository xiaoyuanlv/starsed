import { identifierName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class VolunteerService {
  constructor(private firestore: AngularFirestore) {}

  GetAllCausesData() {
    return this.firestore
      .collection("causes", (ref) => ref.orderBy("title"))
      .snapshotChanges();
  }

  /****************  Volunteer Opportunity  *************/

  GetVolunteerOpportunityByCause(causeid: any, doc: any) {
    if (doc != null) {
      return this.firestore
        .collection("volunteer/" + causeid + "/opportunity", (ref) =>
          ref.orderBy("createdDate", "desc").startAfter(doc).limit(31)
        )
        .snapshotChanges();
    } else {
      return this.firestore
        .collection("volunteer/" + causeid + "/opportunity", (ref) =>
          ref.orderBy("createdDate", "desc").limit(31)
        )
        .snapshotChanges();
    }
  }

  /****************  Volunteer Organization  *************/

  GetVolunteerOrganization(doc: any) {
    if (doc != null) {
      return this.firestore
        .collection("vorganization", (ref) =>
          ref.orderBy("createdDate", "desc").startAfter(doc).limit(31)
        )
        .snapshotChanges();
    } else {
      return this.firestore
        .collection("vorganization", (ref) =>
          ref.orderBy("createdDate", "desc").limit(31)
        )
        .snapshotChanges();
    }
  }

  GetVOrganization(id: any) {
    return this.firestore
      .doc("vorganization/"+id).get();
  }

  GetVolunteerOpportunity(causeid: any,id: any) {
    return this.firestore
      .doc("volunteer/"+causeid+"/opportunity/"+id).get();
  }

}
