import {StyleSheet} from 'react-native';
import {APP_SIZE} from '../../utils/AppUtils';
import {APP_FONT_SIZE} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  changeScreen: {
    flexDirection: 'row',
    width: APP_SIZE.screenWith / 2,
    alignSelf: 'center',
    justifyContent: 'space-around',

    position: 'absolute',
    bottom: APP_SIZE.screenHeight - APP_SIZE.screenHeight / 2 / 3,
  },
  followingScreen: {
    fontSize: APP_FONT_SIZE.h4,
    fontWeight: '700',
  },
  foryouScreen: {
    fontSize: APP_FONT_SIZE.h4,
    fontWeight: '700',
  },
});

export default styles;
