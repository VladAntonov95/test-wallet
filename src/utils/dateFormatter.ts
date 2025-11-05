export function formatTransactionDate(dateString: string): string {
  const transactionDate = new Date(dateString);
  const today = new Date();
  const diffTime = today.getTime() - transactionDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[transactionDate.getDay()];
  }

  const month = transactionDate.getMonth() + 1;
  const day = transactionDate.getDate();
  const year = transactionDate.getFullYear().toString().slice(-2);

  return `${month}/${day}/${year}`;
}
