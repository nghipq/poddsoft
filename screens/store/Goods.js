import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import GoodsItem from "../../components/GoodsItem";
import CartImage from "../../components/CartImage";
import { CartContext } from "../../contexts/Cart";

export default class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Giỏ hàng",
      headerRight: <CartImage />,
    };
  };
  render() {
    const { navigation } = this.props;

    return (
      <CartContext.Consumer>
        {({ cartItems, Total, Count }) => (
          <View>
            {Count == 0 ? (
              <Text style={styles.giohang}>
                Chưa có sản phẩm trong giỏ hàng
              </Text>
            ) : (
              <View style={{ height: "100%" }}>
                <View style={{ height: "93%" }}>
                  <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                      <GoodsItem
                        category={item}
                        onPress={() => navigation.navigate("Product")}
                      />
                    )}
                    keyExtractor={(item) => `${item.id}`}
                  />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                  <Text style={styles.total}>Tổng tiền : {Total}</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text
                      style={styles.text}
                      onPress={() => navigation.navigate("Order")}
                    >
                      Tiến hành đặt hàng
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )}
      </CartContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  button: {
    position: "absolute",
    width: "100%",
    height: 50,
    backgroundColor: "#297",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  total: {
    position: "absolute",
    width: "100%",
    bottom: 50,
    fontSize: 20,
    backgroundColor: "#fff",
    color: "#f00",
  },
  giohang: {
    fontSize: 30,
    color: "#363",
    textAlign: "center",
    top: 100,
  },
});
