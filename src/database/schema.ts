import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'string' },
        { name: 'created_at', type: 'number'},
        { name: 'updated_at', type: 'number'},
      ]
    }),
  ]
})