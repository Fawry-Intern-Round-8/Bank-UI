export interface Account {
  id: number;
  cardNumber: string;
  name: string;
  email: string;
  passwordHash: string;
  balance: number;
  isActive: boolean;
}
