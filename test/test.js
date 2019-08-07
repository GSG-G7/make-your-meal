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
      t.error(err);
      t.equal(res.statusCode, 200, 'Status Code should be 200');
      t.end();
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
      const actual = typeof res.text;
      t.error(err);
      t.equal(actual, 'string');
      t.end();
    });
});
