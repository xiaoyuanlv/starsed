import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { MemberAuthComponent } from './layouts/member-auth/member-auth.component';

// member views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';


// no layouts views
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { IndexComponent } from './views/index/index.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { TermsComponent } from './views/terms/terms.component';
import { StarComponent } from './views/star/star.component';
import { WishComponent } from './views/wish/wish.component';
import { VolunteerComponent } from './views/volunteer/volunteer.component';
import { ForgotpasswordComponent } from './views/auth/forgotpassword/forgotpassword.component';
import { VolunteerDetailComponent } from './views/volunteer-detail/volunteer-detail.component';
import { OrganizationInfoComponent } from './views/organization-info/organization-info.component';
import { MemberInfoComponent } from './views/member-info/member-info.component';
import { MemberListComponent } from './views/member-list/member-list.component';
import { OrganizationListComponent } from './views/organization-list/organization-list.component';


const routes: Routes = [
  // // auth views
  {
    path: 'auth',
    component: MemberAuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  // no layout views
      { path: 'star', component: StarComponent },
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'volunteer/:id', component: VolunteerDetailComponent },
      { path: 'organization', component: OrganizationListComponent },
      { path: 'organization/:id', component: OrganizationInfoComponent },
      { path: 'member', component: MemberListComponent },
      { path: 'member/:id', component: MemberInfoComponent },
      { path: 'wish', component: WishComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', component: IndexComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
