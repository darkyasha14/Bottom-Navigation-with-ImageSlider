import React, { Component } from 'react'
import { Text, View, FlatList, Image, Button } from 'react-native'

export class ItemFovorite extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ height : 150, width : 120, marginLeft : 10, 
                borderWidth: 0.5, borderColor: '#dddddd', borderRadius:5}}>
                <View style={{flex:2}}>
                    <Image style={{flex:2, width: null, height: null, 
                resizeMode: 'cover'}}
                    source={{ uri: item.thumbnail }} />
                </View>
                <View style={{flex:1}}>
                    <Text>{ item.title }}</Text>
                </View>
                <View style={{marginHorizontal: 5,marginBottom:5,}}>
                    <Button
                    borderWidth = '0.5'
                    borderColor = '#dddddd'
                    borderRadius = '5'
                    title="FAVORITE"/>
                </View>
            </View>
        )
    }

    componentDidMount() {
        const url = 'http://dev.klaklikdev.online/gateway/public/filmmaker-list'
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson.DATA
            })

        })
        .catch((error) => {
            console.log(error);
            
        })
    }

  render() {
    return (
      <View>
        <FlatList horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={this.state.dataSource}
        renderItem={this.renderItem} />
      </View>
    )
  }
}

export default ItemFovorite
