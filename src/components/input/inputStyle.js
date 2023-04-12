import {StyleSheet} from 'react-native';
import {themeColors} from '../../constant/Theme';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',

    paddingVertical: 0,
    paddingHorizontal: 10,

    width: '90%',
    backgroundColor: themeColors.lightGray,
  },
  input: {
    flex: 1,

    paddingHorizontal: 10,
    marginVertical: 0,
    padding: 0,
    paddingVertical: 2,
  },
});

export default styles;
