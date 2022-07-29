import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  //route navigator
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Mingle Screen"
        onPress={() => {
          navigation.navigate("Mingle");
        }}
      />
    </View>
  );
};

export default HomeScreen;
