/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View} from 'react-native-ui-lib';

const App: () => React$Node = () => {
  return (
    <View flex bg-blue70 margin-20 padding-s1 row centerV spread>
      <View bg-red30 style={square} />
      <View bg-yellow30 style={square} />
      <View bg-green30 style={square} />
    </View>
  );
};

const square = {
  width: 75,
  height: 75,
};

export default App;
