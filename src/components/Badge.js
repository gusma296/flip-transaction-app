import React from 'react';
import Text from './Text';
import Content from './Content';
import {badgeStyle} from '../styles/components.style';
import {Colors} from '../common';

const Badge = props => {
  const status = props.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';
  const styleBg =
    props.status === 'SUCCESS' ? badgeStyle.success : badgeStyle.pending;
  const styleText = props.status === 'SUCCESS' ? Colors.white : Colors.black;
  return (
    <Content style={styleBg}>
      <Text color={styleText} bold>
        {status}
      </Text>
    </Content>
  );
};

export default Badge;
