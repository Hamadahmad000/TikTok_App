import {StyleSheet} from 'react-native';
import {themeColors} from '../../constant/Theme';
import {APP_SIZE} from '../../utils/AppUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 100,
    width: 100,
    // marginBottom: 100,
  },
  InfoDiv: {
    position: 'absolute',
    bottom: 30,
  },
  developBy: {
    color: themeColors.white,
  },
  name: {
    color: themeColors.white,
  },
  Title: {
    color: themeColors.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default styles;
