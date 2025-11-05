import React from "react";
import { Transaction } from "../types";

interface TransactionDetailProps {
  transaction: Transaction;
  onBack: () => void;
}

export const TransactionDetail: React.FC<TransactionDetailProps> = ({
  transaction,
  onBack,
}) => {
  const dateTime = new Date(transaction.date).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="transaction-detail">
      <div className="detail-header">
        <button className="back-button" onClick={onBack}>
          <i className="fas fa-chevron-left"></i>
        </button>
      </div>

      <div className="detail-top-section">
        <div className="detail-amount">${transaction.amount.toFixed(2)}</div>
        <div className="detail-name">{transaction.name}</div>
        <div className="detail-datetime">{dateTime}</div>
      </div>

      <div className="detail-card">
        <div className="detail-status-section">
          <div className="detail-status-label">
            Status:{" "}
            <span className="status-value">
              {transaction.pending ? "Pending" : "Approved"}
            </span>
          </div>
          <div className="detail-card-info">{transaction.description}</div>
        </div>

        <div className="detail-total-section">
          <span className="total-label">Total</span>
          <span className="total-amount">${transaction.amount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
