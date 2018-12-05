const request = require('supertest');
const app = require('../../../server/server.js');

const product = {};
const Product = require('../../../server/models/product');
const prod = {};
const ProductCategory = require('../../../server/models/productCategory');

describe('/products routes', function () {
  it('GET / success', (done) => {
    const result = { all: {} };
    spyOn(Product, 'getAllWithCategory').and.callFake(
      (product, cb) => { cb(null, result); }
    );

    request(app)
      .get('/products')
      .expect(200, (err, res) => {
        expect(err).toBeFalsy();
        expect(res.body).toEqual(result);
        done();
      });
  });

  it('GET / error', (done) => {
    const error = { message: 'Test error' };
    spyOn(Product, 'getAllWithCategory').and.callFake(
      (product, cb) => { cb(error, null); }
    );

    request(app)
      .get('/products')
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });

  it('GET /products/categories/:ids success', (done) => {
    const result = [
      { id: 1, prod_name: 'Prod1', category_id: 2 },
      { id: 2, prod_name: 'Prod2', category_id: 1 }
    ];
    const categIds = '1,2';
    spyOn(Product, 'getAllFromCategory').and.callFake(
      (product, categIds, cb) => { cb(null, result); }
    );

    request(app)
      .get(`/products/categories/${categIds}`)
      .expect(200, (err, res) => {
        expect(err).toBeFalsy();
        expect(res.body).toEqual(result);
        done();
      });
  });

  it('GET /products/categories/:ids error', (done) => {
    const error = { message: 'Test error' };
    const categIds = '1,2';
    spyOn(Product, 'getAllFromCategory').and.callFake(
      (product, categIds, cb) => { cb(error, null); }
    );

    request(app)
      .get(`/products/categories/${categIds}`)
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });

  it('GET /products/:id success', (done) => {
    const result = [
      { id: 1, prod_name: 'Prod1' },
      { id: 2, prod_name: 'Prod2' }
    ];
    const id = 2;
    spyOn(Product, 'getById').and.callFake(
      (product, id, cb) => { cb(null, result); }
    );

    request(app)
      .get(`/products/${id}`)
      .expect(200, (err, res) => {
        expect(err).toBeFalsy();
        expect(res.body).toEqual(result);
        done();
      });
  });

  it('GET /products/:id error', (done) => {
    const error = { message: 'Test error' };
    const id = 2;
    spyOn(Product, 'getById').and.callFake(
      (product, id, cb) => { cb(error, null); }
    );

    request(app)
      .get(`/products/${id}`)
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });

  it('POST / success', (done) => {
    const result = {
      insertId: 25,
      affectedRows: 1
    };
    const result2 = {
      affectedRows: 1
    };
    spyOn(Product, 'add').and.callFake(
      (product, cb) => { cb(null, result); }
    );

    spyOn(ProductCategory, 'add').and.callFake(
      (prod, cb) => { cb(null, result2); }
    );

    request(app)
      .post('/products')
      .send({ category_id: 1 })
      .expect(201, (err, res) => {
        expect(ProductCategory.add).toHaveBeenCalled();
        expect(err).toBeFalsy();
        expect(res.body.id).toEqual(result.insertId);
        done();
      });
  });

  it('POST / error', (done) => {
    const error = { message: 'Test error' };

    spyOn(Product, 'add').and.callFake(
      (product, cb) => { cb(error, null); }
    );

    request(app)
      .post('/products')
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });

  it('DELETE /products/:id success', (done) => {
    const result = {
      affectedRows: 1
    };
    const id = 2;
    spyOn(Product, 'delete').and.callFake(
      (product, id, cb) => { cb(null, result); }
    );

    request(app)
      .delete(`/products/${id}`)
      .expect(204, (err, res) => {
        expect(err).toBeFalsy();
        done();
      });
  });

  it('DELETE /products/:id error', (done) => {
    const error = { message: 'Test error' };
    const id = 2;
    spyOn(Product, 'delete').and.callFake(
      (product, id, cb) => { cb(error, null); }
    );

    request(app)
      .delete(`/products/${id}`)
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });
});
