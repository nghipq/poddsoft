import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Intro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Hướng dẫn",
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Đang phát triển</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
