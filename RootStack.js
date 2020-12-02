import React from "react";
import { SignInScreen, SignUpScreen } from "./screens/auth";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

const Root = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SignIn" component={SignInScreen} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default Root;
