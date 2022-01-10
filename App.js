/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'

//const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Tabs/>
        </NavigationContainer>
    )
}

export default App;*/


import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Hero } from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="ListHero" component={Tabs} />
                <Stack.Screen name="Hero" component={Hero} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export default App;
