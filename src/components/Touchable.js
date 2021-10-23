import React from 'react';
import {Pressable, View} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, IOS} from '../common';

const Touchable = props => {
  const buttonStyle = {
    opacity: IOS ? 0.7 : 1,
  };
  return (
    <Pressable
      disabled={props.disabled}
      style={props.style}
      android_ripple={{
        color: props.color ? props.color : Colors.ripple,
        borderless: props.borderless,
        radius: props.radius,
      }}
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      {...props}>
      {({pressed}) => (
        <View style={pressed && buttonStyle}>{props.children}</View>
      )}
    </Pressable>
  );
};

Touchable.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.any,
  disabled: PropTypes.bool,
  width: PropTypes.any,
  color: PropTypes.any,
  borderless: PropTypes.bool,
  radius: PropTypes.number,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

export default Touchable;
