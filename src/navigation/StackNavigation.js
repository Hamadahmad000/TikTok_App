import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './bottomTab/BottomTab';
import EditProfile from '../screens/editProfile/EditProfile';
import DirectMessages from '../screens/directMessages/DirectMessage';
const Stack = createStackNavigator();
const customHeader = {
  headerShown: false,
};
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={customHeader}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={customHeader}
        />
        <Stack.Screen
          name="DirectMessages"
          component={DirectMessages}
          options={customHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
