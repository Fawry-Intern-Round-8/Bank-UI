import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Account} from '../interfaces/Account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/accounts';

  Account!: Account;

  constructor(private http: HttpClient) {}

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/create`, account);
  }


  authenticate(email: string, password: string): Observable<Account> {
    console.log(email, '  ', password);
    return this.http.post<Account>(`${this.apiUrl}/login`, {email, password});
  }

}
