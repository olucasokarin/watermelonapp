import { addColumns, schemaMigrations } from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations ({
  migrations: [
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: 'posts',
          columns: [
            { name: 'created_at', type: 'number'},
            { name: 'updated_at', type: 'number'},
          ]
        })
      ]
    }
  ]
})