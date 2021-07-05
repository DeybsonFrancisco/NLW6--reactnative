import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native';
import { categories } from '../../utils/categories';
import { Category } from '../Category';


import { style } from './style'

type Props = {
    categorySelected: string,
    setCategory: (category: string) => void;
}

export function CategorySelect({categorySelected, setCategory} : Props){
    return(
        <ScrollView
        horizontal
        style={style.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 40}}>
            {
                categories.map(category => (
                    <Category 
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={()=> setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
        
    )
}