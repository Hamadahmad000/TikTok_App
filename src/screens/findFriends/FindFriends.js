import {View, Text} from 'react-native';
import React from 'react';
import styles from './findFriendStye';
import Header from '../../components/header/Header';

export default function FindFriends() {
  return (
    <View style={styles.container}>
      <Header
        Lefticons={require('../../assets/icons/back.png')}
        title={'Find friends'}
        righticon={require('../../assets/icons/Scanner.png')}
        size={18}
      />
    </View>
  );
}
