import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';
import {APP_SIZE} from '../../utils/AppUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
  },
  changingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 40,
  },
  avatar: {
    height: 78,
    width: 78,
    borderRadius: 50,
    backgroundColor: themeColors.fontGray,
    opacity: 0.5,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatarTitle: {
    color: themeColors.black,
    paddingTop: 10,
  },
  avatarIcon: {
    position: 'absolute',
    top: '38%',
    alignSelf: 'center',
    height: 25,
    width: 25,
  },
  avatarDiv: {
    height: 78,
  },
  userDetailfield: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  GoForEdit: {flexDirection: 'row', alignItems: 'center'},
  rightIcon: {
    height: 12,
    width: 12,
    marginLeft: 10,
  },
  settingName: {
    fontSize: APP_FONT_SIZE.h4,
    color: themeColors.black,
    fontWeight: '600',
  },
  editFieldName: {
    fontSize: APP_FONT_SIZE.h5,
  },
  Devider: {
    height: 0.3,
    backgroundColor: themeColors.black,
    width: '85%',
    alignSelf: 'center',
  },
});

export default styles;
