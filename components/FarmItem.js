import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
import ImageItem from "../assets/chinhsua.png";

export default function FarmItem(props) {
  const { category, onPress } = props;
  return (
    <Surface style={styles.surface}>
      <View style={styles.titles}>
        <Text style={styles.title}>Lứa gà : {category.id} </Text>
        <TouchableOpacity onPress={onPress}>
          <Image source={ImageItem} style={styles.img} />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>- Tên giống gà: {category.spName}</Text>
      <Text style={styles.text}>- Tiêm vaccinate: {category.isVaccinate} </Text>
      <Text style={styles.text}>- Ngày nhập về: {category.date}</Text>
      <Text style={styles.text}>- Nguồn gốc: {category.source}</Text>
      <Text style={styles.text}>- Số lượng: {category.quantity}</Text>
    </Surface>
  );
}
const styles = StyleSheet.create({
  titles: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    color: "#363",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    padding: 2,
  },
  img: {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
  surface: {
    flex: 1,
    padding: 8,
    elevation: 4,
    marginBottom: 26,
  },
});
