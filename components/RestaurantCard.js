import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-svg'
import { s } from 'react-native-wind'
import {  StarIcon } from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/outline'

const RestaurantCard = ({
    id,imgUrl,
    title,rating,genre,address,short_description,dishes,long,lat
}) => {
  return (
    <TouchableOpacity style={s`bg-white ml-2 shadow mt-3`}>

    <Image source={{
        uri: imgUrl
    }} style={s`h-36 w-64 rounded-sm`} />
      <View style={s`px-3 pb-4`}>
      <Text style={s`font-bold text-lg pt-2`}>{title}</Text>
      <View style={s`flex-row`}>
        <StarIcon color={"green"} opacity ={0.5} size={22} />
        <Text style={s`px-2 text-gray-500`}>
            <Text style={s`text-xs text-green-500`}>{rating} </Text> &#x2022; {genre}
        </Text>
      </View>
      <View style={s`flex-row`}>
        <MapPinIcon color={"gray"} size={22}/>
        <Text style={s`text-xs text-gray-500 px-2`}>Nearby &#x2022; {address}</Text>
      </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard