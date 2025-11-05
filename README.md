# Wallet App

Mobile wallet application for managing transactions and tracking card balance. Built as a test assignment.

## Technologies

- React 19
- TypeScript
- Vite
- FontAwesome for icons
- CSS3

## Features

The app has two main screens:

### TransactionsList

Shows card balance, available funds, payment status, daily points, and a list of the latest 10 transactions with details.

### TransactionDetail

Displays transaction amount, merchant name, date/time, status, and additional transaction information.

## Daily Points Calculation

Points are calculated based on the current day of the season:

- Day 1: 2 points
- Day 2: 3 points
- Day 3+: points[n] = 0.6 \* points[n-1] + points[n-2]

If points exceed 1000, they're displayed in "K" format (e.g., 28745 becomes 29K).

## Date Formatting

Dates are formatted based on how recent they are:

- Last 7 days: "Today", "Yesterday", or day name (Monday, Tuesday, etc.)
- Older: MM/DD/YY format

## Project Structure

```
src/
├── components/
│   ├── TransactionsList.tsx
│   └── TransactionDetail.tsx
├── data/
│   └── transactions.json
├── utils/
│   ├── pointsCalculator.ts
│   └── dateFormatter.ts
├── types.ts
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## Setup

Install dependencies:

```bash
npm install
```

## Running

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Design

The app is designed for mobile devices only with a maximum width of 428px. Clean, minimalist iOS-style design.

## Data

Test data is stored in `src/data/transactions.json` and loaded when the app starts.
