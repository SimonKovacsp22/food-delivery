import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { s } from 'react-native-wind'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description,id}) => {
  return (
    <View>
    <View style={s`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={s`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color={"#00CCBB"}/>
    </View>
      <Text style={s`px-4 text-gray-400 `}>{description}</Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}
      style={s`px-2`}>
        <RestaurantCard
            id={123}
            imgUrl={`https://lonks.papareact.com/gn7`}
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address={"123 Main St"}
            short_description={"This is a Test description"}
            dishes={[]}
            long={20}
            lat={20}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow