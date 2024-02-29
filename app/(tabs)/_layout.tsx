import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

type Props = {};

const enum TabsTitles {
  Home = "Home",
  Services = "Services",
  Activity = "Activity",
  Account = "Account",
}

const TabsLayout = (props: Props) => {
  return (
    <Tabs>
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
          title: TabsTitles.Account,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
