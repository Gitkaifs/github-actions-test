import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../app.js';
import connectDB from '../db.js';
import { userModel } from '../user.model.js';

before(async () => {
  process.env.MONGO_URI ??=
    'mongodb://kaif:kaif@localhost:27017/crud_practice?authSource=admin';

  await connectDB();
  await userModel.deleteMany({});
});

after(async () => {
  await userModel.deleteMany({});
  await mongoose.disconnect();
});

test('POST /user creates a user', async () => {
  const res = await request(app)
    .post('/user')
    .send({ name: 'Kaif', age: 22 });

  assert.equal(res.status, 201);
  assert.ok(res.body);
});

test('GET /user returns users', async () => {
  const res = await request(app).get('/user');
  console.log('GET /user response:', res.body);

  assert.equal(res.status, 200);
assert.ok(Array.isArray(res.body.user));
});

test('GET /user/:id returns one user', async () => {
  const user = await userModel.create({ name: 'Test User', age: 20 });

  const res = await request(app).get(`/user/${user._id}`);

  assert.equal(res.status, 200);
});

test('PUT /user/:id updates a user', async () => {
  const user = await userModel.create({ name: 'Old Name', age: 20 });

  const res = await request(app)
    .put(`/user/${user._id}`)
    .send({ name: 'New Name', age: 21 });

  assert.equal(res.status, 200);
});

test('DELETE /user/:id deletes a user', async () => {
  const user = await userModel.create({ name: 'Delete Me', age: 25 });

  const res = await request(app).delete(`/user/${user._id}`);

  assert.equal(res.status, 200);
});