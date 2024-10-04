import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../core/validators/password-match.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  propEmail = new FormControl('', [
    Validators.required
  ])
  propPass = new FormControl('', [
    Validators.required
  ])
  propConfirmPass = new FormControl('', [
    Validators.required
  ])
  form = new FormGroup({
    email: this.propEmail,
    password: this.propPass,
    confirmPassword: this.propConfirmPass
  }, [
    passwordMatchValidator
  ])

  register() {}
}
