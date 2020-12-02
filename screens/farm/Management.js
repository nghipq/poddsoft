import React from "react";
import {StyleSheet, FlatList, View, Text } from "react-native";
import FarmItem from "../../components/FarmItem";
import { FarmContext } from "../../contexts/FarmContext";
import AddImage from "./AddImage";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Quản lý",
      headerRight: (
        <AddImage
          onPress={() => {
            navigation.navigate("AddProducts");
          }}
        />
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      // <FarmContext.Consumer>
      //   {({ chooseToChicken, farms }) => (
      //     <FlatList
      //       data={farms}
      //       renderItem={({ item }) => (
      //         <FarmItem
      //           category={item}
      //           onPress={() => {
      //             navigation.navigate("ChangeInfor");
      //             chooseToChicken(item);
      //           }}
      //         />
      //       )}
      //       keyExtractor={(item) => `${item.id}`}
      //     />
      //   )}
      // </FarmContext.Consumer>
      <View style={styles.container}>
        <Text>Đang phát triển</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
