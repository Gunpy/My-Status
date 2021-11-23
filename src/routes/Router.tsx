import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Component
import Main from '../screens/Main';
import ImageScreen from '../screens/ImageScreen';
import NavBar from '../components/NavBar';

const Router = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen
          name="imageScreen"
          component={ImageScreen}
          // options={{
          //   header: props => <NavBar title="STREAM" {...props} />,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
