const Request = require('request');

// xdescribe('Server', () => {
//   let server;
//   beforeAll(() => {
//     server = require('../../server/server');
//   });

//   afterAll(() => {
//     server.close();
//   });

//   describe('GET /products/', () => {
//     const data = {};
//     beforeAll((done) => {
//       Request.get('http://localhost:8000/products', (err, resp, body) => {
//         data.status = resp.statusCode;
//         data.body = JSON.parse(body);
//         done();
//       })
//     });

//     it('Status 200', () => {
//       expect(data.status).toBe(200);
//     });
//   });
// })