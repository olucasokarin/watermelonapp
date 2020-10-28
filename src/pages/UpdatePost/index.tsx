import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useDatabase } from '@nozbe/watermelondb/hooks';

import { useNavigation, useRoute } from '@react-navigation/native';

import Post from '../../models/Post';
import styles from './styles';

interface PostProps {
  id: string;
}

const UpdatePost: React.FC = () => {
  const [post, setPost] = useState<Post>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const database = useDatabase()
  const route = useRoute();
  const navigation = useNavigation();

  
  const postsCollection = database.collections.get('posts');
  const postParam = route.params as PostProps;
  
  useEffect(() => {
    async function loadData(){
      const findPost =  await postsCollection.find(postParam.id) as Post;
      setTitle(findPost.title)
      setContent(findPost.content)
      setPost(findPost);
    }
      
    loadData();
  }, [postParam])
  

  async function handleUpdate() {
    if(post){
      await database.action(async () => {
        await post.update(post => {
          post.title = title;
          post.content = content;
        })
      }).then(() => navigation.goBack() )
    }
  }
   

  return (
    <View style={styles.container}>

      <View style={styles.searchForm}>
        <TextInput
          style={styles.input}
          placeholder="Digite o titulo"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o conteudo"
          numberOfLines={12}
          multiline
          textAlignVertical='top'
          value={content}
          onChangeText={text => setContent(text)}
        />

        <TouchableOpacity
          onPress={handleUpdate}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Salvar</Text>
        </TouchableOpacity>

        </View>
    </View>
  )
}


export default UpdatePost;
