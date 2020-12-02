import React from "react";
import { FlatList, View, Text } from "react-native";
import BillItem from "../../../components/BillItem";
import { StoreContext } from "../../../contexts/StoreContext";
export default class Bill extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Hóa đơn",
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <StoreContext.Consumer>
        {({ chooseToBill, bills }) => {
          if (bills.length == 0) {
            return (
              <View>
                <Text>Không có hóa đơn nào!</Text>
              </View>
            );
          } else {
            return (
              <FlatList
                data={bills}
                renderItem={({ item }) => (
                  <BillItem
                    category={item}
                    onPress={() => {
                      navigation.navigate("BillDetail");
                      chooseToBill(item);
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
