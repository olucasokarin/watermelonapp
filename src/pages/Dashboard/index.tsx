import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDatabase } from '@nozbe/watermelondb/hooks';

import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import PostsList from './PostsList';


const Dashboard: React.FC = () => {
  const database = useDatabase()

  const { navigate } = useNavigation();

  async function handleAdd() {
    navigate('NewPost', {});
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>WatermelonDB APP</Text>

      <PostsList database={database} />

      <RectButton
        activeOpacity={0.7}
        onPress={handleAdd}
        style={styles.touchableOpacityStyle}>
          <Icon name='plus' size={40} color="#fff" />
      </RectButton>
      
    </View>
  );
};

export default Dashboard;
