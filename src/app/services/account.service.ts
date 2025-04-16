import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/Account';
import {AccountRequest} from '../interfaces/account-request';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8081/bank/accounts';

  private _account!: Account;

  get Account(): Account {
    return this._account;
  }

  set Account(value: Account) {
    this._account = value;
    localStorage.setItem('account', JSON.stringify(value));
  }

  constructor(private http: HttpClient) {
    const savedAccount = localStorage.getItem('account');
    if (savedAccount) {
      this._account = JSON.parse(savedAccount);
    }
  }

  createAccount(account: AccountRequest): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/create`, account);
  }

  authenticate(email: string, password: string): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/login`, { email, password });
  }

  logout() {
    this._account = {} as Account;
    localStorage.removeItem('account');
  }
}
