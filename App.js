import React from "react";
import { LogBox } from "react-native";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  //disable yellow warning during development
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
