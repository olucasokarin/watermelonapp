import { Model } from "@nozbe/watermelondb";
import { action, date, field, readonly } from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
  static table = 'posts';


  @field('title') title!: string;
  @field('content') content!: string;

  @readonly @date('created_at') createdAt!: number;
  @readonly @date('updated_at') updatedAt!: number;
  
  @action async delete() {
    await super.markAsDeleted();
  }

  @action async updatePost() {
    await this.update((post) => {
      this.title = post.title
      this.content = post.content
    })
  } 
}