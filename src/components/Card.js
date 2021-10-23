import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Content, Text} from '../components';
import {cardStyles} from '../styles/components.style';
import Badge from './Badge';
import Touchable from './Touchable';
import {Colors, dateFormatter} from '../common';
Icon.loadFont();

const Card = props => {
  const styleBorder =
    props.status === 'SUCCESS' ? cardStyles.success : cardStyles.pending;
  return (
    <Touchable
      style={[cardStyles.container, styleBorder]}
      color={Colors.buttonColor}
      onPress={props.onPress}>
      <Content row rowBetween>
        <Content flex={1} marginRight={8}>
          <Content marginBottom={4} centerTop row>
            <Text marginRight={4} size={18} bold>
              {props.senderBank.toUpperCase()}
            </Text>
            <Icon name="arrow-right-thick" size={16} color={Colors.black} />
            <Text marginLeft={4} size={18} bold>
              {props.beneficiaryBank.toUpperCase()}
            </Text>
          </Content>
          <Text style={cardStyles.flex}>
            {props.beneficiaryName.toUpperCase()}
          </Text>
          <Content marginTop={4} row centerTop>
            <Text marginRight={4}>{props.amount}</Text>
            <Icon name="circle" size={8} color={Colors.black} />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={cardStyles.flex}
              marginLeft={4}>
              {dateFormatter(props.createdAt)}
            </Text>
          </Content>
        </Content>
        <Badge status={props.status} />
      </Content>
    </Touchable>
  );
};

Card.propTypes = {
  status: PropTypes.string,
  senderBank: PropTypes.string,
  beneficiaryBank: PropTypes.string,
  beneficiaryName: PropTypes.string,
  amount: PropTypes.string,
  createdAt: PropTypes.string,
  onPress: PropTypes.func,
};

export default Card;
