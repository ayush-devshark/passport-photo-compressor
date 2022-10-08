import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ImageEditor from '../screens/ImageEditor';

type RootStackParamList = {
  Home: undefined;
  ImageEditor: {imageUri: string};
};

const Stack = createStackNavigator<RootStackParamList>();

interface Props {}

const AppNavigator: FC<Props> = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImageEditor" component={ImageEditor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
