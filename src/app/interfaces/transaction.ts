import {Account} from './Account';

export interface Transaction {
  id: number;
  account: Account;
  type: string;
  amount: number;
  notes: string;
  date: Date;
}
