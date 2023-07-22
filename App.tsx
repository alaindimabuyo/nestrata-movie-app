/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomePage from './screens/HomePage';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './redux/index';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const NestrataTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#000',
    },
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={NestrataTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
