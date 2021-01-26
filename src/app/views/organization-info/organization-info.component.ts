import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/shared/services/member.service';
import { VolunteerService } from 'src/app/shared/services/volunteer.service';
import { AuthService } from '../../shared/services/auth.service';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { Vorganization } from 'src/app/models/vorganization.model';
import { Vcause } from 'src/app/models/vcause.model';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.css'],
})
export class OrganizationInfoComponent implements OnInit {
  user: any = null;
  member: Member = new Member();
  selectedOrganization: Vorganization = new Vorganization();
  selectedCause : Vcause[] = [];
  causes: Vcause[] = [];

  constructor(
    public authService: AuthService,
    public volunteerService: VolunteerService,
    public memberService: MemberService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCause();

    if (this.authService.isLoggedIn) {
      this.user = JSON.parse(localStorage.getItem('user') as string);
      this.getMemberInfo(this.user.uid);
    }
  }

  getMemberInfo(id: any) {
    this.memberService.getInfo(id).subscribe((res) => {
      this.member = res.data() as Member;
    });
  }

  getInfo(id: any) {
   
    this.volunteerService.GetVOrganization(id).subscribe((res) => {
        this.selectedOrganization = res.data() as Vorganization;

        this.selectedOrganization.causes.forEach(element => {
          this.selectedCause.push(... this.causes.filter((v, index, arr) => {
            return (v.id == element);
          }));
        });
      
    });
  }

  getCause() {
    this.volunteerService.GetAllCausesData().subscribe((data) => {
      if (data.length > 0) {
        this.causes = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Object),
          } as Vcause;
        });
        this.getInfo(this.route.snapshot.paramMap.get('id'));
      }
    });
  }

}
