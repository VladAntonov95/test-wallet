import { useState } from 'react';
import { TransactionsList } from './components/TransactionsList';
import { TransactionDetail } from './components/TransactionDetail';
import { Transaction, WalletData } from './types';
import walletData from './data/transactions.json';
import './App.css';

function App() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const data = walletData as WalletData;

  return (
    <div className="app">
      {selectedTransaction ? (
        <TransactionDetail 
          transaction={selectedTransaction}
          onBack={() => setSelectedTransaction(null)}
        />
      ) : (
        <TransactionsList 
          data={data}
          onTransactionClick={setSelectedTransaction}
        />
      )}
    </div>
  );
}

export default App;

