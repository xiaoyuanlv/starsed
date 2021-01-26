import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Member } from "src/app/models/member.model";
import { MemberService } from "src/app/shared/services/member.service";
import { AuthService } from "../../shared/services/auth.service";
import { VolunteerService } from "src/app/shared/services/volunteer.service";
import { DocumentChangeAction } from "@angular/fire/firestore";
import { VOpportunity } from 'src/app/models/vopportunity.model';
import { Vcause } from 'src/app/models/vcause.model';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  starpgnum = 0;
  user: any = null;
  member: Member = new Member();
  lastVisible: any = null;
  totallimit = 31;
  causeArr: Array<Vcause> = [];
  starArr: Array<VOpportunity> = [];
  stardata: DocumentChangeAction<unknown>[] = [];
  selectedCauseID : string = "";
  
  constructor( 
    public authService: AuthService,
    public memberService: MemberService,
    public starService: VolunteerService) { }

  ngOnInit(): void {
    this.getCauses();
    if (this.authService.isLoggedIn) {
      this.user = JSON.parse(localStorage.getItem("user") as string);
      this.getMemberInfo(this.user.uid);
    }
    
  }

  getCauses() {

    this.starService.GetAllCausesData().subscribe((data) => {
      if (data.length > 0) {

        this.causeArr = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Object),
          } as Vcause;
        });

        this.selectedCauseID = this.causeArr[0].id;

        this.GetFirstCollection();
      } 
    });

  }

  getMemberInfo(id: any) {
    this.memberService.getInfo(id).subscribe((res) => {
      this.member = res.data() as Member;
      
    });
  }


  GetCollection() {
  
    this.starArr = [];

    this.starService.GetVolunteerOpportunityByCause(this.selectedCauseID, this.lastVisible).subscribe((data) => {
      if (data.length > 0) {

        this.starpgnum += 1;

        this.lastVisible = data[data.length - 1].payload.doc;
        this.stardata = data;

        this.starArr = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Object),
          } as VOpportunity;
        });
      } 
    });
    
  }

  GetFirstCollection() {
    this.lastVisible = null;
    this.stardata = [];
    this.starpgnum = 0;
    this.GetCollection();
  }

  ChooseCause(cause: Vcause) {
    window.alert(cause.title);
    this.selectedCauseID = cause.id;
    this.GetFirstCollection();
  }

  

}
