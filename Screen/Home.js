import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        onPress={() => {
          navigation.navigate("AllProfile");
        }}
        title="Go to profiles"
        color="#841584"
        //   accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
