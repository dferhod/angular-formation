import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
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
