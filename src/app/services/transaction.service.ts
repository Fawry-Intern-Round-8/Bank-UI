import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transaction} from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions : Transaction[] = [];
  constructor(private http: HttpClient) {
  }

  getTransactions(accountId: number) {
    return this.http.get<Transaction[]>(`http://localhost:8081/bank/transactions/account/${accountId}`);
  }

}
