import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import styles from './profileStyle';
import {userPublicVideos} from '../../constant/ProfileConstant';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const editProfile = () => {
    navigation.navigate('EditProfile');
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Header
          Lefticons={require('../../assets/icons/add-user.png')}
          righticon={require('../../assets/icons/more.png')}
          title={'Hamad Mirza'}
          borderBottom={true}
          size={20}
        />
        <View style={styles.userDetailsDiv}>
          <View style={styles.profilePicDiv}>
            <Image
              source={require('../../assets/img/user.jpg')}
              style={styles.profilePic}
            />
            <Text style={styles.userName}>@Hamad_002</Text>
          </View>
          <View style={styles.userPopularity}>
            <View style={styles.userSubDetail}>
              <Text style={styles.Numbers}>14</Text>
              <Text style={styles.NumberTitle}>Following</Text>
            </View>
            <View style={styles.userSubDetail}>
              <Text style={styles.Numbers}>8M</Text>
              <Text style={styles.NumberTitle}>Followers</Text>
            </View>
            <View style={styles.userSubDetail}>
              <Text style={styles.Numbers}>128M</Text>
              <Text style={styles.NumberTitle}>Likes</Text>
            </View>
          </View>
          <View style={styles.editProfileDiv}>
            <TouchableOpacity
              style={styles.editProfileButton}
              onPress={editProfile}>
              <Text style={styles.editButtonText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookmarkBtn}>
              <Image
                source={require('../../assets/icons/bookmark-white.png')}
                style={styles.bookmarkBtnIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.editBio}>Tap to edit bio</Text>
          <View style={styles.bottomScreen}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Tabs.png')}
                style={styles.BottomIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/private.png')}
                style={styles.privateIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userPublicVideos}>
          {userPublicVideos.map((ls, index) => {
            return (
              <TouchableOpacity key={index} style={styles.publicVideosDiv}>
                <Image source={{uri: ls.url}} style={styles.publicVideos} />
                <View style={styles.totalView}>
                  <Image
                    source={require('../../assets/icons/play-button.png')}
                    style={styles.videoIcon}
                  />
                  <Text style={{color: 'white'}}>{`${Math.floor(
                    Math.random() * 2000,
                  )}K`}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
