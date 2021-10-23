import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {Colors} from '../common';
import {IOS} from '../common';

const IconButton = props => {
  return (
    <Pressable
      android_ripple={{color: Colors.ripple_black, borderless: true}}
      style={({pressed}) => [
        props.style,
        {
          opacity: pressed && IOS ? 0.6 : 1,
        },
      ]}
      disabled={props.disabled}
      onPress={props.onPress}>
      <Icon
        style={{padding: 2}}
        color={props.iconColor}
        size={props.iconSize}
        name={props.iconName}
      />
    </Pressable>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
  disabled: PropTypes.bool,
};

export default IconButton;
