import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import styles from './foryouStyle';
export default function Foryou({data}) {
  const {channelName, uri, caption, musicName, likes, comments, avatarUrl} =
    data;
  console.log(channelName, uri, caption, musicName, likes, comments, avatarUrl);
  return (
    <View style={styles.container}>
      <Video source={uri} style={styles.backgroundVideo} resizeMode={'cover'} />
      <View style={styles.screenDetils}>
        <View style={styles.leftSide}>
          <Text style={styles.userName}>{channelName}</Text>
          <Text style={styles.caption}>{caption}</Text>
          <View style={styles.musicDiv}>
            <Image
              source={require('../../assets/icons/Music.png')}
              style={styles.musicIcon}
            />
            <Text style={styles.musicName}>{musicName}</Text>
          </View>
        </View>
        <View style={styles.rightSide}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/img/user.jpg')}
              style={styles.rigsideProfileIcon}
            />
            <Image
              source={require('../../assets/icons/plus.png')}
              style={styles.FollowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/Like.png')}
              style={styles.rigsideIcons}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/comment.png')}
              style={styles.rigsideIcons}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/share.png')}
              style={styles.rigsideIcons}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/Ellipse.png')}
              style={styles.EllipsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
