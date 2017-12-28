// What is our config?
let conf = {
  exchange: 'bitfinex',
  market: 'BCH/BTC',

  // Get the poll settings
  pollInfo: 5000,
  pollOrders: 5000,
  pollReport: 5000,

  // Get order settings
  adjustSpread: true,
  minWidthPercent: 0.15,
  minWidthPercentIncrement: 0.1,
  orderCountBuy: 5,
  orderCountBuyMin: 5,
  orderCountSell: 5,
  orderCountSellMin: 5,
  orderSize: 0, // ZERO = AUTO
  orderSizeMultiplier: 0.05,
  positionTargets: [ 0.3, 0.4, 0.5 ],
  saveReport: true,

  bitfinex: {
    apiKey: '', // You know what this is?
    secret: ''  // If you don't please leave!
  }
}

module.exports = conf
