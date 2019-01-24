const axios = require('axios');

const BINANCE = 'https://api.binance.com';
const URL_TICKER = 'api/v1/ticker/24hr';


const createRequest = ({ baseUrl, endpoint }) => `${baseUrl}/${endpoint}`;
const runRequest = (request) => axios.get(request);

const getAssetInfo = (coin) => {
  return runRequest(createRequest( { baseUrl: BINANCE, query: URL_TICKER + '/' + coin } ))
}

module.exports = {
  createRequest,
  getAssetInfo
}
