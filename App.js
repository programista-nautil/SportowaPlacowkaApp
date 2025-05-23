import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import ScheduleScreen from './screens/ScheduleScreen'
import PricingScreen from './screens/PricingScreen'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Strona główna' }} />
				<Stack.Screen name='Schedule' component={ScheduleScreen} options={{ title: 'Grafik' }} />
				<Stack.Screen name='Pricing' component={PricingScreen} options={{ title: 'Cennik' }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
