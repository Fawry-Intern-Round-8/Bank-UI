import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { AccountRequest } from '../../interfaces/account-request';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  form = {
    name: '',
    email: '',
    password: ''
  };

  errorMessage: string = '';

  accountRequest: AccountRequest = {} as AccountRequest;

  constructor(private accountService: AccountService, private router: Router) {}

  onSubmit() {
    this.accountRequest.email = this.form.email;
    this.accountRequest.name = this.form.name;
    this.accountRequest.passwordHash = this.form.password;

    this.accountService.createAccount(this.accountRequest).subscribe({
      next: (response) => {
        this.router.navigate(['/account']);
        this.accountService.Account = response;
      },
      error: (err) => {
        console.error('Account creation failed:', err);
        this.errorMessage = 'this email already exists you can log in';
      }
    });
  }
}
