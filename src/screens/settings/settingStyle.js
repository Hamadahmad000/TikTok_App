import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';
import {APP_SIZE} from '../../utils/AppUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
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
  settingIcon: {},
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
});

export default styles;
