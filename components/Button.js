import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title } from "react-native-paper";

export default function AnimalButtom(props) {
  const { animal, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Card style={styles.container}>
          <Card.Content>
            <Title style={styles.title}>{animal.title}</Title>
          </Card.Content>
          <Card.Cover style={styles.image} source={animal.Image} />
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 26,
    marginBottom: 26,
    paddingBottom: 26,
  },
  title: {
    fontSize: 25,
  },
  image: {
    height: 120,
    width: 120,
  },
});
