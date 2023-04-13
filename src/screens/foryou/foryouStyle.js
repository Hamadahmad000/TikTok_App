import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {APP_FONT_SIZE} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {flex: 1},
  backgroundVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  screenDetils: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  musicIcon: {
    height: 15,
    width: 15,
    paddingRight: 10,
  },
  musicDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSide: {
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  EllipsIcon: {
    height: 40,
    width: 40,
  },
  rightSide: {
    width: '20%',
    alignItems: 'center',
    flexDirection: 'column',
    height: responsiveHeight(50),
    justifyContent: 'space-around',
  },
  rigsideIcons: {
    height: 40,
    width: 40,
  },
  rigsideProfileIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  FollowIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    bottom: -6,
    right: 10,
  },
  followIconText: {
    color: 'white',
  },
  userName: {
    color: 'white',
    fontSize: APP_FONT_SIZE.h4,
  },
  caption: {
    fontSize: APP_FONT_SIZE.h5,
    color: 'white',
    paddingVertical: 3,
  },
  musicName: {
    color: 'white',
    paddingLeft: 5,
  },
});

export default styles;
