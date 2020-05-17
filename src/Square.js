/**
 * @flow
 * Created by Dima Portenko on 17.05.2020
 */
import React from 'react';
import {View} from 'react-native-ui-lib';

type Props = {
  size: number
}

export const Square = ({ size }: Props) => {
  return <View bg-red30 style={{ width: size, height: size }} />;
};
