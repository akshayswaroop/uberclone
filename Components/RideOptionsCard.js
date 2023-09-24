import { Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from "react-redux"
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: "Uber-X-123",
    title: "Uber Go",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  }, {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber X",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  }
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, SetSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[tw`absolute top-3 left-5 z-50 p-3 rounded-full`]}>
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => SetSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${item?.id === selected?.id && "bg-gray-200"
              }`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>{
                travelTimeInformation?.duration.text
              } Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>{
              (travelTimeInformation?.duration.value) * 15 * item.multiplier / 100}</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3
          ${!selected && "bg-gray-400"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})