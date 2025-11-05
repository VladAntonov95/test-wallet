export interface Transaction {
  id: string;
  type: 'credit' | 'payment';
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser: string | null;
  icon: string;
  rewardsPercent: number | null;
}

export interface WalletData {
  cardLimit: number;
  cardBalance: number;
  transactions: Transaction[];
}

