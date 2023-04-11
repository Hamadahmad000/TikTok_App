import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  ScreenButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenIcon: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    tintColor: themeColors.white,
  },
  iconTitle: {
    fontSize: APP_FONT_SIZE.h6,
    marginTop: responsiveHeight(0.3),
  },
});

export default styles;
