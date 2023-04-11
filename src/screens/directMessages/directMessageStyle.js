import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';
import {APP_SIZE} from '../../utils/AppUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
  },
  messages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messagesIcon: {
    height: 70,
    width: 70,
    marginBottom: 20,
  },
  text1: {
    fontWeight: '600',
    fontSize: APP_FONT_SIZE.h4,

    color: themeColors.black,
    marginBottom: 10,
  },
  text2: {
    fontSize: APP_FONT_SIZE.h5,
  },
});

export default styles;
