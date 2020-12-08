import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { MemberComponent } from './layouts/member/member.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { MemberAuthComponent } from './layouts/member-auth/member-auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { SecretLoginComponent } from './views/admin/secret-login/secret-login.component';
import { SecretRegisterComponent } from './views/admin/secret-register/secret-register.component';


// member views
import { MemberDashboardComponent } from './views/member/member-dashboard/member-dashboard.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';


// guards
import { AuthGuard } from "./shared/guard/auth.guard";
import { MemberAuthGuard } from './shared/guard/member-auth.guard';


// no layouts views
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { IndexComponent } from './views/index/index.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { TermsComponent } from './views/terms/terms.component';
import { BlogComponent } from './views/blog/blog.component';
import { StarComponent } from './views/star/star.component';
import { FaqComponent } from './views/faq/faq.component';
import { WishComponent } from './views/wish/wish.component';
import { OpportunityComponent } from './views/opportunity/opportunity.component';
import { VolunteerComponent } from './views/volunteer/volunteer.component';


const routes: Routes = [
  // admin auth views
  {
    path: 'secretgate',
    component: AuthComponent,
    children: [
      { path: 'login', component: SecretLoginComponent },
      { path: 'register', component: SecretRegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  // admin views
  {
    path: 'secretgarden',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
   // member views
   {
    path: 'member',
    component: MemberComponent,
    children: [
      { path: 'dashboard', component: MemberDashboardComponent, canActivate: [MemberAuthGuard] },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // // auth views
  {
    path: 'auth',
    component: MemberAuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  // no layout views
  { path: 'opportunity', component: OpportunityComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'star', component: StarComponent },
  { path: 'wish', component: WishComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', component: IndexComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
