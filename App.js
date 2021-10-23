import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TransactionDetail, TransactionList} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Transaction List" component={TransactionList} />
        <Stack.Screen name="Transaction Detail" component={TransactionDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
