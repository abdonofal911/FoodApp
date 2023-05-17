import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        Duration={itemData.item.duration}
        Complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        id={itemData.item.id}
      />
    );
  };

  return (
    <View style={styles.Container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
  },
});
