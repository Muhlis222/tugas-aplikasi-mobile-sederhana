import React, { Component } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, ImageBackground,ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    nama : 'Pakaian laki laki',
                },
                {
                    nama : 'Pakaian Perempuan',
                },
                {
                    nama : 'Makanan',
                },
                {
                    nama : 'Minuman',
                },
                {
                    nama : 'Hiburan',
                },
            ],
            Gambar: [
                {namaItem : 'Batik Tradisional 1', author : 'Nolan', Image : ''},
                {namaItem : 'Batik Tradisional 2', author : 'Bandit', Image : ''},
                {namaItem : 'Batik Tradisional 3', author : 'Cici', Image : ''},
            ],
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ededec' }}>
                <StatusBar backgroundColor= '#ededec' barStyle= 'dark-content' />
                    <View>
                        <FlatList 
                            data={this.state.data}
                            style={{ marginLeft: 10, marginTop: 15 }}
                            horizontal={true}
                            renderItem = {({item}) => (
                                <TouchableOpacity
                                    style= {{ 
                                        marginRight: 5, 
                                        backgroundColor: '#ffff', 
                                        elevation: 3,
                                        paddingHorizontal: 15,
                                        paddingVertical: 8,
                                        marginBottom: 20,
                                        borderRadius: 15,
                                        marginLeft: 5,
                                    }}>
                                    <Text style={{ fontSize: 15 }}>{item.nama}</Text>
                                    
                                </TouchableOpacity>
                            )}/>
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: 15}}>
                        <Text style= {{ fontWeight: 'bold', marginTop: 30, marginBottom: 30 }}>Cameras</Text>
                    </View>
                    <View>
                        <FlatList 
                            data={this.state.Gambar}
                            style={{ marginLeft: 10 }}
                            horizontal
                            showsHorizontalScrollIndicator = {false}
                            renderItem = {({item}) => (
                                <TouchableOpacity
                                    style= {{ 
                                        marginRight: 5, 
                                        backgroundColor: '#ffff', 
                                        elevation: 3,
                                        paddingHorizontal: 15,
                                        paddingVertical: 8,
                                        marginBottom: 10,
                                        borderRadius: 15,
                                        marginLeft: 5,
                                    }}>
                                    <Image style= {{ width: 200, height: 150 }} source={require('../image/logo.jpg')} />
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.namaItem}</Text>
                                    <Text style={{ fontSize: 15 }}>{item.author}</Text>
                                    
                                </TouchableOpacity>
                            )}/>
                    </View>

                    <View style={{ marginHorizontal: 20, marginTop: 20, flex: 1}}>
                        <Text style= {{ fontWeight: 'bold', marginTop: 15, marginBottom: 20 }}>Cameras</Text>
                    </View>
                    <View>
                        <FlatList 
                            data={this.state.Gambar}
                            style={{ marginLeft: 10 }}
                            horizontal
                            showsHorizontalScrollIndicator = {false}
                            renderItem = {({item}) => (
                                <TouchableOpacity
                                    style= {{ 
                                        marginRight: 5, 
                                        backgroundColor: '#ffff', 
                                        elevation: 3,
                                        paddingHorizontal: 15,
                                        paddingVertical: 8,
                                        marginBottom: 10,
                                        borderRadius: 15,
                                        marginLeft: 5,
                                    }}>
                                    <Image style= {{ width: 200, height: 150 }} source={require('../image/logo.jpg')} />
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.namaItem}</Text>
                                    <Text style={{ fontSize: 15 }}>{item.author}</Text>
                                    
                                </TouchableOpacity>
                            )}/>
                    </View>


                
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end' }} onPress={() => this.props.navigation.navigate('About')}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20, margin: 15 }}>Move To About</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home2;