import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../../interfaces/Account';
import { AccountService } from '../../services/account.service';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter.pipe';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, CreditCardFormatterPipe],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  account!: Account;

  password : string = '************';
  protected showPassword: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.account = this.accountService.Account;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.password = this.account.passwordHash;
    } else {
      this.password = '************';
    }
  }

}
