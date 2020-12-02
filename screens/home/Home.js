import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          name: "Giới thiệu",
          pageName: "Introduction",
          icon: "ios-book",
        },
        {
          id: 2,
          name: "Hướng dẫn",
          pageName: "Tutorial",
          icon: "ios-paper-plane",
        },
        {
          id: 3,
          name: "Đóng góp ý kiến",
          pageName: "Comment",
          icon: "ios-create",
        },
      ],
    };
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() => navigation.navigate(item.pageName)}
          >
            <Card.Title
              title={item.name}
              subtitle={item.pageName}
              titleStyle={styles.title}
              subtitleStyle={styles.subtitle}
              left={() => <Icon name={item.icon} size={46} />}
            />
          </Card>
        )}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 26,
  },
  card: {
    marginVertical: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 26,
  },
  subtitle: {
    fontSize: 20,
  },
});
