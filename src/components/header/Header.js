import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './headerStyle';
import {themeColors} from '../../constant/Theme';

export default function Header({
  Lefticons,
  title,
  righticon,
  borderBottom,
  onpressleft,
  onpressright,
  size,
}) {
  const borderBottmStyle = {
    borderBottomWidth: 0.2,
    borderBottomColor: themeColors.fontGray,
  };
  function handleLeftIcon() {
    onpressleft ? onpressleft() : null;
  }
  function handleRightIcon() {
    onpressright ? onpressright() : null;
  }
  const headerIcons = {
    height: size,
    width: size,
    tintColor: themeColors.black,
  };
  return (
    <View style={[styles.container, borderBottom ? borderBottmStyle : {}]}>
      {Lefticons ? (
        <TouchableOpacity onPress={handleLeftIcon}>
          <Image source={Lefticons} style={headerIcons} resizeMode="contain" />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
      {title ? <Text style={styles.center}>{title}</Text> : <View></View>}
      {righticon ? (
        <TouchableOpacity onPress={handleRightIcon}>
          <Image source={righticon} style={headerIcons} resizeMode="contain" />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
}
