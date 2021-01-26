import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Member } from "src/app/models/member.model";
import { Vorganization } from "src/app/models/vorganization.model";
import { VolunteerService } from "src/app/shared/services/volunteer.service";
import { AuthService } from "../../shared/services/auth.service";
import { DocumentChangeAction } from "@angular/fire/firestore";
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  starpgnum = 0;
  user: any = null;
  member: Member = new Member();
  lastVisible: any = null;
  totallimit = 31;
  starArr: Array<Vorganization> = [];
  stardata: DocumentChangeAction<unknown>[] = [];
  selectedCauseID : string = "";
  
  constructor( 
    public authService: AuthService,
    public memberService: MemberService,
    public starService: VolunteerService) { }

  ngOnInit(): void {
    this.GetFirstCollection();
    if (this.authService.isLoggedIn) {
      this.user = JSON.parse(localStorage.getItem("user") as string);
      this.getMemberInfo(this.user.uid);
    }
    
  }

  getMemberInfo(id: any) {
    this.memberService.getInfo(id).subscribe((res) => {
      this.member = res.data() as Member;
     
    });
  }


  GetCollection() {
  
    this.starArr = [];

    this.starService.GetVolunteerOrganization(this.lastVisible).subscribe((data) => {
      if (data.length > 0) {

        this.starpgnum += 1;

        this.lastVisible = data[data.length - 1].payload.doc;
        this.stardata = data;

        this.starArr = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Object),
          } as Vorganization;
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
  

}
