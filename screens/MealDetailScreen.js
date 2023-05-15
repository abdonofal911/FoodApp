import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootContainer} >
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.ListOuterContainer}>
      <View style={styles.ListContainer}>
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
      </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom : 32
  },
  image: {
    width: "100%",
    height: 250,
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
  ListContainer : {
    width : '80%'
  }, 
  ListOuterContainer:{
    alignItems : 'center'
  }
  
});
