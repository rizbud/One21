import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Feather'

import HomeScreen from '../Containers/HomeScreen'
import DetailScreen from '../Containers/DetailScreen'

// Styles
import { apply } from '../Themes/OsmiProvider'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" pt>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            title: 'Detail Property',
            headerTitleContainerStyle: { left: 50 },
            headerRight: () => <Icon name="heart" size={25} />,
            headerRightContainerStyle: apply('mx-5')
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
