import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const enum TabsTitles {
  Home = "Home",
  Services = "Services",
  Activity = "Activity",
  Account = "Account",
}

const TabsLayout = (props: Props) => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "home/index") {
            return <Ionicons name={"home"} size={size} color={color} />;
          } else if (route.name === "services/index") {
            return <Ionicons name={"grid-sharp"} size={size} color={color} />;
          } else if (route.name === "activity/index") {
            return <Ionicons name={"list"} size={size} color={color} />;
          } else if (route.name === "account/index") {
            return <Ionicons name={"person-sharp"} size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen
        name="home/index"
        options={{ headerTitle: TabsTitles.Home, title: TabsTitles.Home }}
      />
      <Tabs.Screen
        name="services/index"
        options={{
          headerTitle: TabsTitles.Services,
          title: TabsTitles.Services,
        }}
      />
      <Tabs.Screen
        name="activity/index"
        options={{
          headerTitle: TabsTitles.Activity,
          title: TabsTitles.Activity,
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          headerTitle: TabsTitles.Services,
          title: TabsTitles.Services,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
