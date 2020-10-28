import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useDatabase } from '@nozbe/watermelondb/hooks';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const database = useDatabase()
  const navigation = useNavigation();
  
  const postsCollection = database.collections.get('posts');

  async function handleAdd() {
     await database.action(async () => {
      return await postsCollection.create((post) => {
        post.title = title
        post.content = content
      });
    }).then(() => navigation.goBack())
   
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
          onPress={handleAdd}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Salvar</Text>
        </TouchableOpacity>

        </View>
    </View>
  )
}


export default NewPost;
