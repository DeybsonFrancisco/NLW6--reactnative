import React, { useState } from 'react';
import {View, Text, FlatList} from 'react-native';

import {Profile} from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appoitment';
import { ListDivider } from '../../components/ListDivider';

import { style } from './style'


export function Home(){
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon:  '',
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam!'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon:  '',
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam!'
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    return(
        <View>
            <View style={style.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}/>
            </View>

            <View style={style.content}>
                <ListHeader
                title='Partidas agendadas'
                subtitle='Total 6'/>
            </View>

            <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Appointment data={item}/>
                
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={style.matches}
            showsVerticalScrollIndicator={false}/>

        </View>

    )
}