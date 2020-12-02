import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import NumericInput from "react-native-numeric-input";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CartContext } from "../contexts/Cart";
export default function GoodsItem(props) {
  const { category, onPress } = props;
  return (
    <CartContext.Consumer>
      {({ changeUnit, removeItem }) => (
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Image
              style={styles.image}
              source={{
                uri: `http://34.71.1.150/images?image=${category.images}`,
              }}
              onPress={onPress}
            />
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.title}>Tên sản phẩm: {category.name}</Text>
            <Text style={styles.price}>Giá tiền: {category.price}</Text>
            <Text style={styles.nameStore}>
              Tên cửa hàng: {category.storeName}
            </Text>
            <NumericInput
              type="plus-minus"
              onChange={(value) => {
                changeUnit(value, category);
              }}
              totalWidth={120}
              totalHeight={40}
              iconSize={25}
              minValue={1}
              maxValue={category.quantity}
              value={category.units}
            />
          </View>
          <Text
            onPress={() => removeItem(category)}
            style={{
              color: "#c1c1c1",
              marginLeft: "auto",
              fontSize: 32,
              marginTop: 0,
            }}
          >
            x
          </Text>
        </View>
      )}
    </CartContext.Consumer>
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
    fontSize: 20,
    color: "#363",
  },
  image: {
    height: hp("15%"),
    width: wp("25%"),
    borderColor: "#000",
    padding: 10,
    margin: 10,
  },
  price: {
    fontSize: 16,
    color: "#c45",
  },
  nameStore: {},
});
