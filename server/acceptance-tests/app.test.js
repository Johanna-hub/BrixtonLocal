const request = require('supertest')

const app = require('../app')
const dummyData = require('../dummy-data')

describe('app.js', () => {
  describe('GET /dummy-data', () => {
    it('should return the correct dummy data', done => {
      request(app)
        .get('/dummy-data')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(dummyData)
          done()
        })
    })
  })
})
