import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

/* import necessary Screens */
import { Home, Intro, Tutorial, Comment } from "./screens/home";
import { Animals, Diagnotics, CameraEx } from "./screens/diagnotics";
import { Store, Products, Product, Goods, Order } from "./screens/store";
import { ChatBot } from "./screens/chats";
import Setting from "./screens/settings/Settings";
import { Management, ChangeInfor, AddProducts } from "./screens/farm";
import { HomeStore } from "./screens/storescreens/home";

/* Create Stacks and Tab */
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DiagnoticsStack = createStackNavigator();
const StoreStack = createStackNavigator();
const SettingStack = createStackNavigator();
const FarmStack = createStackNavigator();
// const RootStack = createStackNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarColor: "#AEE788",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-planet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Diagnotics"
        component={DiagnoticsStackScreen}
        options={{
          tabBarLabel: "Chẩn đoán",
          tabBarColor: "#B9EB98",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-medkit" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreStackScreen}
        options={{
          tabBarLabel: "Cửa hàng",
          tabBarColor: "#C5EFA9",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Farm"
        component={FarmStackScreen}
        options={{
          tabBarLabel: "Quản lý",
          tabBarColor: "#B9EB98",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-podium" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStackScreen}
        options={{
          tabBarLabel: "Cài đặt",
          tabBarColor: "#AEE788",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

/*Create AuthStack */
// const AuthStack = ({ navigation }) => {
//   return (
//     <RootStack.Navigator headerMode="none">
//       <RootStack.Screen name="SignIn" component={SignInScreen} />
//       <RootStack.Screen name="SignUp" component={SignUpScreen} />
//       <RootStack.Screen name="MainTab" component={MainTab} />
//     </RootStack.Navigator>
//   );
// };

/*Create HomeStack */
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: "Trang chủ" }}
      />
      <HomeStack.Screen
        name="Introduction"
        component={Intro}
        options={{ title: "Giới thiệu" }}
      />
      <HomeStack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{ title: "Hướng dẫn" }}
      />
      <HomeStack.Screen
        name="Comment"
        component={Comment}
        options={{ title: "Đóng góp ý kiến" }}
      />
    </HomeStack.Navigator>
  );
};

/*Create DiagnoticsStack */
const DiagnoticsStackScreen = ({ navigation }) => (
  <DiagnoticsStack.Navigator>
    <DiagnoticsStack.Screen
      name="Animals"
      component={Animals}
      options={{ title: "Chẩn đoán" }}
    />
    <DiagnoticsStack.Screen
      name="Diagnotics"
      component={Diagnotics}
      options={{ title: "Chẩn đoán" }}
    />
    <DiagnoticsStack.Screen name="CameraEx" component={CameraEx} />
    <DiagnoticsStack.Screen name="ChatBot" component={ChatBot}/>
  </DiagnoticsStack.Navigator>
);

/*Create StoreStack */
const StoreStackScreen = ({ navigation }) => (
  <StoreStack.Navigator>
    <StoreStack.Screen
      name="Store"
      component={Store}
      options={{ title: "Cửa hàng" }}
    />
    <StoreStack.Screen
      name="Products"
      component={Products}
      options={{
        title: "Cửa hàng",
        headerRight: () => (
          <Icon.Button
            name="ios-cart"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={() => {
              navigation.navigate("Goods");
            }}
          ></Icon.Button>
        ),
      }}
    />
    <StoreStack.Screen
      name="Product"
      component={Product}
      options={{
        title: "Sản phẩm",
        headerRight: () => (
          <Icon.Button
            name="ios-cart"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={() => {
              navigation.navigate("Goods");
            }}
          ></Icon.Button>
        ),
      }}
    />
    <StoreStack.Screen
      name="HomeStore"
      component={HomeStore}
      options={{ title: "Cửa hàng" }}
    />
    <StoreStack.Screen
      name="Goods"
      component={Goods}
      options={{ title: "Giỏ hàng" }}
    />
    <StoreStack.Screen
      name="Order"
      component={Order}
      options={{ title: "Đặt hàng" }}
    />
    <StoreStack.Screen
      name="ChatBot"
      component={ChatBot}
      options={{ title: "Liên hệ" }}
    />
  </StoreStack.Navigator>
);

/* Create SettingStack */
const SettingStackScreen = ({ navigation }) => (
  <SettingStack.Navigator>
    <SettingStack.Screen
      name="Setting"
      component={Setting}
      options={{ title: "Đăng xuất" }}
    />
  </SettingStack.Navigator>
);

/* Create FarmStack */
const FarmStackScreen = ({ navigation }) => (
  <FarmStack.Navigator>
    <FarmStack.Screen
      name="Management"
      component={Management}
      options={{
        title: "Quản lý",
      }}
    />
    <FarmStack.Screen
      name="ChangeInfor"
      component={ChangeInfor}
      options={{ title: "Cập nhật" }}
    />
    <FarmStack.Screen
      name="AddProducts"
      component={AddProducts}
      options={{ title: "Thêm lứa gà" }}
    />
  </FarmStack.Navigator>
);
