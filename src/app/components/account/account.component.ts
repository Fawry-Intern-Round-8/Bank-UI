import { Component} from '@angular/core';
import {Account} from '../../interfaces/Account';
import {AccountService} from '../../services/account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  Account!: Account;

  constructor(private accountService: AccountService) {

  }
}
