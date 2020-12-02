import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      enter: "",
      email: "",
      address: "",
      phonenumber: "",
      code: "",
    };
  }

  onLogin() {
    const {
      username,
      password,
      enter,
      email,
      address,
      phonenumber,
      code,
    } = this.state;
    const item = {
      username: username,
      password: password,
      confirm_password: enter,
      email: email,
      address: address,
      phonenumber: phonenumber,
      code: code,
      lx: 0,
      ly: 0,
    };
    if (username == "") {
      Alert.alert("Tên không được bỏ trống!");
    } else if (email.indexOf("@") == -1) {
      Alert.alert("Email không hợp lệ!");
    } else if (address == "") {
      Alert.alert("Địa chỉ không được bỏ trống!");
    } else if (phonenumber.length != 10) {
      Alert.alert("Số điện thoại không hợp lệ!");
    } else if (password == "") {
      Alert.alert("Mật khẩu không được bỏ trống!");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        item.lx = position.coords.latitude;
        item.ly = position.coords.longitude;
      });
      axios.post(`user/auth/register`, item).then((res) => {
        if (res.data.success) {
          Alert.alert("Bạn đã đăng ký thành công. Vui lòng đăng nhập!");
          this.props.navigation.navigate("SignIn");
        } else {
          Alert.alert(`${res.data.error}`);
        }
      });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>PODDSoft.com</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[styles.footer, { backgroundColor: "#fff" }]}
        >
          {/* Input fields */}
          <Text style={[styles.text_footer, { color: "#333" }]}>
            *Tên người dùng (username)
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              value={this.state.username}
              placeholder="Nhập tên người dùng"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: "#333" }]}
              autoCapitalize="none"
              onChangeText={(username) => this.setState({ username })}
            />
          </View>

          <Text style={[styles.text_footer, { color: "#333", marginTop: 10 }]}>
            *Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              value={this.state.email}
              placeholder="Nhập email"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: "#333" }]}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </View>

          <Text style={[styles.text_footer, { color: "#333", marginTop: 10 }]}>
            *Mật khẩu (Password)
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={"#333"} size={20} />
            <TextInput
              value={this.state.password}
              placeholder="Nhập mật khẩu"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: "#333" }]}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 10 }]}>
            *Mật khẩu (Confirm Password)
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={"#333"} size={20} />
            <TextInput
              value={this.state.enter}
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: "#333" }]}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(enter) => this.setState({ enter })}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 10 }]}>
            *Địa chỉ (Address)
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              value={this.state.address}
              placeholder="Nhập địa chỉ"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: "#333" }]}
              autoCapitalize="none"
              onChangeText={(address) => this.setState({ address })}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 10 }]}>
            *Số điện thoại (Phone number)
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              value={this.state.phonenumber}
              placeholder="Nhập số điện thoại"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: "#333" }]}
              autoCapitalize="none"
              onChangeText={(phonenumber) => this.setState({ phonenumber })}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 10 }]}>
            CMND (ID number)
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              value={this.state.code}
              placeholder="Nhập CMND"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: "#333" }]}
              autoCapitalize="none"
              onChangeText={(code) => this.setState({ code })}
            />
          </View>

          {/* Buttons */}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={this.onLogin.bind(this)}
            >
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Đăng Ký
              </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: "#009387",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#009387",
                  },
                ]}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: 8,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 15,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
