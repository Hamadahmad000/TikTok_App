import {StyleSheet} from 'react-native';
import {APP_SIZE} from '../../utils/AppUtils';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    width: APP_SIZE.screenWith,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    alignItems: 'center',
    paddingVertical: 15,

    backgroundColor: themeColors.white,
  },
  headerIcons: {
    height: 19,
    width: 19,
  },
  center: {
    fontSize: APP_FONT_SIZE.h4,
    fontWeight: '600',
    color: themeColors.black,
  },
});

export default styles;
