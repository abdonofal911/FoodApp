import { Text, View } from 'react-native'

const MealDetailScreen = ({route }) => {
    const mealId = route.params.mealId
  return (
    <View>
      <Text>
      MealDetailScreen - ({mealId})
      </Text>
    </View>
  )
}

export default MealDetailScreen
