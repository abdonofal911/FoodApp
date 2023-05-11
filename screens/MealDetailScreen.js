import { Image, Text, View } from "react-native";
import {MEALS} from '../data/dummy-data'
import MealDeatails from "../Components/MealDeatails";
const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal= MEALS.find((meal) => meal.id ===mealId)
  return (
    <View>
      <Image source={{uri:selectedMeal.imageUrl}} />
      <Text>{selectedMeal.title}</Text>
      <MealDeatails Duration={selectedMeal.duration} affordability={selectedMeal.affordability} Complexity={selectedMeal.complexity} />
      <Text>Igred</Text>
      <Text>steps</Text>
    </View>
  );
};

export default MealDetailScreen;
