import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello , Buddy!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            fetchDetails={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            enablePoweredByContainer={false}
            minLength={2}
            debounce={400}
            placeholder='Where to?'
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
              }));
              navigation.navigate("RideOptionsCard");
            }}
            onFail={(error) => console.error(error)}
            styles={
              {
                container: {
                  flex: 0, paddingTop: 20,
                  backgroundColor: "white",
                },
                textInput: {
                  fontSize: 18,
                  borderRadius: 0,
                  backgroundColor: "#DDDDDF"
                },
                textInputContainer: {
                  paddingHorizontal: 20,
                  paddingBottom: 0,
                }
              }}
            query={
              {
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
              }
            }
          />
        </View>
        <NavFavourites />
        <View style={tw`flex flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCard")}
            style={tw`flex flex-row justify-between bg-black w-24 rounded-full px-4 py-3`}>
            <Icon name='car' type='font-awesome' color="white" size={16}></Icon>
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row justify-between w-24 rounded-full px-4 py-3`}>
            <Icon name='fast-food-outline' type='ionicon' color="black" size={16}></Icon>
            <Text style={tw`text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})