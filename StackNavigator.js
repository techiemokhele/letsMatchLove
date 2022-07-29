import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screen components
import HomeScreen from "./screens/HomeScreen";
import MingleScreen from "./screens/MingleScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  //create navigator stack

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Mingle" component={MingleScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
