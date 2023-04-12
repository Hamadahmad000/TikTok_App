import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, themeColors} from '../../constant/Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {APP_SIZE} from '../../utils/AppUtils';
const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.white,
    flex: 1,
  },
  userDetailsDiv: {},
  profilePic: {
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    alignSelf: 'center',
    borderRadius: responsiveWidth(15),
    marginTop: responsiveHeight(3),
  },
  profilePicDiv: {
    alignItems: 'center',
  },
  userName: {
    fontSize: APP_FONT_SIZE.h4,
    marginTop: 5,
    fontWeight: 'bold',
    color: themeColors.black,
  },
  userPopularity: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    width: '60%',
    alignSelf: 'center',
    marginTop: 18,
  },
  userSubDetail: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Numbers: {
    fontSize: APP_FONT_SIZE.h4,
    fontWeight: '700',
    color: themeColors.black,
  },
  NumberTitle: {
    fontSize: APP_FONT_SIZE.h5,
  },
  editProfileDiv: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  bookmarkBtnIcon: {
    height: 22,
    width: 22,
    marginHorizontal: 10,
    borderWidth: 0.1,
  },
  editProfileButton: {
    borderWidth: 0.2,
    borderColor: themeColors.fontGray,
    marginRight: 10,
  },
  editButtonText: {
    paddingHorizontal: 45,
    paddingVertical: 10,
    fontSize: APP_FONT_SIZE.h5,
    fontWeight: '700',
    color: themeColors.black,
  },
  bookmarkBtn: {
    borderWidth: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBio: {
    alignSelf: 'center',
    marginVertical: 15,
    fontSize: APP_FONT_SIZE.h5,
  },
  bottomScreen: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.2,
    paddingVertical: 10,
    borderBottomWidth: 0.2,
    borderColor: themeColors.fontGray,
  },
  BottomIcon: {
    height: 17,
    width: 17,
  },
  privateIcon: {
    height: 20,
    width: 20,
  },
  userPublicVideos: {
    height: '100%',
    width: APP_SIZE.screenWith,
    flexDirection: 'row',
  },

  publicVideos: {height: '100%', width: APP_SIZE.screenWith / 3},
  publicVideosDiv: {
    height: '25%',
  },
  videoIcon: {
    height: 10,
    width: 10,
    marginRight: 5,
    tintColor: 'white',
  },
  totalView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
});

export default styles;
