import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './homeStyle';
import Following from '../following/Following';
import Foryou from '../foryou/Foryou';
import {themeColors} from '../../constant/Theme';
import {hexToRgbA} from '../../helper/ThemeHelper';
export default function Home() {
  const [screen, setscreen] = useState(2);
  function followingScreen() {
    setscreen(1);
  }
  function ForyouScreen() {
    setscreen(2);
  }
  return (
    <View style={styles.container}>
      {screen == 1 ? <Following /> : <Foryou />}
      <View style={styles.changeScreen}>
        <Text
          style={[
            styles.followingScreen,
            {
              color:
                screen == 1 ? '#ffffff' : hexToRgbA(themeColors.fontGray, 0.8),
            },
          ]}
          onPress={followingScreen}>
          Following
        </Text>
        <Text
          style={[
            styles.foryouScreen,
            {
              color:
                screen == 2 ? '#ffffff' : hexToRgbA(themeColors.fontGray, 0.8),
            },
          ]}
          onPress={ForyouScreen}>
          Foryou
        </Text>
      </View>
    </View>
  );
}
