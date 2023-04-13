import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {APP_SIZE} from '../../utils/AppUtils';

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  iconTItle: {
    fontSize: APP_FONT_SIZE.h5,
    width: 50,
    textAlign: 'center',
    paddingTop: 5,
  },
  BottomIcon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    tintColor: 'black',
  },
  BottomIconDiv: {
    backgroundColor: themeColors.lightGray,
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
