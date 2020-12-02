import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { FarmContext } from "../../contexts/FarmContext";

export default function FarmItem(props) {
  return (
    <FarmContext.Consumer>
      {({ onChange, farmItem, updateItem }) => (
        <View>
          <Text style={styles.title}>Lứa gà {farmItem.id}</Text>
          <TextInput
            label="Tên giống gà"
            mode="outlined"
            style={styles.input}
            value={farmItem.spName}
            onChange={(e) => onChange(e, "spName")}
          ></TextInput>
          <TextInput
            label="Tiêm vaccinate"
            mode="outlined"
            style={styles.input}
            value={farmItem.isVaccinate}
            onChange={(e) => onChange(e, "isVaccinate")}
          ></TextInput>

          <TextInput
            label="Ngày nhập về"
            mode="outlined"
            style={styles.input}
            value={farmItem.date}
            onChange={(e) => onChange(e, "date")}
          ></TextInput>

          <TextInput
            label="Nguồn gốc"
            mode="outlined"
            style={styles.input}
            value={farmItem.source}
            onChange={(e) => onChange(e, "source")}
          ></TextInput>

          <TextInput
            label="Số lượng"
            mode="outlined"
            style={styles.input}
            value={farmItem.quantity}
            onChange={(e) => onChange(e, "quantity")}
          ></TextInput>

          <TouchableOpacity activeOpacity={0.5} onPress={() => updateItem()}>
            <Button title="Cập nhật"></Button>
          </TouchableOpacity>
        </View>
      )}
    </FarmContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BBEEB9",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
    height: 40,
  },
  title: {
    fontSize: 30,
    color: "purple",
    textAlign: "center",
    marginTop: 25,
  },
  text: {
    fontSize: 18,
    color: "purple",
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    margin: 25,
  },
});
