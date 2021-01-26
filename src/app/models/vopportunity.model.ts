import { Timestamp } from 'rxjs';

export class VOpportunity {
  id: string;
  title: string;
  description: string;
  photoURL: string;
  starcolor: string;
  isflexible: string;
  fromdate: string;
  todate: string;
  location: string;
  city: string;
  country: string;
  isvirtual: string;
  causeid: string;
  organizationid: string;
  requiredskill: string;
  createdDate: any;
  uid: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.photoURL = '';
    this.starcolor = '';
    this.isflexible = '';
    this.fromdate = '';
    this.todate = '';
    this.location = '';
    this.city = '';
    this.country = '';
    this.isvirtual = '';
    this.causeid = '';
    this.organizationid = '';
    this.requiredskill = '';
    this.createdDate = null;
    this.uid = '';
  }
}
