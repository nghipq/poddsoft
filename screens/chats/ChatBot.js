import React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import ChatBarImage from "../chats/ChatBarImage";
import IoIcon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class ChatBot extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Liên Hệ",
      headerRight: <ChatBarImage />,
    };
  };

  render() {
    return (
      <View style={styles.container}>
      <Text>Đang phát triển</Text>
    </View>
      // <View
      //   style={{
      //     display: "flex",
      //     height: hp("85%"),
      //   }}
      // >
      //   <View
      //     style={{
      //       marginBottom: "auto",
      //     }}
      //   >
      //     <View
      //       style={{
      //         width: 250,
      //         borderRadius: 40 / 2,
      //         margin: 5,
      //         marginLeft: "auto",
      //         padding: 5,
      //         backgroundColor: "#c1c1c1",
      //       }}
      //     >
      //       <Text
      //         style={{
      //           padding: 5,
      //         }}
      //       >
      //         Xin chào! Bạn có thể giúp tôi được không?
      //       </Text>
      //     </View>
      //     <View
      //       style={{
      //         width: 250,
      //         borderRadius: 40 / 2,
      //         margin: 5,
      //         marginRight: "auto",
      //         padding: 5,
      //         backgroundColor: "blue",
      //       }}
      //     >
      //       <Text
      //         style={{
      //           color: "white",
      //           padding: 5,
      //         }}
      //       >
      //         Xin chào! Bạn cần chúng tôi giúp gì?
      //       </Text>
      //     </View>
      //   </View>
      //   <View
      //     style={{
      //       justifyContent: "flex-end",
      //       display: "flex",
      //       flexDirection: "row",
      //       alignItems: "center",
      //       borderTopWidth: 2,
      //       borderTopColor: "gray",
      //       padding: 0,
      //     }}
      //   >
      //     <TouchableOpacity>
      //       <IoIcon
      //         name="ios-menu"
      //         size={28}
      //         style={{
      //           padding: 5,
      //           width: 40,
      //           height: 40,
      //           borderRadius: 40 / 2,
      //           marginLeft: 2,
      //         }}
      //       />
      //     </TouchableOpacity>
      //     <TouchableOpacity>
      //       <IoIcon
      //         name="ios-image"
      //         size={28}
      //         style={{
      //           padding: 5,
      //           width: 40,
      //           height: 40,
      //           borderRadius: 40 / 2,
      //           marginLeft: 2,
      //         }}
      //       />
      //     </TouchableOpacity>
      //     <TouchableOpacity>
      //       <IoIcon
      //         name="ios-camera"
      //         size={28}
      //         style={{
      //           padding: 5,
      //           width: 40,
      //           height: 40,
      //           borderRadius: 40 / 2,
      //           marginLeft: 2,
      //         }}
      //       />
      //     </TouchableOpacity>
      //     <TouchableOpacity>
      //       <IoIcon
      //         name="ios-mic"
      //         size={28}
      //         style={{
      //           padding: 5,
      //           width: 40,
      //           height: 40,
      //           borderRadius: 40 / 2,
      //           marginLeft: 2,
      //         }}
      //       />
      //     </TouchableOpacity>
      //     <TextInput
      //       style={{
      //         flex: 1,
      //         height: 30,
      //         margin: 2,
      //         borderStyle: "solid",
      //         padding: 5,
      //         backgroundColor: "#F1F1F1",
      //         borderRadius: 50,
      //       }}
      //       maxLength={40}
      //     ></TextInput>
      //     <TouchableOpacity>
      //       <IoIcon
      //         name="md-send"
      //         size={28}
      //         style={{
      //           padding: 5,
      //           width: 40,
      //           height: 40,
      //           borderRadius: 40 / 2,
      //           marginLeft: 2,
      //         }}
      //       />
      //     </TouchableOpacity>
      //   </View>
      // </View>
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
