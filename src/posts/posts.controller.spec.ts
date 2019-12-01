import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { DBService } from '../db/db.service';
import { PostsService } from './posts.service';
import { DbModule } from '../db/db.module';

describe('Posts Controller', () => {
  let controller: PostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, DBService],
      controllers: [PostsController],
    }).compile();

    controller = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
