#  Real-Time Crypto Price Tracker

A responsive web app built using React and Redux Toolkit to simulate real-time cryptocurrency price tracking (like CoinMarketCap).

##  Features

- Real-time simulated price updates every 1 second using `setInterval`.
- Redux Toolkit state management with slices and selectors.
- Responsive crypto table with 5 assets: BTC, ETH, USDT, BNB, and XRP.
- Color-coded percentage changes (green for gain, red for loss).
- Static 7-day trend chart for each asset.

##  Tech Stack

-  React
-  Redux Toolkit
-  CSS (Responsive Design)
-  Simulated WebSocket updates

##  Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Zack7091/crypto-price-tracker.git
cd crypto-price-tracker
npm install
npm run dev
