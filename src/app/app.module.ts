import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AboutComponent } from './views/about/about.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MemberComponent } from './layouts/member/member.component';
import { LoginComponent } from './views/auth/login/login.component';
import { ContactComponent } from './views/contact/contact.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent } from './views/index/index.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { TermsComponent } from './views/terms/terms.component';
import { BlogComponent } from './views/blog/blog.component';
import { StarComponent } from './views/star/star.component';
import { FaqComponent } from './views/faq/faq.component';
import { MemberDashboardComponent } from './views/member/member-dashboard/member-dashboard.component';
import { MemberAuthComponent } from './layouts/member-auth/member-auth.component';
import { SecretLoginComponent } from './views/admin/secret-login/secret-login.component';
import { SecretRegisterComponent } from './views/admin/secret-register/secret-register.component';
import { WishComponent } from './views/wish/wish.component';
import { VolunteerComponent } from './views/volunteer/volunteer.component';
import { OpportunityComponent } from './views/opportunity/opportunity.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { AdminHeaderStatsComponent } from './components/headers/admin-header-stats/admin-header-stats.component';


// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    AboutComponent,
    DashboardComponent,
    MemberComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    IndexComponent,
    PrivacyComponent,
    TermsComponent,
    BlogComponent,
    StarComponent,
    FaqComponent,
    MemberDashboardComponent,
    MemberAuthComponent,
    SecretLoginComponent,
    SecretRegisterComponent,
    WishComponent,
    VolunteerComponent,
    OpportunityComponent,
    AdminNavbarComponent,
    AuthNavbarComponent,
    IndexNavbarComponent,
    FooterComponent,
    FooterAdminComponent,
    FooterSmallComponent,
    HeaderStatsComponent,
    AdminHeaderStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTwitterTimelineModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
