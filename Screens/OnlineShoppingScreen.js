import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("screen");
export default function OnlineShoppingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>ONLINE SHOPPING</Text>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/pics/shoppingcart.png")}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Add To Cart");
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text
          onPress={() => {
            navigation.navigate("Payment Successful");
          }}
          style={styles.footerSkip}
        >
          Skip
        </Text>

        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },

  description: {
    fontSize: 18,
    color: "#a3a3a3",
  },

  image: {
    height: 0.7 * width,
    width: 0.7 * width,
  },
  imageContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#8580d9",
    height: 60,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },

  footer: {
    flexDirection: "row-reverse",
  },

  footerSkip: {
    color: "#a3a3a3",
    fontSize: 18,
    alignSelf: "flex-end",
  },
});
