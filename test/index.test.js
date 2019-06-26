/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Get all data', () => {
  test('Should get all data', (done) => {
    chai.request(app)
      .get('/get')
      .end((err, res) => {
        if (err) throw err;
        expect(res).to.have.status(200);
        done();
      });
  });
});
