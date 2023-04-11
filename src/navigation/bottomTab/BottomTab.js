import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './bottomTabStyle';
import {themeColors} from '../../constant/Theme';

import ScreensIcons from '../../components/screenIcon/ScreensIcons';
import Home from '../../screens/home/Home';
import Discover from '../../screens/discover/Discover';
import NewPost from '../../screens/post/NewPost';
import Inbox from '../../screens/inbox/Inbox';
import Profile from '../../screens/me/Profile';

export default function BottomTab() {
  const [screen, setScreen] = useState(1);
  const navTheme = {
    backgroundColor: screen == 1 ? themeColors.black : themeColors.white,
  };
  return (
    <View style={styles.container}>
      {screen == 1 ? (
        <Home />
      ) : screen == 2 ? (
        <Discover />
      ) : screen == 3 ? (
        <NewPost />
      ) : screen == 4 ? (
        <Inbox />
      ) : (
        <Profile />
      )}

      <View style={[styles.NavStyle, navTheme]}>
        <ScreensIcons
          icons={
            screen == 1
              ? require('../../assets/icons/Home.png')
              : require('../../assets/icons/Home_2.png')
          }
          title={'Home'}
          screen={screen}
          onclick={() => setScreen(1)}
        />
        <ScreensIcons
          icons={require('../../assets/icons/search.png')}
          title={'Discover'}
          screen={screen}
          onclick={() => setScreen(2)}
        />
        <TouchableOpacity
          style={[
            styles.PostIconDiv,
            {
              backgroundColor:
                screen == 2 || screen == 3 || screen == 4 || screen == 5
                  ? 'black'
                  : 'white',
            },
          ]}
          onPress={() => setScreen(3)}>
          <Text
            style={[
              styles.PostIcon,
              {
                color:
                  screen == 2 || screen == 3 || screen == 4 || screen == 5
                    ? 'white'
                    : 'black',
              },
            ]}>
            +
          </Text>
        </TouchableOpacity>
        <ScreensIcons
          icons={require('../../assets/icons/messageStroke.png')}
          title={'Inbox'}
          screen={screen}
          onclick={() => setScreen(4)}
        />
        <ScreensIcons
          icons={require('../../assets/icons/User.png')}
          title={'Me'}
          screen={screen}
          onclick={() => setScreen(5)}
        />
      </View>
    </View>
  );
}
