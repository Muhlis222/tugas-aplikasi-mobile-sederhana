import React, { Component } from "react";
import { Text, View } from "react-native";


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>APLIKASI INI MASIH, </Text>
                <Text>DALAM MODE WEY !! </Text>
            </View>
        );
    }
}

export default About;