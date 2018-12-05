const request = require('supertest');
const app = require('../../../server/server.js');

const category = {};
const Category = require('../../../server/models/category');

describe('/categories routes', function () {
  it('GET / success', (done) => {
    const result = { all: {} };
    spyOn(Category, 'getAll').and.callFake(
      (category, cb) => { cb(null, result); }
    );

    request(app)
      .get('/categories')
      .expect(200, (err, res) => {
        expect(err).toBeFalsy();
        expect(res.body).toEqual(result);
        done();
      });
  });

  it('GET / error', (done) => {
    const error = { message: 'Test error' };
    spyOn(Category, 'getAll').and.callFake(
      (category, cb) => { cb(error, null); }
    );

    request(app)
      .get('/categories')
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });

  it('GET /categories/:id success', (done) => {
    const result = {
      id: 2, categ_name: 'Categ2'
    };
    const id = 2;

    spyOn(Category, 'getById').and.callFake(
      (category, id, cb) => { cb(null, result); }
    );

    request(app)
      .get(`/categories/${id}`)
      .expect(200, (err, res) => {
        expect(err).toBeFalsy();
        expect(res.body).toEqual(result);
        done();
      });
  });

  it('GET /categories/:id error', (done) => {
    const error = { message: 'Test error' };
    const id = 2;
    spyOn(Category, 'getById').and.callFake(
      (category, id, cb) => { cb(error, null); }
    );

    request(app)
      .get(`/categories/${id}`)
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });

  it('POST / success', (done) => {
    const result = {
      insertId: 27,
      affectedRows: 1
    };
    spyOn(Category, 'add').and.callFake(
      (category, cb) => { cb(null, result); }
    );

    request(app)
      .post('/categories')
      .send({ categ_name: 'Categ8' })
      .expect(201, (err, res) => {
        expect(err).toBeFalsy();
        expect(res.body.id).toEqual(result.insertId);
        done();
      });
  });

  it('POST / error', (done) => {
    const error = { message: 'Test error' };

    spyOn(Category, 'add').and.callFake(
      (category, cb) => { cb(error, null); }
    );

    request(app)
      .post('/categories')
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });

  it('DELETE /categories/:id success', (done) => {
    const result = {
      affectedRows: 1
    };
    const id = 2;
    spyOn(Category, 'delete').and.callFake(
      (category, id, cb) => { cb(null, result); }
    );

    request(app)
      .delete(`/categories/${id}`)
      .expect(204, (err, res) => {
        expect(err).toBeFalsy();
        done();
      });
  });

  it('DELETE /categories/:id error', (done) => {
    const error = { message: 'Test error' };
    const id = 2;
    spyOn(Category, 'delete').and.callFake(
      (category, id, cb) => { cb(error, null); }
    );

    request(app)
      .delete(`/categories/${id}`)
      .expect(404, (err, res) => {
        expect(res.error.text).toEqual(JSON.stringify(error));
        done();
      });
  });
});
