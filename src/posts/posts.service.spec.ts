import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { DBService } from '../db/db.service';

describe('PostsService', () => {
  let service: PostsService;
  let dbService: DBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, DBService],
    }).compile();

    dbService = module.get<DBService>(DBService);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(dbService).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should be 2 posts in thread with id 1', () => {
    const threadId = 1;
    const expected = 2;
    const threads = service.getPostsInThread(threadId);
    expect(threads.length).toBe(expected);
    expect(threads[0].thread).toBe(threadId);
    expect(threads[1].thread).toBe(threadId);
  });

  it('should be 2 posts by user with id 2', () => {
    const userId = 2;
    const expected = 2;
    const threads = service.getPostsByUser(userId);
    expect(threads.length).toBe(expected);
    expect(threads[0].user).toBe(userId);
    expect(threads[1].user).toBe(userId);
  });
});
