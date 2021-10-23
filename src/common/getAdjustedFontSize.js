const {Dimensions} = require('react-native');

let width = Dimensions.get('screen').width;

export const getAdjustedFontSize = size => {
  return (parseInt(size) * width) / 400;
};
