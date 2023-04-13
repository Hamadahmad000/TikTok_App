import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './ShareBottomOptionStyle';

export default function ShareBottomOptions() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.BottomIconDiv}>
          <Image
            source={require('../../assets/icons/Report.png')}
            style={styles.BottomIcon}
          />
        </TouchableOpacity>
        <Text style={styles.iconTItle}>Report</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.BottomIconDiv}>
          <Image
            source={require('../../assets/icons/NoteInterested.png')}
            style={styles.BottomIcon}
          />
        </TouchableOpacity>
        <Text style={styles.iconTItle}>Not Interested</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.BottomIconDiv}>
          <Image
            source={require('../../assets/icons/save.png')}
            style={styles.BottomIcon}
          />
        </TouchableOpacity>
        <Text style={styles.iconTItle}>Save video</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.BottomIconDiv}>
          <Image
            source={require('../../assets/icons/Duet.png')}
            style={styles.BottomIcon}
          />
        </TouchableOpacity>
        <Text style={styles.iconTItle}>Duet</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.BottomIconDiv}>
          <Image
            source={require('../../assets/icons/React.png')}
            style={styles.BottomIcon}
          />
        </TouchableOpacity>
        <Text style={styles.iconTItle}>React</Text>
      </View>
    </View>
  );
}
