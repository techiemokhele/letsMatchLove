import React from "react";
import { LogBox, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  //disable yellow warning during development
  LogBox.ignoreAllLogs();

  return (
    <TailwindProvider>
      <View className="flex-1 justify-center items-center bg-black">
        <Text className="text-white">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
