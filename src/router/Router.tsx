import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Start from '../Screens/Start';
import Login from '../Screens/Login/Login';
import Home from '../Screens/User/Home/Home';
import {useSelector} from 'react-redux';
import {User} from '../Redux/@Types/User';
import Icon from './Utils/Icon';
import {Colors} from '../Styles/GeneralStyle';
import Profile from '../Screens/User/Profile/Profile';
import {Option, TabOptionsProps} from './@Types/Types';
import Style from './Styles/TabBar';
import Github from '../Screens/User/Github/Github';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Router: React.FC = () => {
  const Data = useSelector((state: User) => state);
  return (
    <Stack.Navigator initialRouteName={Data.loggedIn ? 'User' : 'Start'}>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="User"
        component={TabRouter}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const TabRouter: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor={Colors.NavigationActiveIcons}
      inactiveColor={Colors.NavigationInactiveIcons}
      barStyle={Style.tabBar}>
      <Tab.Screen
        name="UserHome"
        component={Home}
        options={({route}) => TabOptions({route, ...Options.Home})}
      />

      <Tab.Screen
        name="UserProfile"
        component={Profile}
        options={({route}) => TabOptions({route, ...Options.Profile})}
      />
      <Tab.Screen
        name="UserGitHub"
        component={Github}
        options={({route}) => TabOptions({route, ...Options.Github})}
      />
    </Tab.Navigator>
  );
};

const Options: TabOptionsProps = {
  Home: {title: 'Home', size: 20},
  Profile: {
    name: 'user',
    tabBarBadge: 3,
    title: 'Profile',
    IconFamily: 'AntDesign',
    size: 20,
  },
  Github: {
    title: 'Github',
    size: 20,
  },
};
const TabOptions: any = (props: Option) => {
  const {route, name, IconFamily, size} = props;
  if (route.name !== undefined) {
    const IconName = String(route.name).toLowerCase().replace('user', '');

    return {
      tabBarIcon: ({color}: any) => {
        return (
          <Icon
            name={name ? name : IconName}
            color={color}
            size={size}
            IconFamily={IconFamily}
          />
        );
      },
      headerShown: false,
      ...props,
    };
  }
  return null;
};
export default Router;
