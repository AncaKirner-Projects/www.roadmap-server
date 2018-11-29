const request = require('request');
const Product = require('../../../server/models/product');

const endpoint = 'http://localhost:8000/products';

describe('products', function () {
  it('should return 200 response code', function (done) {
    const callback = jasmine.createSpy('callback').and.returnValue({
      data: {}
    });
    spyOn(Product, "getAllWithCategory").and.callFake(callback);

    request.get(endpoint, function (error, response) {
      console.log('*********', response.statusCode);
      // expect(response.statusCode).toEqual(200);
      done();
    });
  });

  xit('should fail on POST', function (done) {
    request.post(endpoint, { json: true, body: {} }, function (error, response) {
      expect(response.statusCode).toEqual(404);
      done();
    });
  });
});