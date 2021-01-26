import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Member } from "src/app/models/member.model";
import { MemberService } from "src/app/shared/services/member.service";
import { AuthService } from "../../shared/services/auth.service";
import { Wish } from "src/app/models/wish.model";
import { WishService } from "src/app/shared/services/wish.service";
import { DocumentChangeAction } from "@angular/fire/firestore";
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  starpgnum = 0;
  user: any = null;
  member: Member = new Member();
  lastVisible: any = null;
  totallimit = 31;
  starArr: Array<Wish> = [];
  stardata: DocumentChangeAction<unknown>[] = [];
  
  constructor( 
    public authService: AuthService,
    public memberService: MemberService,
    public starService: WishService) { }

  ngOnInit(): void {
    this.GetCollection();
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
          } as Wish;
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
