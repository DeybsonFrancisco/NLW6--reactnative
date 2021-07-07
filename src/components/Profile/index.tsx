import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';

import { style } from './style'

export function Profile() {

    function handleSignOut(){
        Alert.alert('Logout', 'Deseja sair do Gameplay?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => signOut()
            },

        ])
    }

    const{user, signOut} = useAuth()
    return (
        <View style={style.container}>
            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={style.user}>
                    <Text style={style.greeting}>
                        Olá
                    </Text>
                    <Text style={style.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={style.message}>
                    Hoje é dia de vitoria
                </Text>
            </View>
        </View>
    )

}