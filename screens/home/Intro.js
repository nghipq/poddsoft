import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import logo from "../../assets/icon.png";
import icon from "../../assets/hen.png";

export default class Intro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Giới thiệu",
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.text}>
          * Là phần mềm có chức năng nhận diện bệnh gà qua hình ảnh mà người
          dùng cung cấp và đưa ra những biện pháp xử lí để kịp thời ngăn chặn
          bệnh lây lan.{" "}
        </Text>

        <Image style={styles.icon} source={icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
  },
  logo: {
    width: 160,
    height: 160,
  },
  text: {
    backgroundColor: "rgba(62, 123, 60, 0.3)",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 18,
    marginTop: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
