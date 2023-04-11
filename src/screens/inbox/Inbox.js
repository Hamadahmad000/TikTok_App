import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import styles from './inboxStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';

export default function Inbox() {
  const navigation = useNavigation();
  function HandleNavigate() {
    navigation.navigate('DirectMessages');
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <Header
        size={20}
        title={'All acivity'}
        righticon={require('../../assets/icons/MessageIcon.png')}
        onpressright={HandleNavigate}
        borderBottom={true}
      />
      <View style={styles.messages}>
        <Image
          source={require('../../assets/icons/messageStroke.png')}
          style={styles.messagesIcon}
          resizeMode="contain"
        />
        <Text style={styles.text1}>Notification are't available</Text>
        <Text style={styles.text2}>
          Notification about your account will appear here
        </Text>
      </View>
    </View>
  );
}
