import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

const Content = props => {
  const customStyle = style => [
    props.row ? {flexDirection: 'row'} : null,
    props.padding ? {padding: style.padding} : null,
    props.paddingLeft ? {paddingLeft: style.paddingLeft} : null,
    props.paddingRight ? {paddingRight: style.paddingRight} : null,
    props.paddingTop ? {paddingTop: style.paddingTop} : null,
    props.paddingBottom ? {paddingBottom: style.paddingBottom} : null,
    props.paddingVertical ? {paddingVertical: style.paddingVertical} : null,
    props.paddingHorizontal
      ? {paddingHorizontal: style.paddingHorizontal}
      : null,
    props.flex ? {flex: style.flex} : null,
    props.center ? {alignItems: 'center', justifyContent: 'center'} : null,
    props.centerTop ? {alignItems: 'center'} : null,
    props.rowCenter ? {justifyContent: 'center'} : null,
    props.rowBetween
      ? {justifyContent: 'space-between', alignItems: 'center'}
      : null,
    props.margin ? {margin: style.margin} : null,
    props.marginLeft ? {marginLeft: style.marginLeft} : null,
    props.marginRight ? {marginRight: style.marginRight} : null,
    props.marginTop ? {marginTop: style.marginTop} : null,
    props.marginBottom ? {marginBottom: style.marginBottom} : null,
    props.marginVertical ? {marginVertical: style.marginVertical} : null,
    props.marginHorizontal ? {marginHorizontal: style.marginHorizontal} : null,
    props.height ? {height: props.height} : null,
    props.width ? {width: props.width} : null,
    props.backgroundColor ? {backgroundColor: props.backgroundColor} : null,
    props.borderRadius ? {borderRadius: props.borderRadius} : null,
  ];
  return (
    <View style={[customStyle(props), props.style]} {...props}>
      {props.children}
    </View>
  );
};

Content.propTypes = {
  style: PropTypes.any,
  row: PropTypes.any,
  padding: PropTypes.number,
  flex: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  center: PropTypes.any,
  centerTop: PropTypes.any,
  margin: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  height: PropTypes.any,
  width: PropTypes.any,
  backgroundColor: PropTypes.string,
  rowCenter: PropTypes.bool,
  rowBetween: PropTypes.bool,
  borderRadius: PropTypes.number,
};

export default Content;
