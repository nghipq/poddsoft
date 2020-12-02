import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import IoIcon from "react-native-vector-icons/Ionicons";

export default class ActionBarImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <IoIcon
            name="ios-call"
            size={28}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
              marginLeft: 2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <IoIcon
            name="ios-videocam"
            size={28}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
              marginLeft: 2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <IoIcon
            name="ios-information-circle"
            size={28}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
              marginLeft: 2,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  count: {
    marginLeft: 25,
    color: "#00f",
  },
});
