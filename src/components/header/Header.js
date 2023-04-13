import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './headerStyle';
import {themeColors} from '../../constant/Theme';
import {AppIcon} from '../../helper/iconHelper';

export default function Header({
  Lefticons,
  title,
  righticon,
  borderBottom,
  onpressleft,
  onpressright,
  size,
  showOptioTag,
  showOption,

  onpressTag,
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
      {title ? (
        <View style={styles.tag}>
          <Text style={styles.center}>{title}</Text>
          {showOptioTag ? (
            <TouchableOpacity style={styles.tagIcon} onPress={onpressTag}>
              <AppIcon
                name={
                  showOption ? 'chevron-up-outline' : 'chevron-down-outline'
                }
                size={20}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      ) : (
        <View></View>
      )}
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
