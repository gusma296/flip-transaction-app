import React from 'react';
import Text from './Text';
import {Colors, width} from '../common';
import Content from './Content';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const Header = props => {
  return (
    <Content height={53} rowBetween backgroundColor={Colors.primary} row>
      <Content width={width / 3}>
        {props.onBackPress && (
          <IconButton
            onPress={props.onBackPress}
            iconName="chevron-left"
            iconSize={32}
            iconColor={Colors.white}
          />
        )}
      </Content>
      <Text size={20} color={Colors.white} bold>
        {props.title}
      </Text>
      <Content width={width / 3} />
    </Content>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.func,
};

export default Header;
