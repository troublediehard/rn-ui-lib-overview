/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {View, Text, Assets, Image, Constants} from 'react-native-ui-lib';
import { themeInit } from './src/themeInit';

themeInit();

const App: () => React$Node = () => {
  return (
    <View flex>
      <View abs>
        <Image assetName="wet" assetGroup="backgrounds" {...image} />
      </View>
      <View flex margin-screenOffset padding-s1 centerV >
        <Text center h1 blue10>RN UI LIB {Assets.emojis?.['100']}</Text>
        <Text center h1 blue10>RN UI LIB {Assets.emojis.pizza}</Text>
        <View row>
          <Image assetName="check"/>
          <Image assetName="checkSmall"/>
          <Image assetName="search"/>
        </View>
        <View row spread paddingT-40>
          <View bg-red30 style={square} />
          <View bg-yellow30 style={square} />
          <View bg-green30 style={square} />
        </View>
      </View>
    </View>
  );
};

const square = {
  width: 75,
  height: 75,
};

const image = {
  width: Constants.screenWidth,
  height: Constants.screenHeight,
};

export default App;
