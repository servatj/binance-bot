const { getAssetInfo } = require('../src/binance');

getAssetInfo('btc')
  .then(console.log)
