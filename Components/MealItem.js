import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const MealItem = ({ title, imageUrl , Duration , Complexity ,  affordability}) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style = {styles.title}>{title}</Text>
        </View>
        <View>
        <Text>Duration : {Duration} </Text>
        <Text>Complexity : {Complexity}</Text>
        <Text>affordability : {affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
