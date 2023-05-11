import { Image, Text, View , StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }}style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <Text>ingredients</Text>
      {selectedMeal.ingredients.map(ingredients=><Text key={ingredients}>{ingredients}</Text>)}
      <Text>steps</Text>
      {selectedMeal.steps.map(steps=><Text key={steps}>{steps}</Text>)}

    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
})
