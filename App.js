import React from 'react';
import {ScrollView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductWrapper from './Component/ProductWrapper';
import UserFile from './Component/UserFile';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper}/>
        <Stack.Screen name="userdata" component={UserFile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
