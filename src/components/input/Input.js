import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './inputStyle';

export default function Input({placeHolder, width, icon, iconSize}) {
  return (
    <View style={[styles.inputContainer, {width: width}]}>
      <Image
        source={icon}
        style={[styles.icon, {width: iconSize, height: iconSize}]}
      />
      <TextInput placeholder={placeHolder} style={[styles.input, {}]} />
    </View>
  );
}
