import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import styles from './directMessageStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';

export default function DirectMessages() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <Header
        Lefticons={require('../../assets/icons/back.png')}
        onpressleft={handleGoBack}
        size={17}
        title={'Direct messages'}
        righticon={require('../../assets/icons/PlusIcon.png')}
        borderBottom={true}
      />
      <View style={styles.messages}>
        <Image
          source={require('../../assets/icons/MessageIcon.png')}
          style={styles.messagesIcon}
          resizeMode="contain"
        />
        <Text style={styles.text1}>Message your frien</Text>
        <Text style={styles.text2}>Share video or start a new convertion</Text>
      </View>
    </View>
  );
}
