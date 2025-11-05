import React from 'react';
import { Transaction, WalletData } from '../types';
import { calculateDailyPoints, formatPoints } from '../utils/pointsCalculator';
import { formatTransactionDate } from '../utils/dateFormatter';

interface TransactionsListProps {
  data: WalletData;
  onTransactionClick: (transaction: Transaction) => void;
}

export const TransactionsList: React.FC<TransactionsListProps> = ({ data, onTransactionClick }) => {
  const { cardLimit, cardBalance, transactions } = data;
  const available = cardLimit - cardBalance;
  const dailyPoints = calculateDailyPoints();
  const sortedTransactions = [...transactions].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestTransactions = sortedTransactions.slice(0, 10);

  return (
    <div className="transactions-list">
      <h1 className="page-title">TransactionsList</h1>
      
      <div className="cards-grid">
        <div className="card balance-card">
          <div className="card-header">Card Balance</div>
          <div className="balance-amount">${cardBalance.toFixed(2)}</div>
          <div className="available-amount">${available.toFixed(2)} Available</div>
        </div>

        <div className="card payment-card">
          <div className="card-header">No Payment Due</div>
          <div className="payment-message">You've paid your September balance.</div>
          <div className="payment-icon">
            <i className="fas fa-check"></i>
          </div>
        </div>

        <div className="card points-card">
          <div className="card-header">Daily Points</div>
          <div className="points-amount">{formatPoints(dailyPoints)}</div>
        </div>
      </div>

      <div className="transactions-section">
        <h2 className="section-title">Latest Transactions</h2>
        <div className="transactions-container">
          {latestTransactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="transaction-item"
              onClick={() => onTransactionClick(transaction)}
            >
              <div className="transaction-icon" style={{
                background: transaction.type === 'payment' 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                  : '#333'
              }}>
                <i className={`fas fa-${transaction.icon}`}></i>
              </div>
              
              <div className="transaction-details">
                <div className="transaction-main">
                  <span className="transaction-name">{transaction.name}</span>
                  {transaction.pending && <span className="pending-badge">Pending</span>}
                </div>
                <div className="transaction-description">{transaction.description}</div>
                <div className="transaction-date-line">
                  {transaction.authorizedUser && (
                    <span className="authorized-user">{transaction.authorizedUser} – </span>
                  )}
                  <span className="transaction-date">{formatTransactionDate(transaction.date)}</span>
                </div>
              </div>

              <div className="transaction-right">
                <div className="transaction-amount">
                  {transaction.type === 'payment' ? '+' : ''}${transaction.amount.toFixed(2)}
                </div>
                {transaction.rewardsPercent && (
                  <div className="rewards-percent">{transaction.rewardsPercent}%</div>
                )}
                <i className="fas fa-chevron-right transaction-arrow"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

