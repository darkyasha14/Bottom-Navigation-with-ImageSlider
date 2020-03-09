import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class ItemPopular extends Component {
  render() {
    return (
      <View style={{ height : 150, width : 120, marginLeft : 10, 
      borderWidth: 0.5, borderColor: '#dddddd', borderRadius:5}}>
          <View style={{ flex : 3}}>
            <Image source={this.props.imageUri}
            style={{flex:2, width: null, height: null, 
                resizeMode: 'cover'}}/>
            </View>
        <View style={{flex : 0.5,  paddingTop : 10}}>
        <Text style={{color: "#5DADE2"}} > {this.props.genre} </Text>
        </View>
        <View style={{flex : 0.5,  paddingTop : 10,marginBottom:10}}>
        <Text> {this.props.name} </Text>
        </View>
      </View>
      
    )
  }
}

export default ItemPopular
