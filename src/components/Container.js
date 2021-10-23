import React from 'react';
import {StatusBar} from 'react-native';
import {Colors} from '../common';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../styles/components.style';

const Container = props => {
  return (
    <SafeAreaView edges={['top']} style={containerStyle.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      {props.children}
    </SafeAreaView>
  );
};

export default Container;
