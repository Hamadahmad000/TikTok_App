import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './screenIconsStyle';

export default function ScreensIcons({
  icons,
  title,
  onclick,

  screen,
}) {
  return (
    <TouchableOpacity
      style={styles.ScreenButton}
      onPress={() => {
        onclick ? onclick() : null;
      }}>
      <Image
        source={icons}
        style={[
          styles.screenIcon,
          {tintColor: screen == 1 ? 'white' : 'black'},
        ]}
      />
      {title ? (
        <Text
          style={[styles.iconTitle, {color: screen == 1 ? 'white' : 'black'}]}>
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
}
