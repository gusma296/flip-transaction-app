import React from 'react';
import Text from './Text';
import {Colors} from '../common';
import Content from './Content';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const Header = props => {
  return (
    <Content height={53} rowBetween backgroundColor={Colors.primary} row>
      <Content width={40}>
        {props.onBackPress && (
          <IconButton
            onPress={props.onBackPress}
            iconName="chevron-left"
            iconSize={32}
            iconColor={Colors.white}
          />
        )}
      </Content>
      <Content>
        <Text size={20} color={Colors.white} bold>
          {props.title}
        </Text>
      </Content>
      <Content width={40} />
    </Content>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.func,
};

export default Header;
