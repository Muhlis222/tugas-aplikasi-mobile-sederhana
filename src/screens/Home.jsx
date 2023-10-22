import React, { Component } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, ImageBackground,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ededec' }}>
                <StatusBar backgroundColor= '#ededec' barStyle= 'dark-content' />
                <View style={{ marginTop: 30, marginHorizontal: 20, flexDirection: 'row'}}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'red' }}>
                        <Icon name="bars" size={30} color="#838e99"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'blue' }}>
                        <Image style= {{width: 50, height: 50, borderRadius: 50}} source={require('../image/user.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 30, flex: 1}}>
                    <Text style={{ fontSize: 28 }}>Welcome Home,</Text>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#4a90e2' }}>Moh Muhlis</Text>

                    <Text style= {{ fontWeight: 'bold', marginTop: 30, marginBottom: 20 }}>Cameras</Text>
                </View>
            </View>
        );
    }
}

export default Home;