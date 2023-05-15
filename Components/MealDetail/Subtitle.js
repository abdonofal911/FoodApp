import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;


const styles = StyleSheet.create({ 
    subTitle: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      color: "#e2b497",
    },
    subTitleContainer: {
      borderBottomColor: "#e2b497",
      borderBottomWidth: 2,
      padding: 6,
      marginHorizontal: 12,
      marginVertical: 4,
    },
  });
  