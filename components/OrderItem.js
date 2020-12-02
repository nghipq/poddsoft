import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import NumericInput from "react-native-numeric-input";
import { CartContext } from "../contexts/Cart";
export default function GoodsItem(props) {
  const { category, onPress } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `http://34.71.1.150/images?image=${category.images}`,
        }}
        onPress={onPress}
      />
      <View style={styles.text}>
        <Text style={styles.title}>Tên sản phẩm: {category.name}</Text>
        <Text style={styles.price}>Giá tiền: {category.price}</Text>
        <Text style={styles.units}>Số lượng: {category.units}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#eee",
    margin: 5,
    flexDirection: "row",
  },
  title: {
    marginTop: 10,
    marginBottom: 6,
    fontWeight: "bold",
    fontSize: 18,
    color: "#363",
  },
  image: {
    height: 80,
    width: 80,
    borderColor: "#000",
    padding: 10,
    margin: 10,
  },
  price: {
    fontSize: 16,
    color: "#f44",
  },
  nameStore: {},
  units: {
    fontSize: 16,
  },
});
