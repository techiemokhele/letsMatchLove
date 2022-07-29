import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screen components
import HomeScreen from "./screens/HomeScreen";
import MingleScreen from "./screens/MingleScreen";
import SignInScreen from "./screens/Auth/SignInScreen";

//create navigator stack
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const user = false;

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Mingle" component={MingleScreen} />
        </>
      ) : (
        <Stack.Screen name="Sign-in" component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
