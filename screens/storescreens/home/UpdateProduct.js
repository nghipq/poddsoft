import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Button,
} from "react-native";
import { StoreContext } from "../../../contexts/StoreContext";

export default class UpdateProduct extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Cập nhật",
    };
  };
  render() {
    return (
      <StoreContext.Consumer>
        {({ chooseProduct, onChange, updateValue, updateProduct }) => (
          <View style={styles.container}>
            <View style={styles.component}>
              <Text style={styles.text}>Tên sản phẩm: </Text>
              <TextInput
                placeholder="nhập tên"
                value={chooseProduct.name}
                onChange={(e) => onChange(e, "name")}
              ></TextInput>
            </View>
            <View style={styles.component}>
              <Text style={styles.text}>Số lượng sản phẩm </Text>
              <TextInput
                tkeyboardType="numeric"
                placeholder="nhập số lượng"
                value={String(chooseProduct.quantity)}
                onChange={(e) => onChange(e, "quantity")}
              ></TextInput>
            </View>
            <View style={styles.component}>
              <Text style={styles.text}>Thông tin sản phẩm: </Text>
              <TextInput
                placeholder="nhập thông tin"
                value={chooseProduct.description}
                onChange={(e) => onChange(e, "description")}
              ></TextInput>
            </View>
            <View style={styles.component}>
              <Text style={styles.text}>Giá sản phẩm:</Text>
              <TextInput
                placeholder="nhập giá"
                value={chooseProduct.price}
                onChange={(e) => onChange(e, "price")}
              ></TextInput>
            </View>
            <View style={styles.component}>
              <Text style={styles.text}>Thương hiệu sản phẩm:</Text>
              <TextInput
                placeholder="thương hiệu"
                value={chooseProduct.brand}
                onChange={(e) => onChange(e, "brand")}
              ></TextInput>
            </View>
            <View style={styles.component}>
              <Text style={styles.text}>Nhà sản xuất: </Text>
              <TextInput
                placeholder="nhập NSX"
                value={chooseProduct.source}
                onChange={(e) => onChange(e, "source")}
              ></TextInput>
            </View>
            <View style={styles.component}>
              <Text style={styles.text}>Loại sản phẩm: </Text>
              <Picker
                selectedValue={chooseProduct.types}
                onValueChange={(value) => updateValue(value)}
              >
                <Picker.Item label="Thuốc" value="Thuốc" />
                <Picker.Item label="Thức ăn" value="Thức ăn" />
                <Picker.Item label="Vacxin" value="Vacxin" />
              </Picker>
            </View>
            <Button title="Cập nhật" onPress={() => updateProduct()}></Button>
          </View>
        )}
      </StoreContext.Consumer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    color: "#363",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#363",
  },
  component: {
    borderColor: "#999",
    borderWidth: 1,
    margin: 5,
  },
});
