import { Injectable } from '@nestjs/common';
import { DBService } from '../db/db.service';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  constructor(private readonly dbService: DBService) {}

  getPostsInThread(threadId: number): Post[] {
    return this.dbService
      .getPosts()
      .filter(post => post.thread === threadId);
  }

  getPostsByUser(userId: number): Post[] {
    return this.dbService
      .getPosts()
      .filter(post => post.user === userId);
  }
}
