import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './findFriendStye';
import Header from '../../components/header/Header';
import Input from '../../components/input/input';
import {AppIcon} from '../../helper/iconHelper';
import {themeColors} from '../../constant/Theme';
export default function FindFriends() {
  return (
    <View style={styles.container}>
      <Header
        Lefticons={require('../../assets/icons/back.png')}
        title={'Find friends'}
        righticon={require('../../assets/icons/Scanner.png')}
        size={18}
      />
      <View style={styles.input}>
        <Input
          icon={require('../../assets/icons/search.png')}
          iconSize={15}
          placeHolder={'search'}
          width={'90%'}
        />
      </View>
      <View style={styles.settingType}>
        <TouchableOpacity style={styles.settingDiv}>
          <View style={styles.settingNamediv}>
            <View style={styles.settingIcon}>
              <Image
                source={require('../../assets/icons/add-user.png')}
                resizeMode="contain"
                style={styles.leftIcon}
              />
            </View>
            <Text style={styles.setting}>Invite Friends</Text>
          </View>
          <Text>
            <AppIcon
              name={'chevron-forward-outline'}
              size={18}
              color={themeColors.black}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingDiv}>
          <View style={styles.settingNamediv}>
            <View style={styles.settingIcon2}>
              <Image
                source={require('../../assets/icons/call.png')}
                resizeMode="contain"
                style={styles.leftIcon}
              />
            </View>
            <Text style={styles.setting}>Find Contacts</Text>
          </View>
          <Text>
            <AppIcon
              name={'chevron-forward-outline'}
              size={18}
              color={themeColors.black}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingDiv}>
          <View style={styles.settingNamediv}>
            <View style={styles.settingIcon3}>
              <Image
                source={require('../../assets/icons/Vector.png')}
                resizeMode="contain"
                style={styles.leftIcon}
              />
            </View>
            <Text style={styles.setting}>Find Facebook Friend</Text>
          </View>
          <Text>
            <AppIcon
              name={'chevron-forward-outline'}
              size={18}
              color={themeColors.black}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
