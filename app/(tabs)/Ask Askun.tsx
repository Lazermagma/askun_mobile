import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://askunv2.netlify.app/#/ChatGemini" }} />
    </View>
  );
};

export default Page;
