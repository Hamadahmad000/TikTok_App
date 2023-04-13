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
    tintColor: themeColors.fontGray,
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
  OptionContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    padding: 13,
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: themeColors.lightGray,
  },
  option: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftText: {
    paddingLeft: 10,
    fontSize: APP_FONT_SIZE.h5,
    color: themeColors.black,
    fontWeight: '600',
  },
});

export default styles;
