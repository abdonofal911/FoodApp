import { Image, Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredients) => (
        <Text key={ingredients}>{ingredients}</Text>
      ))}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>steps</Text>
      </View>

      {selectedMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 250,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
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
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
