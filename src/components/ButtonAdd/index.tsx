import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { style } from './style';
import { theme } from '../../global/styles/theme';


export function ButtonAdd({...rest}: RectButtonProperties){
    return (
        <RectButton 
        style={style.container}
        {...rest}
        >
            <MaterialCommunityIcons
            name='plus'
            color={theme.colors.heading}
            size={24}/>
        </RectButton>
    )
}