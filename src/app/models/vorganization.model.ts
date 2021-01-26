import { Timestamp } from 'rxjs';

export class Vorganization {
  id: string;
  title: string;
  mission: string;
  causes: string[];
  found: string;
  location: string;
  mapURL: string;
  photoURL: string;
  webURL: string;
  createdDate: any;
  uid: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.mission = '';
    this.causes = [];
    this.found = '';
    this.location = '';
    this.mapURL = '';
    this.photoURL = '';
    this.webURL = '';
    this.createdDate = null;
    this.uid = '';
  }
}
