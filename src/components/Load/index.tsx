import React from 'react';
import { View, ActivityIndicator}from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';
import { style } from './style';

type Props = RectButtonProperties & {
    title: String
}
export function Load(){
    return (
       <View style={style.container}>
           <ActivityIndicator
           size="large"
           color={theme.colors.primary}/>
       </View>
    )
}