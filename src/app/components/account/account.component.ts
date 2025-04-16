import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../../interfaces/Account';
import { AccountService } from '../../services/account.service';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter.pipe';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, CreditCardFormatterPipe, RouterOutlet, RouterLink],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  account!: Account;

  protected showPassword: boolean = false;

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.account = this.accountService.Account;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['']);
  }
}
