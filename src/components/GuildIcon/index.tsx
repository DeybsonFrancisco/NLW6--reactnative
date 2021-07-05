import React from 'react';
import {Image} from 'react-native';


import { style } from './style'




type Props =  {

}

export function GuildIcon({}: Props){
    const uri = 'https://pbs.twimg.com/profile_images/980640647165116416/9m4JVaVA_400x400.jpg';
    return( 
        <Image
        source={{uri}}
        style={style.image}
        resizeMode='cover'
        />

    )
}