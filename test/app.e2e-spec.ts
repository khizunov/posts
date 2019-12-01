import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('PostsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/posts/in-thread/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/posts/in-thread/1')
      .expect(200);
  });

  it('/api/posts/by-user/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/posts/by-user/1')
      .expect(200);
  });

  it('/api/posts (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/posts')
      .expect(404);
  });
});
