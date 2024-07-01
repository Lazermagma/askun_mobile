import { View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { WebView } from "react-native-webview";
const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://askunv2.netlify.app/#/" }} />
    </View>
  );
};

export default Page;
