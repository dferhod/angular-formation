import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './login.component.html',
  styles: `
    .red {
      color: red;
    }
    .green {
      color: green;
    }

    input[name="email"] {
      background-color: gray;
    }

    input.ng-invalid {
      background-color: red;
    }
  `
})
export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)

  login(form: NgForm) {
    if (form.invalid) return
    this.authService.login(form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
