import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../Components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-contexxt";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const FavoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContaiter}>
        <Text style={styles.text}>Opps, You Have No Favorite Meals Yet.</Text>
      </View>
    );
  } else {
    return <MealsList items={favoriteMeals} />;
  }
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContaiter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
