import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Member } from "src/app/models/member.model";
import { MemberService } from "src/app/shared/services/member.service";
import { AuthService } from "../../shared/services/auth.service";
import { CreativestarService } from "src/app/shared/services/creativestar.service";
import { DocumentChangeAction } from "@angular/fire/firestore";
import { Creativestar } from 'src/app/models/creativestar.model';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  starpgnum = 0;
  user: any = null;
  member: Member = new Member();
  lastVisible: any = null;
  totallimit = 31;
  starArr: Array<Creativestar> = [];
  stardata: DocumentChangeAction<unknown>[] = [];
  
  constructor( 
    public authService: AuthService,
    public memberService: MemberService,
    public starService: CreativestarService) { }

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
  
    this.starService.GetData(this.lastVisible).subscribe((data) => {
      if (data.length > 0) {

        this.starpgnum += 1;

        this.lastVisible = data[data.length - 1].payload.doc;
        this.stardata = data;

        this.starArr = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Object),
          } as Creativestar;
        });

        this.starArr = this.starArr as Array<Creativestar>;

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
