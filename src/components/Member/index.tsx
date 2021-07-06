import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import { Avatar } from '../../components/Avatar';
import { theme } from '../../global/styles/theme';
import { style } from './style'

export type MemberProps = {
    id: string,
    username: string,
    avatar_url: string,
    status: string
}
type Props ={
    data: MemberProps
}

export function Member({data}: Props) {
    const isOnline = data.status === 'online';
    const {on, primary} = theme.colors;
    return(
        <View style={style.container}>
            <Avatar urlImage={data.avatar_url}/>
            <View>
                <Text style={style.title}>
                    {data.username}
                </Text>
                <View style={style.status}>

                    <View
                    style={[
                        style.bulletStatus,
                        {
                            backgroundColor: isOnline ? on : primary
                        }
                    ]}
                    />

                    <Text style={style.nameStatus}>
                        {isOnline ? 'Disponível': 'Ocupado'}
                    </Text>
                </View>
            </View>

        </View>
    )
}