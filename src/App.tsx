import React from 'react';
import Routes from './routes'

import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

import database from './database';

const App = () => {

  return (
    <DatabaseProvider database={database}>
      <Routes />
    </DatabaseProvider>

  );
};


export default App;
