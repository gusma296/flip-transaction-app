import React from 'react';
import {Text as PureText} from 'react-native';
import {getAdjustedFontSize, Colors} from '../common';
import PropTypes from 'prop-types';

const Text = props => {
  const customStyle = style => [
    props.size ? {fontSize: getAdjustedFontSize(style.size)} : null,
    props.color ? {color: style.color} : {color: Colors.black},
    props.lineHeight ? {lineHeight: style.lineHeight} : null,
    props.marginTop ? {marginTop: style.marginTop} : null,
    props.marginBottom ? {marginBottom: style.marginBottom} : null,
    props.marginLeft ? {marginLeft: style.marginLeft} : null,
    props.marginRight ? {marginRight: style.marginRight} : null,
    props.center ? {textAlign: 'center'} : null,
    props.right ? {textAlign: 'right'} : null,
    props.underline ? {textDecorationLine: 'underline'} : null,
    props.letterSpacing ? {letterSpacing: style.letterSpacing} : null,
    props.opacity ? {opacity: style.opacity} : null,
  ];

  const styleText = {
    fontFamily: props.bold ? 'Lato-Bold' : 'Lato-Regular',
  };

  return (
    <PureText
      ellipsizeMode={props.ellipsizeMode}
      numberOfLines={props.numberOfLines}
      onPress={props.onPress}
      style={[customStyle(props), styleText, props.style]}>
      {props.children}
    </PureText>
  );
};

Text.propTypes = {
  onPress: PropTypes.func,
  ellipsizeMode: PropTypes.string,
  numberOfLines: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  center: PropTypes.any,
  right: PropTypes.any,
  underline: PropTypes.any,
  letterSpacing: PropTypes.number,
  style: PropTypes.object,
  bigText: PropTypes.any,
  bold: PropTypes.any,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  opacity: PropTypes.number,
};

export default Text;
