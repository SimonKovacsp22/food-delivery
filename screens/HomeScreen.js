import { View, Text, SafeAreaView,Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { s } from "react-native-wind";
import {  ChevronDownIcon, UserIcon,  MagnifyingGlassIcon, AdjustmentsVerticalIcon} from "react-native-heroicons/outline"
import { TextInput } from "react-native-web";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";




export default function HomeScreen() {

    const navigation = useNavigation();

   
    

     useEffect ( ()=> {
       
        navigation.setOptions({
            headerShown: false,
        })
    },[])
    return (
      <SafeAreaView style={s`bg-gray-100`}>
        <View style={s`bg-white pt-5`}>
              <View style={s`flex-row pb-3 items-center mx-4`}>
              <Image
                    source={
                        {uri:'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'}
                    } style={s`h-7 w-7 bg-gray-300 rounded-full p-4`} />
               <View style={s`ml-2 flex-1`}>
                        <Text style={s`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
                        <Text style={s`font-bold text-xl flex items-center`}>Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" style={s`mt-2`}/>
                        </Text>
                    
               </View>
               <UserIcon size={35} color="#00CCBB"/>
              
              </View>
              <View style={s`pb-2 mx-4 flex-row items-center`}>
              
                <View style={s`flex-row bg-gray-200 p-3 flex-1`}>
                <MagnifyingGlassIcon size={20} color="gray" style={s`mr-2`}  />
                <TextInput 
                placeholder="Restaurants and cuisines"
                keyboardType="default"/>
                </View>
                <AdjustmentsVerticalIcon size={20} color="#00CCBB" style={s`pl-2`}/>
              </View>
          </View>
          <ScrollView>
            <Categories/>
            <FeaturedRow 
            title="Featured"
            description="Paid placements from out partners."
            id="1" />
             <FeaturedRow 
            title="Featured"
            description="Everyone's been enjoying these juicy discounts!."
            id="2" />
             <FeaturedRow 
            title="Featured"
            description="Why not support your local restaurant tonight!."
            id="3" />
          </ScrollView>
      </SafeAreaView>
    );
  }