import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../Components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-contexxt";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const FavoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    FavoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View>
        <Text>
        You Have No Favorite Meals Yet. 
        </Text>
      </View>
    );
  } else {
    return <MealsList items={favoriteMeals} />;
  }
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContaiter : {
    flex: 1 , 
    justifyContent : 'center' , 
    alignItems : 'center'
  }, 
   text : {
    fontSize : 18 , fontWeight : 'bold' , 
    colo:'white'
   }
});
