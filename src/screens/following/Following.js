import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Video from 'react-native-video';
import styles from './followingStyle';
export default function Following({data}) {
  const {channelName, uri, caption, musicName, likes, comments, avatarUrl} =
    data;

  const discAnimateValue = useRef(new Animated.Value(0)).current;
  const disAnimation = {
    transform: [
      {
        rotate: discAnimateValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };
  useEffect(() => {
    Animated.loop(
      Animated.timing(discAnimateValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, [discAnimateValue]);

  return (
    <View style={styles.container}>
      <Video
        source={uri}
        style={styles.backgroundVideo}
        resizeMode={'cover'}
        repeat={true}
      />
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
          <TouchableOpacity style={styles.rightSizeIconDiv}>
            <Image
              source={require('../../assets/img/user.jpg')}
              style={styles.rigsideProfileIcon}
            />
            <Image
              source={require('../../assets/icons/plus.png')}
              style={styles.FollowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightSizeIconDiv}>
            <Image
              source={require('../../assets/icons/Like.png')}
              style={styles.rigsideIcons}
              resizeMode="contain"
            />
            <Text style={styles.rightSizeIconText}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightSizeIconDiv}>
            <Image
              source={require('../../assets/icons/comment.png')}
              style={styles.rigsideIcons}
              resizeMode="contain"
            />
            <Text style={styles.rightSizeIconText}>{comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightSizeIconDiv}>
            <Image
              source={require('../../assets/icons/share.png')}
              style={styles.rigsideIcons}
              resizeMode="contain"
            />
            <Text style={styles.rightSizeIconText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Animated.Image
              source={require('../../assets/icons/Ellipse.png')}
              style={[styles.EllipsIcon, disAnimation]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
