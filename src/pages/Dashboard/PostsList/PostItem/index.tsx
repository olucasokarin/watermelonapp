import withObservables from '@nozbe/with-observables';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Post from '../../../../models/Post';
import styles from './styles';

const PostItem = ({ post }: { post: Post }) => {
  const { navigate } = useNavigation();

  const handleDelete = useCallback(async () => {
    await post.delete();
  }, [post])

  function navigateToDetail(post: Post) {
    const id = post.id;
    navigate('UpdatePost', { id });
  }
  
  return (
    <View style={styles.post}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.detailsButton} onPress={() => {navigateToDetail(post)}}>
            <Text style={styles.detailsButtonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsButtonRemove} onPress={handleDelete}>
            <Text style={styles.detailsButtonTextRemove}>Excluir</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const enhance = withObservables(['post'], ({post}) => ({
  post,
}));

export default enhance(PostItem);
