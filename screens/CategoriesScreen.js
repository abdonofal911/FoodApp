import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
  />
  );
};

export default CategoriesScreen;
