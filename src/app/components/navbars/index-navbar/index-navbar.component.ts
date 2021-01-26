import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  styleUrls: ['./index-navbar.component.css']
})
export class IndexNavbarComponent implements OnInit {

  isLoginIn = false;
  user: any;

  constructor(public authService: AuthService) { 
  
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn) {
      this.isLoginIn = true;
      this.user = JSON.parse(localStorage.getItem('user') as string);
    } 
  }

  Logout() {
    if(this.authService.isLoggedIn) {
      this.authService.SignOut();
    } 
  }

}
