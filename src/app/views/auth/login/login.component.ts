import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/global/utility.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user = {
    email: '',
    password: '',
    sonidero_name: ''    
  };
  private chosenFile;
  registerForm: any;
  serverError: any;

  constructor(private authService: AuthenticationService, private router: Router, private utilityService: UtilityService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(4), Validators.maxLength(50)])
    });
  }

  login($e) {
    $e.preventDefault();
    const user = this.registerForm.value;
    user.avatar = this.chosenFile;
    // console.log(user);
    this.authService.login(user).toPromise().then(
      (resp: any) => {
        console.log(resp);
        this.authService.saveToken(resp.accessToken);
        if(resp) {
          this.router.navigate(['/']);
        }
      }
    ).catch((errResponse: HttpErrorResponse) => {
      this.serverError = errResponse.error;
    });
  }

  // create shortcut for pulling values from the FormGroup

  get email() { return this.registerForm.get('email'); }
  
  get password() { return this.registerForm.get('password'); }

}
