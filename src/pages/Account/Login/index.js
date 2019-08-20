import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../../../services/auth';
import * as HttpStatus from 'http-status-codes';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'dpontes@trinapse.com.br',
            password: 'a'
        }
    }

    login = async () => {
        try {
            const { email, password } = this.state;
            
            const usuario = await auth.authenticate(email, password);

            if (usuario.status == HttpStatus.OK) {
                this.props.navigation.navigate("Home");    
            } else {
                Alert.alert(usuario.status);
            }

        } catch (error) {
           Alert.alert(error);
        }
        finally {
            
        }
    }

    render () {
        return (
            <View>
                <Text>Email</Text>
                <TextInput value={this.state.email} onChangeText={(email) => this.setState({ email }) } />
                
                <Text>Password</Text>
                <TextInput value={this.state.password} onChangeText={(password) => this.setState({ password }) } />

                <TouchableOpacity onPress={this.login}>
                    <Text>Logar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}