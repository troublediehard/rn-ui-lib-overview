/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {View, Text} from 'react-native-ui-lib';
import { themeInit } from './src/themeInit';

themeInit();

const App: () => React$Node = () => {
  return (
    <View flex bg-blue70 margin-screenOffset padding-s1 centerV >
      <Text center h1 blue10>RN UI LIB</Text>
      <View row spread paddingT-40>
        <View bg-red30 style={square} />
        <View bg-yellow30 style={square} />
        <View bg-green30 style={square} />
      </View>
    </View>
  );
};

const square = {
  width: 75,
  height: 75,
};

export default App;
