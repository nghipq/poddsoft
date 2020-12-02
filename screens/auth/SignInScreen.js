import React, { useState, useContext } from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-community/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { AuthContext } from "../../contexts/AuthContext";

const SignInScreen = (props) => {
  const [state, setState] = useState({ username: "", password: "" });
  const { setLogin } = useContext(AuthContext);

  const onLogin = () => {
    const { username, password } = state;
    if (!username.trim()) {
      alert("Please enter email")
    } else if (!password.trim()) {
      alert("Please enter password")
    } else {
      const item = {
        email: username,
        password: password,
      };

      axios
        .post("user/auth/login", item)
        .then(async (res) => {
          if (res.data.success) {
            Alert.alert("Thành công", `Chào ${res.data.username}`);
            await AsyncStorage.setItem("id", JSON.stringify(res.data.id));

            if (res.data.permission == 0) setLogin(true);
            else if (res.data.permission == 1) props.navigation.navigate("Store");
          } else {
            Alert.alert(`${res.data.error}`);
          }
        })
        .catch(function () {
          console.log("Promise Rejected");
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>PODDSoft.com!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, { backgroundColor: "#fff" }]}
      >
        {/* Username and password input */}
        <Text style={[styles.text_footer, { color: "#333" }]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333" size={20} />
          <TextInput
            value={state.username}
            placeholder="Nhập Email"
            placeholderTextColor="#666666"
            style={[styles.textInput, { color: "#333" }]}
            autoCapitalize="none"
            onChangeText={(username) => {
              setState({ ...state, username });
              console.log(state);
            }}
          />
        </View>

        <Text style={[styles.text_footer, { color: "#333", marginTop: 35 }]}>
          Mật khẩu (Password)
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#333" size={20} />
          <TextInput
            secureTextEntry={true}
            value={state.password}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#666666"
            style={[styles.textInput, { color: "#333" }]}
            autoCapitalize="none"
            onChangeText={(password) => {
              setState({ ...state, password });
              console.log(state);
            }}
          />
        </View>

        {/* <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>Quên mật khẩu</Text>
        </TouchableOpacity> */}

        {/* Buttons */}
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={onLogin}>
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
                Đăng nhập
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("SignUp")}
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
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
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
