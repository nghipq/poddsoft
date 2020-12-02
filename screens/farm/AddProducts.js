import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import RadioForm from "react-native-simple-radio-button";

export default class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio_props: [
        { label: "Đã tiêm", value: 0 },
        { label: "Chưa tiêm", value: 1 },
      ],
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Thêm lứa gà mới",
    };
  };

  render() {
    const { radio_props } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.component}>
          <Text style={styles.text}>Tên giống gia cầm: </Text>
          <TextInput placeholder="nhập tên"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Đã tiêm vaccinate hay chưa? </Text>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            onPress={(value) => {
              this.setState({ value: value });
            }}
          />
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Ngày nhập về: </Text>
          <TextInput placeholder="nhập ngày"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Nguồn gốc:</Text>
          <TextInput placeholder="nhập nơi cung cấp"></TextInput>
        </View>
        <View style={styles.component}>
          <Text style={styles.text}>Số lượng gia cầm: </Text>
          <TextInput placeholder="nhập số lượng"></TextInput>
        </View>
        <Button title="xong"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    color: "#363",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#363",
  },
  component: {
    borderColor: "#999",
    borderWidth: 1,
    margin: 5,
  },
});
