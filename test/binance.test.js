const { createRequest } = require('../src/binance');

describe('Binance Module ',  () => {
  test('Create URL Given https://exchange.com and an endpoint returns https://exchange.com/endpoint', () => {
    const options = { baseUrl: 'https://exchange.com', endpoint: 'endpoint' }
    expect(createRequest(options)).toEqual('https://exchange.com/endpoint');
  })
})
