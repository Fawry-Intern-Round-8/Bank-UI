import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AccountService} from '../../services/account.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  protected errorMessage: string = '';

  constructor(private accountService: AccountService, private router: Router) {
  }

  form = {
    email: '',
    password: ''
  };

  onLogin() {
    this.accountService.authenticate(this.form.email, this.form.password).subscribe({
      next: (response) => {
        this.accountService.Account = response;
        this.router.navigate(['/account']);
      },
      error: (err) => {
        console.error("Login failed:", err);
        this.errorMessage = 'Invalid email or password';
        this.form.password = '';
      }
    });
  }
}
