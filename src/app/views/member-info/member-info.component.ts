import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Member } from "src/app/models/member.model";
import { MemberService } from "src/app/shared/services/member.service";
import { AuthService } from "../../shared/services/auth.service";
import { DocumentChangeAction } from "@angular/fire/firestore";
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.css']
})
export class MemberInfoComponent implements OnInit {

  user: any = null;
  member: Member = new Member();
  selectedMember : Member = new Member();

  constructor(public authService: AuthService,
    public memberService: MemberService, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getInfo(this.route.snapshot.paramMap.get("id"));

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

  getInfo(id: any) {
    this.memberService.getInfo(id).subscribe((res) => {
      this.selectedMember = res.data() as Member;
    });
  }


}
