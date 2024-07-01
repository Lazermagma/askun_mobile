import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { WebView } from "react-native-webview";
const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://askunv2.netlify.app/#/cart" }} />
    </View>
  );
};

export default Page;
