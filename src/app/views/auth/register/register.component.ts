import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/interfaces/token';
import { UtilityService } from 'src/app/services/utility.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ModelConfigService } from 'src/app/services/model-config.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user = {
    email: '',
    password: '',
    sonidero_name: ''
  };
  public serverError = {
    message: ''
  };

  private chosenFile;
  private subscriptions = new Subscription();
  registerForm: any;
  modelConf: any;

  constructor(private utility: UtilityService, private authService: AuthenticationService, private router: Router, private modelService: ModelConfigService) { 
    this.subscriptions.add(
      this.modelService.modelConfig.subscribe(
        modelConf => {
          this.modelConf = modelConf;
        }
      )
    );
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
      'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      'sonidero_name': new FormControl(this.user.sonidero_name, [Validators.required, Validators.maxLength(50)]),
    });
  }

  fileChange($event) {
    const reader = new FileReader();
    reader.readAsDataURL($event.target.files[0]);
    reader.onload = () => {
      this.chosenFile = reader.result;
    }
  }

  registerUser($e) {
    this.modelService.setLoading(true);
    $e.preventDefault();
    const user = this.registerForm.value;
    user.avatar = this.chosenFile;
    this.authService.localRegister(user).subscribe(
      (user: User) => {
        console.log((user.token));
        if (user.token) {
          this.authService.saveToken(user.token);
          this.router.navigate(['/users']);
          this.utility.createNotification('success', 'Success', 'You are now registered.');
          this.modelService.setLoading(false);
        }
      }, (httpErr: HttpErrorResponse) => {
        console.log(httpErr);
        this.utility.createNotification('error', 'Error', httpErr.error.message);
        this.modelService.setLoading(false);
      }
    );
  }

  // create shortcut for pulling values from the FormGroup

  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  get sonidero_name() { return this.registerForm.get('sonidero_name'); }

}
