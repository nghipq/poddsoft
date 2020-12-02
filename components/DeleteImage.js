import React, { Component } from 'react';
import DeleteImg from '../assets/delete.png'
import UpdateImg from '../assets/chinhsua.png'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { StoreContext } from '../contexts/StoreContext'

export default class DeleteImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StoreContext.Consumer>
        {({updateProduct, deleteProduct})=> 
          <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={async ()=>{
            await deleteProduct()
            await this.props.navigation.navigate("HomeStore")}}>
            <Image
              source={DeleteImg}
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={async()=>{
            this.props.navigation.navigate("UpdateProduct")
          }}>
            <Image
              source={UpdateImg}
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
              }}
            />
          </TouchableOpacity>
        </View>}
      </StoreContext.Consumer>
    );
  }
}
const styles = StyleSheet.create({
  count: {
    marginLeft: 25,
    color: '#00f'
  },

})