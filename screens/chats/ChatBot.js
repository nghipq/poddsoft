import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, SafeAreaView, InputField, Icon, Button } from "react-native";
import ChatBarImage from "../chats/ChatBarImage";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import * as ImagePicker from "expo-image-picker";

import IoIcon from "react-native-vector-icons/Ionicons";
import Fire from './Fire';
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from "@react-native-community/async-storage"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class ChatBot extends React.Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation
    this.state = {

    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Liên Hệ",
      headerRight: <ChatBarImage />,
    };
  };


  state = {
    messages: [],
    userId: "",
    name: ""
  }

  get user() {

    return {

      _id: this.state.userId,
      name: this.state.name
    }
  }
  componentDidMount() {
    AsyncStorage.getItem("id").then((res) => {
      this.setState({
        userId: res
      })
    });
    AsyncStorage.getItem("name").then((res) => {
      this.setState({
        name: res
      })
    });

    Fire.get(message => {
      if (message.room_id) {
        if (message.room_id._id == this.state.userId) {
          console.log(message)
          this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
          }))
        }
      }
    });
  }
  componentWillUnmount() {
    Fire.off();
  }





  renderInputToolbarCamera() {
    return <View style={{ flexDirection: 'row' }}>

      <TouchableOpacity
        onPress={() => { console.log("camera") }}>
        <MaterialCommunityIcons
          name='camera'
          size={40}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { console.log("img") }}>
        <MaterialCommunityIcons
          name='image'
          size={40}
        />
      </TouchableOpacity>
    </View>
  }

  render() {
    const chat = <GiftedChat
      // renderSend={(props) => (
      //   <View style={{ flexDirection: 'row' }}>
      //     <MaterialCommunityIcons
      //       name='send-circle'
      //       size={40}
      //       onPress={Fire.sen}
      //     />
      //   </View>
      // )}
      messages={this.state.messages}
      user={this.user}
      onSend={Fire.send}
      renderActions={this.renderInputToolbarCamera}

    />

    // if (Platform.OS === "android") {
    //   return (
    //     <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={38} enabled>
    //       {chat}

    //     </KeyboardAvoidingView>
    //   )
    // }

    return <SafeAreaView style={{ flex: 1 }}>
      <Text>a</Text>

      {chat}</SafeAreaView>
  }


}



