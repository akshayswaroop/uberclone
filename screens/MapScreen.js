import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Map from '../Components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../Components/NavigateCard';
import RideOptionsCard from '../Components/RideOptionsCard';


const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/3`}>
        <Map></Map>
      </View>
      <View style={tw`h-2/3`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})