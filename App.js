import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import EnglishScreen from './screens/english';
import HindiScreen from './screens/hindi';
import InternationalScreen from './screens/international';
import LocalScreen from './screens/localchannel';
import MoviesScreen from './screens/movies';
import MusicScreen from './screens/music';
import ReligiousScreen from './screens/religious';
import SportsScreen from './screens/sports';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="english" component={EnglishScreen} />
        <Stack.Screen name="hindi" component={HindiScreen} />
        <Stack.Screen name="international" component={InternationalScreen} />
        <Stack.Screen name="localchannel" component={LocalScreen} />
        <Stack.Screen name="movies" component={MoviesScreen} />
        <Stack.Screen name="music" component={MusicScreen} />
        <Stack.Screen name="religious" component={ReligiousScreen} />
        <Stack.Screen name="sports" component={SportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
