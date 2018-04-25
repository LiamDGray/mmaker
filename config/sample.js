// What is our config?
let conf = {
  exchange: 'binance',
  market: 'NAV/BTC',

  // Get the poll settings
  pollInfo: 5000,
  pollOrders: 5000,
  pollReport: 5000,

  // Get order settings
  adjustSpread: true,
  minWidthPercent: 0.6,
  minWidthPercentIncrement: 0.4,
  orderCountBuy: 3,
  orderCountBuyMin: 1,
  orderCountSell: 3,
  orderCountSellMin: 1,
  orderSize: 0, // ZERO = AUTO USES orderSizeMultiplier * accountBalance
  orderSizeMultiplier: 2.5, // 0 - 100 % possible values
  saveReport: true, // Saves a report file in ./public/report.json

  binance: {
    apiKey: '', // You know what this is?
    secret: ''  // If you don't please leave!
  }
}

module.exports = conf
