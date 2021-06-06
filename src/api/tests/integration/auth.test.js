/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const sinon = require('sinon');
const app = require('../../../index');
const firebaseProviders = require('../../services/firebaseProviders');

const sandbox = sinon.createSandbox();

describe('Authentication API', () => {
  afterEach(() => sandbox.restore());

  describe('POST /v1/auth/login', () => {
    it('should return an accessToken and a refreshToken when email and password matches', () => {
      const stubLogin = {
        user: {
          getIdToken: () => Promise.resolve('aaaaaaaaaaa'),
          refreshToken: 'xxxxx',
        },
      };
      sandbox.stub(firebaseProviders, 'login').callsFake(() => Promise.resolve(stubLogin));

      return request(app)
        .post('/v1/auth/login')
        .send({ email: 'huynhdn@gmail.com', password: 'abcd1234' })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.have.a.property('accessToken');
          expect(res.body).to.have.a.property('refreshToken');
          expect(res.body.accessToken).to.be.equal('aaaaaaaaaaa');
          expect(res.body.refreshToken).to.be.equal('xxxxx');
        })
        .catch(error => console.log(error, 5555555));
    });

    it('should report error when email and password are not provided', () => {
      return request(app)
        .post('/v1/auth/login')
        .send({})
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          const results = {
            code: httpStatus.BAD_REQUEST,
            message: 'Validation Error',
            errors: [
              {
                field: 'email',
                location: 'body',
                messages: ['"email" is required'],
                types: ['any.required'],
              },
              {
                field: 'password',
                location: 'body',
                messages: ['"password" is required'],
                types: ['any.required'],
              },
            ],
          };
          expect(res.body).to.be.deep.equal(results);
        });
    });
  });
});
