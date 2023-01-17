import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { s } from 'react-native-wind'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView style={s`px-4 pt-2`} horizontal showsHorizontalScrollIndicator={false}>
      <CategoryCard ImageUrl={"https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450"} title="Testing1"/>
    </ScrollView>
  )
}

export default Categories