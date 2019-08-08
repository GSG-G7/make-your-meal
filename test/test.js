const test = require('tape');

const supertest = require('supertest');

// / test for statring work on travise :

test('this test just to pass travis', (t) => {
  t.equal(1, 1, 'equal 1 ');
  t.end();
});

// / test for the home page :

const app = require('../src/app');

test('Home root return status code 200', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.statusCode, 200, 'Status Code should be 200');
        t.end();
      }
    });
});

// // test for the search route :

test('Testing the search route', (t) => {
  supertest(app)
    .post('/search')
    .send('pas')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        const actual = typeof res.text;
        t.equal(actual, 'string', 'should return html string');
        t.deepEqual(res.text.includes('<!DOCTYPE html>'), true, 'type of the response is html ');
        t.end();
      }
    });
});

test('wrong path return status code 404', (t) => {
  supertest(app)
    .get('/asd')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.statusCode, 404, 'Status Code should be 404');
        t.end();
      }
    });
});
