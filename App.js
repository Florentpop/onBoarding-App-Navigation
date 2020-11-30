import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddToCartScreen from "./Screens/AddToCartScreen";
import OnlineShoppingScreen from "./Screens/OnlineShoppingScreen";
import PaymentSuccessfulScreen from "./Screens/PaymentSuccessfulScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Online Shopping"
        screenOptions={{
          headerStyle: { backgroundColor: "#aba6ff" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Online Shopping" component={OnlineShoppingScreen} />
        <Stack.Screen name="Add To Cart" component={AddToCartScreen} />
        <Stack.Screen name="Payment Successful" component={PaymentSuccessfulScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
