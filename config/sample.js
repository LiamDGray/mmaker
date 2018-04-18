// What is our config?
let conf = {
  exchange: 'bitfinex',
  market: 'BCH/BTC',

  // Get the poll settings
  pollInfo: 8000,
  pollOrders: 8000,
  pollReport: 5000,

  // Get order settings
  adjustSpread: true,
  greedy: false,
  minWidthPercent: 0.25,
  minWidthPercentIncrement: 0.1,
  orderCountBuy: 5,
  orderCountBuyMin: 3,
  orderCountSell: 5,
  orderCountSellMin: 3,
  orderSize: 0, // ZERO = AUTO
  orderSizeMultiplier: 0.1,
  positionTarget: 1,
  saveReport: true,

  binance: {
    apiKey: '', // You know what this is?
    secret: ''  // If you don't please leave!
  }
}

module.exports = conf
