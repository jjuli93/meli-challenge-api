// import request from 'supertest';
// import userRepository from '../app/services/products';
// import app from '../app';

// describe('users', () => {
//   beforeEach(() => userRepository.createMany([{ username: 'u1' }, { username: 'u2' }]));
//   describe('/users GET', () => {
//     it('should return all users', (done: jest.DoneCallback) => {
//       request(app)
//         .get('/users')
//         .expect(200)
//         .then((res: request.Response) => {
//           expect(res.body.length).toBe(2);
//           done();
//         });
//     });
//   });
//   describe('/users POST', () => {
//     describe('/users/:id GET', () => {
//       it('should return user with id 1', (done: jest.DoneCallback) => {
//         request(app)
//           .get('/users/1')
//           .expect(200)
//           .then((res: request.Response) => {
//             expect(res.body).toHaveProperty('username');
//             expect(res.body).toHaveProperty('id');
//             done();
//           });
//       });
//       it('should return error for user with id 5', (done: jest.DoneCallback) => {
//         request(app)
//           .get('/users/5')
//           .expect(404)
//           .then((res: request.Response) => {
//             expect(res.body).toHaveProperty('message');
//             expect(res.body).toHaveProperty('internal_code');
//             done();
//           });
//       });
//     });
//   });
// });
