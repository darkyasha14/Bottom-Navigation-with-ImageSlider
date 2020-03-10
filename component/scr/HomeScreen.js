import React, { Component } from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import ItemPopular from '../item/ItemPopular'
import ItemFavorite from '../item/ItemFovorite'

export class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     images : [
       require('../../assets/img1.jpg'),
       require('../../assets/img2.jpg'),
       require('../../assets/img3.jpg'),
       require('../../assets/img4.png')
     ]
   }
 }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <SliderBox
                images={this.state.images}
                sliderBoxHeight={180}
                onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`) }
                dotColor="#2E86C1"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
            />
            <View>
                <Text style={{marginTop: 20, marginLeft: 10, fontSize : 18}}>Popular Anime</Text>
            </View>
            <View style={{height:150, marginTop:10}}>
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                    <ItemPopular imageUri={require
                        ('../../assets/img2.jpg')}
                        genre="Fantasy"
                        name="Fate Grand/Order"/>
                    <ItemPopular imageUri={require
                    ('../../assets/img1.jpg')}
                    genre="Fantasy"
                    name="Fate Grand/Order"/>
                        <ItemPopular imageUri={require
                    ('../../assets/img3.jpg')}
                    genre="Fantasy"
                    name="Fate Grand/Order"/>
                        <ItemPopular imageUri={require
                    ('../../assets/img4.png')}
                    genre="Fantasy"
                    name="Fate Grand/Order"/>
                
                </ScrollView>
            </View> 
            <View>
                <Text style={{marginTop: 20, marginLeft:10,
                fontSize:18}}>
                    Favorite
                </Text>
            </View>
            <View style={{marginTop:10,}}>
                <ItemFavorite/>
            </View>
            <View>
                <Text style={{fontSize: 20, marginTop : 20,
                marginHorizontal: 10}}>Upcoming</Text>
                <Text style={{fontSize: 15, color:'#839192',
            paddingLeft:10, paddingTop:5}}>Turn on your notification</Text>
            </View>
            <View style={{ height: 270,
            paddingTop : 20}}>
                <Image style={{flex: 1,width: null, height: null, 
                resizeMode: 'cover', marginHorizontal:10,
            marginBottom: 20, borderRadius: 5}}
                source={require('../../assets/img1.jpg')}></Image>
            </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
});


export default App
