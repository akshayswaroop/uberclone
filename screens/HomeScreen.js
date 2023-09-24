import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from "../Components/NavOptions"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../Components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100, height: 100, resizeMode: 'contain'

          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          enablePoweredByContainer={false}
          minLength={2}
          debounce={400}
          placeholder='Where From?'
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }));
            dispatch(setDestination(null));
          }}
          onFail={(error) => console.error(error)}
          styles={
            {
              container: { flex: 0 },
              textInput: {
                fontSize: 18,
              }
            }}
          query={
            {
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }
          }
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({})