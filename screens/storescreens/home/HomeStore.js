import React from "react";
import { FlatList, View, Text } from "react-native";
import ProductItem from "../../../components/ProdcutItemInStore";
import AddImage from "../../../components/AddImage";
import { StoreContext } from "../../../contexts/StoreContext";

export default class HomeStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Sản phẩm",
      headerRight: (
        <AddImage
          onPress={() => {
            navigation.navigate("AddProduct");
          }}
        />
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <StoreContext.Consumer>
        {({ allproduct, chooseToProduct }) => {
          if (allproduct.length == 0) {
            return (
              <View>
                <Text>Không có sản phẩm nào!</Text>
              </View>
            );
          } else {
            return (
              <FlatList
                data={allproduct}
                renderItem={({ item }) => (
                  <ProductItem
                    category={item}
                    onPress={() => {
                      navigation.navigate("ProductDetail");
                      chooseToProduct(item);
                      console.log(item);
                    }}
                  />
                )}
                keyExtractor={(item) => `${item.id}`}
              />
            );
          }
        }}
      </StoreContext.Consumer>
    );
  }
}
