import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './splashStyle';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      goToHomeScreen();
    }, 2000);
  }, []);
  function goToHomeScreen() {
    navigation.navigate('BottomTab');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.Title}>TikTok</Text>
      <View style={styles.InfoDiv}>
        <Text style={styles.developBy}>Developed by</Text>
        <Text style={styles.name}>Hamad Mirza</Text>
      </View>
    </View>
  );
}
