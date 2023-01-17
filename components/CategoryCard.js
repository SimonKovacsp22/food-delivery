import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { s } from 'react-native-wind'

const CategoryCard = ({ImageUrl, title}) => {
  return (
    <TouchableOpacity style={s`relative mr-2`}>
    <Image source={{
        uri: ImageUrl
    }} style={s`h-20 w-20 rounded`} />
      <Text style={s`absolute bottom-1 left-1 text-white font-bold`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard