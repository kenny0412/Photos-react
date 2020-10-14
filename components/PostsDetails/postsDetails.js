import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './PostDetailsStyles';

import {setCurrentPostRedux} from '../store/actions/Posts/actionPosts';
import {useDispatch, useSelector} from 'react-redux';

import Title from '../Title/title';

const PostDetails = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setCurrentPostRedux(null));
  };

  const currentPostRedux = useSelector((state) => state.posts.currentPost);

  return (
    <View style={styles.container}>
      <Button title="Back" onPress={handleButtonClick} />
      <Title>{currentPostRedux.title}</Title>
      <Text style={styles.body}>{currentPostRedux.body}</Text>
    </View>
  );
};

export default PostDetails;