import React from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import {View, Text, Image} from 'react-native'

import {style} from './style'
import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props){
    const {secondary50, secondary70} = theme.colors
    return( 
        <LinearGradient
        style ={style.container}
        colors={[secondary50, secondary70]}
        >
            <Image 
            source={{uri: urlImage}}
            style={style.avatar}></Image>
        </LinearGradient>
    )
}