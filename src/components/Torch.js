import React from 'react'
import { Header,Body } from 'native-base'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Torch from 'react-native-torch'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bulbToggle: false,
        }
    }

    handleToggle = () => {
        // alert()
        if (this.state.bulbToggle) {
            this.state.bulbToggle = false
            Torch.switchState(false)
            this.setState({
                ...this.state
            })
        }
        else {
            this.state.bulbToggle = true
            Torch.switchState(true)
            this.setState({
                ...this.state
            })
        }

    }
    

    render() {
        return (
            <>
                <Header style={{backgroundColor:'grey'}}>
                    <Body>
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Flash Light By Nameer</Text>
                    </Body>
                </Header>
                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <TouchableOpacity style={{ flex: 1,justifyContent:'center',height:500 }}
                        onPress={() => this.handleToggle()}
                    >
                        {
                            this.state.bulbToggle ?
                                <Image source={require('../assets/images/bulbOn.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                /> :
                                <Image source={require('../assets/images/bulbOff.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                />
                        }
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}