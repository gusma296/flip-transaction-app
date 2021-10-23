import React from 'react';
import {Content, Text, Touchable} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../common';
import {transactionStyles} from '../styles/transaction.style';

const SearchFilter = props => {
  return (
    <Content
      row
      rowBetween
      backgroundColor={Colors.white}
      marginHorizontal={12}
      marginTop={16}
      borderRadius={8}
      paddingVertical={16}
      marginBottom={12}
      padding={8}>
      <Content row flex={1} centerTop>
        <Icon name="search-outline" size={24} color={Colors.placeholder} />
        <TextInput
          placeholderTextColor={Colors.placeholder}
          placeholder="Cari nama, bank, atau nominal"
          style={transactionStyles.marginInput}
          value={props.searchValue}
          onChangeText={props.onChangeText}
        />
      </Content>
      <Touchable onPress={props.onOpenPicker}>
        <Content paddingLeft={12} backgroundColor={Colors.white} row centerTop>
          <Text bold size={16} color={Colors.primary}>
            {props.picked}
          </Text>
          <Icon name="chevron-down" size={28} color={Colors.primary} />
        </Content>
      </Touchable>
    </Content>
  );
};

SearchFilter.propTypes = {
  picked: PropTypes.string,
  onOpenPicker: PropTypes.func,
  searchValue: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default SearchFilter;
