import { Text, View, StyleSheet } from "react-native";

function MealDetails({
    duration,
    complexity,
    affordability,
    style,
    textStyle,
  }) {
    return (
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text >
          {complexity}
        </Text>
        <Text>
          {affordability}
        </Text>
      </View>
    );
  }

export default MealDetails;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
