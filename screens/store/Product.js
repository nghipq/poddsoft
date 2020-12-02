import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CartImage from "../../components/CartImage";
import { CartContext } from "../../contexts/Cart";

export default class Product extends React.Component {
  state = {
    modalVisible: false,
    product: null,
  };
  onClose = () => this.setState({ modalVisible: false });

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Sản Phẩm",
      headerRight: <CartImage onPress={() => navigation.navigate("Goods")} />,
    };
  };

  _simpleAlertHandler = () => {
    Alert.alert(
      //title
      "Sản phẩm đã được thêm vào giỏ hàng",
      //body
      "Bạn có muốn đi đến giỏ hàng không ?",
      [
        { text: "Có", onPress: () => this.props.navigation.navigate("Goods") },
        {
          text: "Không",
          onPress: () => console.log("No Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <CartContext.Consumer>
        {({ addToCart, chooseProduct }) => (
          <ScrollView>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{
                  uri: `http://34.71.1.150/images?image=${chooseProduct.images}`,
                }}
              />
              <Text style={styles.title}>
                Tên sản phẩm: {chooseProduct.name}{" "}
              </Text>
              <Text style={styles.types}>Loại: {chooseProduct.types}</Text>
              <Text style={styles.des}>
                Mô tả: {chooseProduct.description}{" "}
              </Text>
              <Text style={styles.price}>Giá tiền: {chooseProduct.price}</Text>
              <Text style={styles.infor}>
                Tên cửa hàng: {chooseProduct.storeName}{" "}
              </Text>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    addToCart(chooseProduct);
                    this._simpleAlertHandler;
                  }}
                >
                  <Text style={styles.text}>Chọn Mua</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </CartContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
    flex: 1,
  },
  image: {
    width: wp("55%"),
    height: hp("35%"),
    alignSelf: "center",
  },
  title: {
    fontSize: 26,
    color: "#363",
    textAlign: "center",
  },
  des: {
    fontSize: 20,
    padding: 5,
  },
  price: {
    fontSize: 30,
    color: "#f00",
    padding: 5,
  },
  infor: {
    fontSize: 18,
    color: "#777",
    padding: 5,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#297",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    position: "absolute",
    left: 0,
    top: 0,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  types: {
    margin: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#888",
  },
});
