import {View, Text, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import styles from './inboxStyle';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {AppIcon} from '../../helper/iconHelper';

export default function Inbox() {
  const [showOption, setshowOption] = useState(false);
  const navigation = useNavigation();
  function HandleNavigate() {
    navigation.navigate('DirectMessages');
  }
  function HandleTagOption() {
    setshowOption(!showOption);
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <Header
        size={20}
        title={'All acivity'}
        righticon={require('../../assets/icons/MessageIcon.png')}
        onpressright={HandleNavigate}
        showOption={showOption}
        setshowOption={setshowOption}
        showOptioTag={true}
        onpressTag={HandleTagOption}
      />
      <View style={styles.messages}>
        <Image
          source={require('../../assets/icons/messageStroke.png')}
          style={styles.messagesIcon}
          resizeMode="contain"
        />
        <Text style={styles.text1}>Notification are't available</Text>
        <Text style={styles.text2}>
          Notification about your account will appear here
        </Text>
      </View>
      {showOption ? (
        <View style={styles.OptionContainer}>
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <AppIcon color={'black'} name={'bookmark-outline'} size={25} />
              <Text style={styles.leftText}>All acivity</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <AppIcon color={'black'} name={'heart-outline'} size={25} />
              <Text style={styles.leftText}>Likes</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <AppIcon
                color={'black'}
                name={'chatbubble-ellipses-outline'}
                size={25}
              />
              <Text style={styles.leftText}>Comments</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <AppIcon color={'black'} name={'at-outline'} size={25} />
              <Text style={styles.leftText}>Mention</Text>
            </View>
          </View>
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <AppIcon color={'black'} name={'person-outline'} size={25} />
              <Text style={styles.leftText}>Followers</Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}
