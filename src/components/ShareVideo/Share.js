import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './shareVideoStyle';
import ShareOptionsData from '../../constant/ShareOptions';
import ShareBottomOptions from '../shareBottomOptions/ShareBottomOptions';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
export default function Share({isVisible, setIsVisible}) {
  function HandleCancel() {
    setIsVisible(false);
  }
  const shareOptions = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.TopIconDiv}>
        <Image source={item.icon} style={styles.TopIcon} />
        <Text style={styles.iconTItle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      backdropOpacity={0.4}
      animationIn={'bounce'}
      isVisible={isVisible}
      style={styles.modal}
      onBackButtonPress={HandleCancel}>
      <View style={styles.Container}>
        <Text style={styles.title}>Share To</Text>
        <View>
          <FlatList
            data={ShareOptionsData}
            renderItem={shareOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.Devider}></View>
        <View style={styles.bottomDiv}>
          <ShareBottomOptions />
        </View>
        <TouchableOpacity onPress={HandleCancel}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
