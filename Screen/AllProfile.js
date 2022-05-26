import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";

const AllProfile = ({ navigation }) => {
  const user = [
    {
      id: 46546464,
      displayName: "Abu Huraira",
      profileImage: require("../assets/download.jpg"),
      bio: "I am a student. Studing comsats",
      email: "ali@gmail.com",
    },
    {
      id: 46546465,
      displayName: "Abdullah",
      profileImage: require("../assets/download.jpg"),
      bio: "I am a property Dealer",
      email: "Abdullah@gmail.com",
    },
    {
      id: 46546466,
      displayName: "Saif ali Shah",
      profileImage: require("../assets/download.jpg"),
      bio: "I am a bussinessman",
      email: "saif@gmail.com",
    },
    {
      id: 46546467,
      displayName: "Umar Mumtaz ",
      profileImage: require("../assets/download.jpg"),
      bio: "I am a web Developer",
      email: "Umar@gmail.com",
    },
    {
      id: 46546468,
      displayName: "Ali Akbar",
      profileImage: require("../assets/download.jpg"),
      bio: "A professional worker",
      email: "ali@gmail.com",
    },
  ];
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>AllProfile</Text>
        {user.map((items) => {
          return (
            <>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    borderColor: "black",
                    borderWidth: 0.5,
                    padding: 20,
                    backgroundColor: "#fff",
                  }}
                >
                  <View style={{ marginRight: 20 }}>
                    <Image
                      style={{ width: 60, height: 60, borderRadius: 50 }}
                      source={items.profileImage}
                    />
                  </View>
                  <View>
                    <Text>{items.displayName}</Text>
                    <Text>{items.bio}</Text>
                    <Text>{items.email}</Text>
                  </View>
                </View>
                <Button
                  onPress={() => {
                    navigation.navigate("Profile", { id: items.id });
                  }}
                  title="Go to profiles"
                  color="#841584"
                  //   accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default AllProfile;

const styles = StyleSheet.create({});
