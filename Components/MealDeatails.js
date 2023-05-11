import { Text, View, StyleSheet } from "react-native";

const MealDeatails = ({ Duration, Complexity, affordability }) => {
  return (
    <View>
      <Text style={styles.detailItem}>Duration : {Duration} min </Text>
      <Text style={styles.detailItem}>
        Complexity : {Complexity.toUpperCase()}
      </Text>
      <Text style={styles.detailItem}>
        Affordability : {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDeatails;
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
