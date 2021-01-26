import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/shared/services/member.service';
import { VolunteerService } from 'src/app/shared/services/volunteer.service';
import { LetterService } from 'src/app/shared/services/letter.service';
import { AuthService } from '../../shared/services/auth.service';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { Vorganization } from 'src/app/models/vorganization.model';
import { Vcause } from 'src/app/models/vcause.model';
import { VOpportunity } from 'src/app/models/vopportunity.model';


@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.css']
})
export class VolunteerDetailComponent implements OnInit {

  user: any = null;
  member: Member = new Member();
  tomember: Member = new Member();
  selectedOpportunity: VOpportunity = new VOpportunity();
  selectedCause : Vcause[] = [];
  causes: Vcause[] = [];
  id: any = "";
  causeid: any = "";

  constructor(
    public authService: AuthService,
    public volunteerService: VolunteerService,
    public memberService: MemberService,
    public letterService: LetterService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {

    var params = this.route.snapshot.paramMap.get('id')?.split('#');
   
    if(params!.length > 0){
      this.id = params![0];
      this.causeid = params![1];
      
      this.getCause();

      if (this.authService.isLoggedIn) {
        this.user = JSON.parse(localStorage.getItem('user') as string);
        this.getMemberInfo(this.user.uid);
      }

    } else {
      this.router.navigate(['/']);
    }
    
  }

  getMemberInfo(id: any) {
    this.memberService.getInfo(id).subscribe((res) => {
      this.member = res.data() as Member;
    });
  }

  getInfo(causeid: any, id: any) {
    this.volunteerService.GetVolunteerOpportunity(causeid, id)
    .subscribe((res) => {
        this.selectedOpportunity = res.data() as VOpportunity;
        this.selectedCause = this.causes.filter((v) => {
          this.selectedOpportunity.causeid == v.id
        });
        this.memberService.getInfo(this.selectedOpportunity.uid).subscribe((res) => {
          this.tomember = res.data() as Member;
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
        this.getInfo(this.causeid, this.id);
      }
    });
  }

  WriteTheLetter() {
    if(this.user != null) {

      var savingdata = {
        stamp: 'https://i.pinimg.com/564x/0f/32/f8/0f32f8ed2c59e61eb8eb0894e6016e03.jpg',
        fromEmail: this.user.email,
        fromName: this.user.displayName,
        toEmail: this.member.email,
        toName: this.member.displayName,
        title: 'Volunteer for ' + this.selectedOpportunity.title,
        message: 'I want to Help.',
        senderuid: this.user.uid,
        readStatus: false,
        sentdate: new Date(),
      };

      this.letterService.SetReceiverLetter(savingdata, this.tomember.email);
      this.letterService.SetSentLetter(savingdata, this.user.uid);

     
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

}
