/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomePage from './screens/HomePage';
import Profile from './screens/Profile';
import Games from './screens/Games';
import Trending from './screens/Trending';
import MovieDetails from './screens/MovieDetails';
import CastDetails from './screens/CastDetails';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './redux/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const NestrataTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#000',
    },
  };

  const CustomTabBarBackground = () => <View style={styles.tabBarBackground} />;

  function HomeTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#985f39', // set the color for active tab
          tabBarInactiveTintColor: 'gray', // set the color for inactive tab
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'relative',
            backgroundColor: 'transparent', // Set transparent background for the tab bar
          },
          tabBarBackground: CustomTabBarBackground, // Use the custom tab bar backg
        }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return focused ? (
                <Icon name="home" size={size} color="#985f39" />
              ) : (
                <Icon name="home" size={size} color="#707071" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return focused ? (
                <Icon name="plus-square-o" size={size} color="#985f39" />
              ) : (
                <Icon name="plus-square-o" size={size} color="#707071" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Games"
          component={Games}
          options={{
            title: 'Games',
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return focused ? (
                <Icon name="gamepad" size={size} color="#985f39" />
              ) : (
                <Icon name="gamepad" size={size} color="#707071" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Trending"
          component={Trending}
          options={{
            title: 'Trending',
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return focused ? (
                <Icon name="fire" size={size} color="#985f39" />
              ) : (
                <Icon name="fire" size={size} color="#707071" />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={NestrataTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
            <Stack.Screen name="CastDetails" component={CastDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBarBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background for the tab bar
  },
});
export default App;
