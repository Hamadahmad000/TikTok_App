import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const APP_SIZE = {
  screenWith: width,
  screenHeight: height,
};
