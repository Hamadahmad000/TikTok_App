import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';
import {APP_SIZE} from '../../utils/AppUtils';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: themeColors.white,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -5,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modal: {
    marginHorizontal: 0,
  },
  title: {
    alignSelf: 'center',
    paddingVertical: 5,
    fontWeight: '700',
    fontSize: APP_FONT_SIZE.h4,
    color: themeColors.black,
  },
  TopIcon: {
    height: 50,
    width: 50,
  },
  TopIconDiv: {
    alignItems: 'center',
    // marginHorizontal: 3,
    marginVertical: 10,
  },
  iconTItle: {
    fontSize: APP_FONT_SIZE.h5,
    width: 80,
    textAlign: 'center',
    paddingTop: 5,
  },
  Devider: {
    height: 0.3,
    backgroundColor: themeColors.lightGray,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  bottomDiv: {
    // flexDirection: 'row',
    width: APP_SIZE.screenWith,
  },
  cancelBtnText: {
    alignSelf: 'center',
    marginBottom: 25,
    fontSize: APP_FONT_SIZE.h4,
    fontWeight: '700',
    color: 'black',
  },
});

export default styles;
