import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";


import schema from './schema';
import migrations from './migrations';
import models from '../models';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
})


const database = new Database({
  adapter,
  modelClasses: models,
  actionsEnabled: true,
})


export default database;