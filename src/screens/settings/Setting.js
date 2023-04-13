import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './settingStyle';
import Header from '../../components/header/Header';
import {AppIcon} from '../../helper/iconHelper';
import {themeColors} from '../../constant/Theme';
import {useNavigation} from '@react-navigation/native';

export default function Setting() {
  const navigation = useNavigation();
  function HandleBack() {
    navigation.goBack();
  }
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: themeColors.white}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header
          onpressleft={HandleBack}
          Lefticons={require('../../assets/icons/back.png')}
          title={'Privacy and settings'}
          size={18}
        />
        <View style={styles.settingType}>
          <Text style={styles.settingTypeTitle}>ACCOUNT</Text>
          <TouchableOpacity style={styles.settingDiv}>
            <View style={styles.settingNamediv}>
              <Text style={styles.settingIcon}>
                <AppIcon name={'person-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Manage my account</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'lock-closed-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Privacy and safety</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'videocam-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Content preference</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'wallet-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Balance</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'share-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Share profile</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'qr-code-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>TikCode</Text>
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
        <View style={styles.devider}></View>
        <View style={styles.settingType}>
          <Text style={styles.settingTypeTitle}>GENERAL</Text>
          <TouchableOpacity style={styles.settingDiv}>
            <View style={styles.settingNamediv}>
              <Text style={styles.settingIcon}>
                <AppIcon name={'notifications-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Push notifications</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'language-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Language</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'umbrella-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Digital Wellbeing</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'body-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Accessibility</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'analytics-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Data saver</Text>
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
        <View style={styles.devider}></View>
        <View style={styles.settingType}>
          <Text style={styles.settingTypeTitle}>SUPPORT</Text>
          <TouchableOpacity style={styles.settingDiv}>
            <View style={styles.settingNamediv}>
              <Text style={styles.settingIcon}>
                <AppIcon name={'notifications-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Report a problem</Text>
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
              <Text style={styles.settingIcon}>
                <AppIcon name={'language-outline'} size={18} />
              </Text>
              <Text style={styles.setting}>Help center</Text>
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
    </ScrollView>
  );
}
