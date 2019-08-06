const test = require('tape');

const super = require('supertest');

test('this test just to pass travis', (t) => {
    t.equal(1, 1, "equal 1 ");
    t.end()
});
