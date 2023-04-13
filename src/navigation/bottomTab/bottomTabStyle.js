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
    height: '10%',
    alignItems: 'center',
    width: APP_SIZE.screenWith,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  PostIconDiv: {},
  PostIcon: {
    height: 45,
    width: 45,
    marginBottom: 20,
  },
  PostIconDark: {
    height: 45,
    width: 45,
    marginBottom: 20,
  },
});

export default styles;
