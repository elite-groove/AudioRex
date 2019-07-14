import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Token } from 'src/app/interfaces/token';
import { UtilityService } from 'src/app/services/utility.service';
import { ModelConfigService } from 'src/app/services/model-config.service';

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

  constructor(private authService: AuthenticationService, private router: Router, private utility: UtilityService, private modelService: ModelConfigService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(4), Validators.maxLength(50)])
    });
  }

  login($e) {
    this.modelService.setLoading(true);
    $e.preventDefault();
    const user = this.registerForm.value;
    user.avatar = this.chosenFile;
    // console.log(user);
    this.authService.localLogin(user).subscribe(
      (token: Token) => {
        console.log(token);
        this.authService.saveToken(token);
        this.utility.createNotification('success', 'Success', 'You are now logged in.');
        this.modelService.setLoading(false);
        if(token) {
          this.router.navigate(['/']);
        }
      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.serverError = err.error;
      }
    )
  }

  // create shortcut for pulling values from the FormGroup

  get email() { return this.registerForm.get('email'); }
  
  get password() { return this.registerForm.get('password'); }

}
