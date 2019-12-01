import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.model';

@Controller('api/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('in-thread/:id')
  getPostsInThread(@Param('id') id: string): Post[] {
    const threadId = parseInt(id, 10);
    return this.postsService.getPostsInThread(+threadId);
  }

  @Get('by-user/:id')
  getPostsByUser(@Param('id') id: string): Post[] {
    const userId = parseInt(id, 10);
    return this.postsService.getPostsByUser(+userId);
  }
}
