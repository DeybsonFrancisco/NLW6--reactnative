import React from 'react';
import {View, Text} from 'react-native';
import { Avatar } from '../Avatar';

import {style} from './style'

export function Profile(){
    return(
        <View style={style.container}>
            <Avatar urlImage='https://github.com/rodrigorgtic.png'/>
            <View>
                <View style={style.user}>
                    <Text style={style.greeting}>
                        Olá
                    </Text>
                    <Text style={style.username}>
                        Rodrigo
                    </Text>
                </View>
                <Text style={style.message}>
                    Hoje é dia de vitoria
                </Text>
            </View>
        </View>
    )

}