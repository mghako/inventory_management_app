import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsListScreen from '../screens/ProductsListScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={'ProductsList'} component={ProductsListScreen} />
    </MainStack.Navigator>
  );
}

export default MainStackNavigator