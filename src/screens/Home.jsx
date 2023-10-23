import React, { Component } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, ImageBackground,ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { id: '1', image: require('../image/logo.jpg') },
                { id: '2', image: require('../image/logo.jpg') },
                { id: '3', image: require('../image/logo.jpg') },
                { id: '4', image: require('../image/logo.jpg') },
            ],
        };
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#ededec' }}>
                <StatusBar backgroundColor= '#ededec' barStyle= 'dark-content' />
                <View style={{ marginTop: 30, marginHorizontal: 20, flexDirection: 'row'}}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Icon name="bars" size={30} color="#838e99"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image style= {{width: 50, height: 50, borderRadius: 50}} source={require('../image/user.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 30, flex: 1}}>
                    <Text style={{ fontSize: 28 }}>Welcome Halaman 1,</Text>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#4a90e2' }}>Moh Muhlis</Text>

                    <View>
                        <Text style= {{ fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 20 }}>Batik</Text>

                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            renderItem = {({item}) => (
                                <TouchableOpacity 
                                    style= {{ 
                                        backgroundColor: '#ffff',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10,
                                        elevation: 10,
                                        borderRadius: 10
                                    }}>
                                    <Image style={{ width: 250, height: 210, borderRadius: 10 }} source={item.image} />
                                    <View 
                                        style={{ 
                                            position: 'absolute',
                                            bottom: 10,
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            borderRadius: 5,
                                        }}>
                                        <Text 
                                            style={{ 
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Your Text Here
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View>
                        <Text style= {{ fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 20 }}>Batik</Text>

                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            renderItem = {({item}) => (
                                <TouchableOpacity 
                                    style= {{ 
                                        backgroundColor: '#ffff',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10,
                                        elevation: 10,
                                        borderRadius: 10
                                    }}>
                                    <Image style={{ width: 200, height: 200, borderRadius: 10 }} resizeMode="cover" source={item.image} />
                                    <View 
                                        style={{ 
                                            position: 'absolute',
                                            bottom: 10,
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for better text visibility
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            borderRadius: 5,
                                        }}>
                                        <Text 
                                            style={{ 
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Your Text Here
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end' }} onPress={() => this.props.navigation.navigate('Home2')}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20, margin: 15 }}>Move To Halaman 2</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        );
    }
}

export default Home;