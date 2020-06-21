/**
 * @flow
 * Created by Dima Portenko on 17.05.2020
 */
import {Typography, Colors, Spacings, Assets, ThemeManager} from 'react-native-ui-lib';


export const themeInit = () => {
  Colors.loadColors({
    pink: '#FF69B4',
    gold: '#FFD700',
  });

  Typography.loadTypographies({
    h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},
    h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
  });

  Spacings.loadSpacings({
    screenOffset: 30,
  })

  Assets.loadAssetsGroup('backgrounds', {
    wet: require('../assets/background.jpg'),
  });

  ThemeManager.setComponentTheme('Text', (props, context) => {

    return {
      h1: true,
      gold: true,
      h2: props.secondary,
      pink: props.secondary,
    };
  });
};
