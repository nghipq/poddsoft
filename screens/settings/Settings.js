import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";

const Setting = () => {
  const { setLogin } = useContext(AuthContext);
  const signOut = async () => {
    await AsyncStorage.clear();
    setLogin(false);
  };

  return (
    <View style={styles.container}>
      <Icon.Button
        name="ios-log-out"
        backgroundColor="#3b5998"
        size={40}
        onPress={signOut}
      >
        <Text style={styles.text}>Đăng xuất</Text>
      </Icon.Button>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
    color: "#fff",
  },
});
