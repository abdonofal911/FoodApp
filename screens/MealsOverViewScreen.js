import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'

const MealsOverViewScreen = () => {
  return (
    <View style = {styles.Container}>
    <Text> MealsOverViewScreen </Text>
    </View>
  )
}

export default MealsOverViewScreen

const styles = StyleSheet.create({
    Container : {
        flex : 1 , 
        padding : 16 
    }
})
