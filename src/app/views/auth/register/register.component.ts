import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../../shared/services/auth.service";
import { MustMatch } from "../../../shared/util/must-match";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  passwordstrength : string = '';
  submitted = false;

  constructor(public authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        displayname: ["", Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        // validates date format yyyy-mm-dd
        // dob: [
        //   "",
        //   [
        //     Validators.required,
        //     Validators.pattern(
        //       /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        //     ),
        //   ],
        // ],
        confirmPassword: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(loginData: any) {

    this.submitted = true;

    if (this.loginForm.invalid) {
      alert('Please fill in all the fields');
      return;
    }

    this.authService.SignUp(loginData.email, loginData.password, loginData.displayname, '');
    
  }


}
