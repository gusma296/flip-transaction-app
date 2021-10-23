import React from 'react';
import RnModal from 'react-native-modal';
import Content from './Content';
import PropTypes from 'prop-types';
import {Colors} from '../common';
import Touchable from './Touchable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from './Text';

const data = [
  'URUTKAN',
  'Nama A-Z',
  'Nama Z-A',
  'Tanggal Terbaru',
  'Tanggal Terlama',
];

const ModalPicker = props => {
  return (
    <RnModal
      isVisible={props.visible}
      onBackButtonPress={props.onClose}
      onBackdropPress={props.onClose}>
      <Content
        paddingVertical={16}
        borderRadius={8}
        backgroundColor={Colors.white}>
        {data.map((item, index) => (
          <Touchable
            color={Colors.buttonColor}
            onPress={() => props.onPicked(item)}
            key={index}>
            <Content padding={12} row centerTop>
              <Icon
                name={
                  props.picked === item ? 'radiobox-marked' : 'radiobox-blank'
                }
                size={20}
                color={Colors.primary}
              />
              <Text marginLeft={8} size={16}>
                {item}
              </Text>
            </Content>
          </Touchable>
        ))}
      </Content>
    </RnModal>
  );
};

ModalPicker.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  picked: PropTypes.string,
  onPicked: PropTypes.func,
};

export default ModalPicker;
