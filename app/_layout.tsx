import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
