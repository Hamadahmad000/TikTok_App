import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './editProfileStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';

export default function EditProfile() {
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Header
        Lefticons={require('../../assets/icons/back.png')}
        size={17}
        title={'Edit profile'}
        borderBottom={true}
        onpressleft={handleBack}
      />
      <View style={styles.changingContainer}>
        <TouchableOpacity style={styles.avatarContainer}>
          <View style={styles.avatarDiv}>
            <Image
              source={require('../../assets/img/user.jpg')}
              style={styles.avatar}
            />
            <Image
              source={require('../../assets/icons/camera.png')}
              style={styles.avatarIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.avatarTitle}>Change Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarContainer}>
          <View style={styles.avatarDiv}>
            <Text style={styles.avatar}></Text>
            <View>
              <Text style={styles.avatarTitle}>Change Video</Text>
            </View>
            <Image
              source={require('../../assets/icons/video.png')}
              style={styles.avatarIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userDetailfield}>
        <Text style={styles.settingName}>Name</Text>
        <View style={styles.GoForEdit}>
          <Text style={styles.editFieldName}>Hamad Mirza</Text>
          <Image
            source={require('../../assets/icons/skip.png')}
            style={styles.rightIcon}
          />
        </View>
      </View>
      <View style={styles.userDetailfield}>
        <Text style={styles.settingName}>Username</Text>
        <View style={styles.GoForEdit}>
          <Text style={styles.editFieldName}>Hamad_002</Text>
          <Image
            source={require('../../assets/icons/skip.png')}
            style={styles.rightIcon}
          />
        </View>
      </View>
      <View style={styles.Devider}></View>
      <View style={styles.userDetailfield}>
        <Text style={styles.settingName}>Bio</Text>
        <View style={styles.GoForEdit}>
          <Text style={styles.editFieldName}>Add a bio to your profile</Text>
          <Image
            source={require('../../assets/icons/skip.png')}
            style={styles.rightIcon}
          />
        </View>
      </View>
      <View style={styles.userDetailfield}>
        <Text style={styles.settingName}>Instagram</Text>
        <View style={styles.GoForEdit}>
          <Text style={styles.editFieldName}>
            Add a Instagram to your profile
          </Text>
          <Image
            source={require('../../assets/icons/skip.png')}
            style={styles.rightIcon}
          />
        </View>
      </View>
      <View style={styles.userDetailfield}>
        <Text style={styles.settingName}>Youtube</Text>
        <View style={styles.GoForEdit}>
          <Text style={styles.editFieldName}>
            Add a Youtube to your profile
          </Text>
          <Image
            source={require('../../assets/icons/skip.png')}
            style={styles.rightIcon}
          />
        </View>
      </View>
    </View>
  );
}
