import { Injectable } from '@nestjs/common';
import * as loadJsonFile from 'load-json-file';
import * as path from 'path';

@Injectable()
export class DBService {
  private db = loadJsonFile.sync(path.resolve(process.cwd(), 'db.json'));

  getPosts() {
    const db = this.getDb();
    return db.posts;
  }

  private getDb() {
    return JSON.parse(JSON.stringify(this.db.valueOf()));
  }
}
