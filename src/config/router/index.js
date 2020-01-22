import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../../components/atoms/Colors';
import {fonts} from '../../components/atoms/Fonts';
import IconBack from '../../components/atoms/IconBack';
import {
  Home,
  More,
  Notification,
  ScanOption,
  SucceedEnter,
  TypeOption,
} from '../../containers/pages';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'PresenQ',
        headerStyle: {
          elevation: 0,
          backgroundColor: colors.schema,
        },
      }),
    },
    ScanOption: {
      screen: ScanOption,
      navigationOptions: ({navigation}) => ({
        title: 'Masuk Sesi',
        headerLeft: (
          <IconBack
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        ),
      }),
    },
    TypeOption: {
      screen: TypeOption,
      navigationOptions: ({navigation}) => ({
        title: 'Masuk Sesi',
        headerLeft: (
          <IconBack
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        ),
      }),
    },
    SucceedEnter: {
      screen: SucceedEnter,
      navigationOptions: ({navigation}) => ({
        title: 'Konfirmasi Sesi',
        // headerLeft: (
        //   <IconBack
        //     onPress={() => {
        //       navigation.navigate('Home');
        //     }}
        //   />
        // ),
      }),
    },
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: () => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.schema,
      },
      headerTitleStyle: fonts.titleBar,
    }),
  },
);

const NotificationStack = createStackNavigator(
  {
    Notification: {
      screen: Notification,
      navigationOptions: () => ({
        title: 'Notifikasi',
      }),
    },
  },
  {
    initialRouteName: 'Notification',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: () => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.schema,
      },
      headerTitleStyle: fonts.titleBar,
    }),
  },
);

const MoreStack = createStackNavigator(
  {
    More: {
      screen: More,
      navigationOptions: () => ({
        title: 'Lainnya',
      }),
    },
  },
  {
    initialRouteName: 'More',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: () => ({
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.schema,
      },
      headerTitleStyle: fonts.titleBar,
    }),
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    NotificationStack,
    MoreStack,
  },
  {initialRouteName: 'HomeStack'},
);

export default createAppContainer(Router);
