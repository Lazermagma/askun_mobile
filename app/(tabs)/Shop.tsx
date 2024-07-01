import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Properties</Text> */}
      <WebView source={{ uri: "https://askunv2.netlify.app/#/shop-grid" }} />
    </View>
  );
};

export default Page;
