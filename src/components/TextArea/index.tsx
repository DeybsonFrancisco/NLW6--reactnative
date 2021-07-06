import React from 'react';
import { TextInput, TextInputProps} from 'react-native'

import {style} from './style'
import { theme } from '../../global/styles/theme';

export function TextArea({...rest}: TextInputProps){
    return( 
        <TextInput 
        style={style.container}
        />
    )
}