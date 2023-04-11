import {StyleSheet} from 'react-native';
import {APP_SIZE} from '../../utils/AppUtils';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NavStyle: {
    height: responsiveWidth(16),
    alignItems: 'center',
    width: APP_SIZE.screenWith,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  PostIconDiv: {
    backgroundColor: '#ffffff',

    width: responsiveWidth(10),
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    paddingVertical: 0,
    alignItems: 'center',
  },
  PostIcon: {
    fontSize: APP_FONT_SIZE.h2,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 0,
    paddingVertical: 0,
  },
});

export default styles;
