import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/auth/login/login.component';
import { ContactComponent } from './views/contact/contact.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent } from './views/index/index.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { TermsComponent } from './views/terms/terms.component';
import { StarComponent } from './views/star/star.component';
import { MemberAuthComponent } from './layouts/member-auth/member-auth.component';
import { WishComponent } from './views/wish/wish.component';

import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { FooterComponent } from './components/footers/footer/footer.component';


// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { ForgotpasswordComponent } from './views/auth/forgotpassword/forgotpassword.component';

import { VolunteerComponent } from './views/volunteer/volunteer.component';
import { VolunteerDetailComponent } from './views/volunteer-detail/volunteer-detail.component';

import { MemberListComponent } from './views/member-list/member-list.component';
import { MemberInfoComponent } from './views/member-info/member-info.component';

import { OrganizationListComponent } from './views/organization-list/organization-list.component';
import { OrganizationInfoComponent } from './views/organization-info/organization-info.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    IndexComponent,
    PrivacyComponent,
    TermsComponent,
    StarComponent,
    MemberAuthComponent,
    WishComponent,
    VolunteerComponent,
    IndexNavbarComponent,
    FooterComponent,
    ForgotpasswordComponent,
    VolunteerDetailComponent,
    OrganizationInfoComponent,
    MemberInfoComponent,
    MemberListComponent,
    OrganizationListComponent,
    
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
