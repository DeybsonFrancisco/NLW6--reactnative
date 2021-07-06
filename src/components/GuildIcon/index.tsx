import React from 'react';
import {Image} from 'react-native';

import { style } from './style'




type Props =  {
   url: string | null
}

export function GuildIcon({url}: Props){
    const uri = url? url : 'image.jpg'
    return( 
        <Image
        source={{uri}}
        style={style.image}
        resizeMode='cover'
        />

    )
}