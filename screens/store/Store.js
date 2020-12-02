import React from "react";
import { View, StyleSheet } from "react-native";
import lienhe from "../../assets/lienhe.png";
import muahang from "../../assets/muahang.png";
import { Card } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";

// async function logIn() {
//     try {
//       await Facebook.initializeAsync('853519481774732');
//       const {
//         type,
//         token,
//         expires,
//         permissions,
//         declinedPermissions,
//       } = await Facebook.logInWithReadPermissionsAsync({
//         permissions: ['public_profile'],
//       });
//       if (type === 'success') {
//         // Get the user's name using Facebook's Graph API
//         const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//         Linking.openURL("https://www.facebook.com/Chicken-Management-System-101131918088369/?modal=admin_todo_tour")
//       } else {
//         // type === 'cancel'
//       }
//     } catch ({ message }) {
//       alert(`Facebook Login Error: ${message}`);
//     }
//   }

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {
          id: 1,
          title: "Liên hệ tư vấn",
          pageName: "ChatBot",
          icon: "phone-call",
        },
        {
          id: 2,
          title: "Mua hàng",
          pageName: "Products",
          icon: "shopping-cart",
        },
      ],
      longitude: 0,
      latitude: 0,
    };
  }
  render() {
    const { navigation } = this.props;
    const { stores } = this.state;
    return (
      <View style={styles.container}>
        {stores.map((store) => (
          <Card
            key={store.id}
            style={styles.card}
            onPress={() => navigation.navigate(store.pageName)}
          >
            <Card.Title
              title={store.title}
              subtitle={store.pageName}
              titleStyle={styles.title}
              subtitleStyle={styles.subtitle}
              left={() => <Feather name={store.icon} size={40} />}
            />
          </Card>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 26,
    justifyContent: "center",
    paddingHorizontal: 26,
  },
  card: {
    marginVertical: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  subtitle: { fontSize: 20 },
});
