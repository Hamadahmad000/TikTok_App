import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
  },
  input: {
    marginTop: 10,
  },
  settingType: {
    paddingHorizontal: '4%',
    paddingTop: 10,
  },
  settingTypeTitle: {fontSize: APP_FONT_SIZE.h5, marginBottom: 10},
  settingDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    alignItems: 'center',
  },
  settingNamediv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    height: 50,
    width: 50,
    backgroundColor: themeColors.musturd,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  settingIcon2: {
    height: 50,
    width: 50,
    backgroundColor: themeColors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  setting: {
    fontSize: APP_FONT_SIZE.h5,
    color: themeColors.black,
    marginLeft: 10,
  },
  devider: {
    height: 0.5,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: themeColors.fontGray,
  },
  leftIcon: {
    height: 20,
    width: 20,
    tintColor: 'white',
  },
  settingIcon3: {
    height: 50,
    width: 50,
    backgroundColor: themeColors.fbBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default styles;
