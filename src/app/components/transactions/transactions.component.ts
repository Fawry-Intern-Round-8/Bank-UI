import { Component } from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {AccountService} from '../../services/account.service';
import {CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [
    NgClass,
    DatePipe,
    CurrencyPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transactions: any[] = [];
  isLoading: boolean = true;

  constructor(private transactionService: TransactionService,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
    const accountId = this.accountService.Account?.id;
    if (!accountId) {
      console.error("No account ID found!");
      return;
    }

    this.transactionService.getTransactions(accountId).subscribe({
      next: (response) => {
        this.transactions = response;
        this.isLoading = false;
        console.log(response);
      },
      error: (err) => {
        console.error("Error fetching transactions:", err);
        this.isLoading = false;
      }
    });
  }

}
