import React from 'react';
import {Text} from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import { style } from './style';

type Props = RectButtonProperties & {
    title: String
}
export function Button({title, ...rest}: Props){
    return (
        <RectButton style={style.container } {...rest}  >
            <Text style={style.title}>
                {title}
            </Text>
        </RectButton>
    )
}