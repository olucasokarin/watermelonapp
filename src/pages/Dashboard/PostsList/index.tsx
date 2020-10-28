import React from 'react';
import { FlatList } from 'react-native';

import withObservables from '@nozbe/with-observables';

import PostItem from './PostItem';

import styles from './styles';
import { Database, Q } from '@nozbe/watermelondb';
import Post from '../../../models/Post';

function PostsList ({ posts }: {posts: Post[]}) {
  return (
    <FlatList
      data={posts}
      keyExtractor={post => post.id}
      renderItem={({item: post}) => <PostItem post={post} />}
      showsVerticalScrollIndicator={false}
      style={styles.postsList}

    />
  )
}

export default withObservables(
  [],
  ({database}: { database: Database}) => ({
    posts: database.collections.get('posts').query(
      Q.experimentalSortBy('updated_at', Q.desc) //verificar isso depois 
    )
  }),
)(PostsList);
