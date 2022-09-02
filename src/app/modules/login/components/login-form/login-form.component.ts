import {Component, EventEmitter, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {ERROR_TOAST, SUCCESS_TOAST} from "../../../../core/constants/toast.constants";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  // Component's Variables
  loginForm: FormGroup;
  passwordVisible = false;

  // Output Variables
  login: EventEmitter<boolean>;

  constructor(
    private toastService: ToastService,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });

    this.login = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  async doLogin(): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      if (this.loginForm.valid) {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
        if (email === 'test@test.com' && password === 'test') {
          this.toastService.showToast(SUCCESS_TOAST, 'Login', 'Login successful');
          console.log('Login successful');
          resolve(true);
        } else {
          this.toastService.showToast(ERROR_TOAST, 'Login Error', 'Invalid email or password');
          console.error('Invalid credentials');
        }
      } else {
        this.toastService.showToast(ERROR_TOAST, 'Login Error', 'Form is not valid');
        console.error('Form is not valid');
        reject(false);
      }
    });
  }

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

}
