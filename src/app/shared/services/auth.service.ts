import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user != null) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') as string);
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') as string);
      }
    });
  }

  SignUp(
    email: string,
    password: string,
    displayName: string,
    photoURL: string
  ) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        if (value.user != null) {
          value.user.sendEmailVerification();
          if (value.user) {
            value.user
              .updateProfile({
                displayName: displayName,
                photoURL: photoURL,
              })
              .then((s) => {
                window.alert('Success. Please verify your email.');
                this.router.navigate(['/auth/signin']);
              });
          }
        } else {
          window.alert('Sorry. Please try again.');
        }
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {

        this.SetUserData(result.user);
          this.userData = result.user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          this.ngZone.run(() => {
            const user = JSON.parse(localStorage.getItem('user') as string);
            if (user !== null) {
              window.location.reload();
            } else {
              window.alert('Invalid User');
            }
          });
        

      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          window.location.reload();
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    
    const userRef = this.afs.collection('users').doc(user.uid);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    userRef.set(userData, { merge : true })
    .then(function() {
       window.alert('Document successfully written!');
    })
    .catch(function(error) {
      window.alert("Error writing document: "+ error);
    });
    
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      window.alert('See You');
      window.location.reload();
    });
  }
}
