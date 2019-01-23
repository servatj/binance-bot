const axios = require('axios');

module.exports = () => {

  const baseUrl = 'https://api.binance.com';
  const query = '';
  const request = `${baseUrl}/${query}`
  
  const listAssets = () => console.log('list assets')

  const api = {
    listAssets
  }

  return api;
}
