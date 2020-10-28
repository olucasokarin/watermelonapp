import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../pages/Dashboard';
import NewPost from '../pages/NewPost';
import UpdatePost from '../pages/UpdatePost';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name='Dashboard' component={Dashboard} />
      <Screen name='NewPost' component={NewPost} />
      <Screen name='UpdatePost' component={UpdatePost} />
    </Navigator>
  </NavigationContainer>
);


export default Routes;
