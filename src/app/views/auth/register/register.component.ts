import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/interfaces/token';
import { UtilityService } from 'src/app/services/utility.service';

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
  registerForm: any;

  constructor(private utilService: UtilityService, private authService: AuthenticationService, private router: Router) { }

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
    console.log(this.serverError);
    $e.preventDefault();
    const user = this.registerForm.value;
    user.avatar = this.chosenFile;
    this.authService.localRegister(user).subscribe(
      (token: Token) => {
        console.log((token));
        if (token) {
        this.authService.saveToken(token);
          this.router.navigate(['/home']);
        }
      }
    );
  }

  // create shortcut for pulling values from the FormGroup

  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  get sonidero_name() { return this.registerForm.get('sonidero_name'); }

}
