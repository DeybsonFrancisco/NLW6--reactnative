import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appoitment';
import { ListDivider } from '../../components/ListDivider';

import { Background } from '../../components/Backgorund';

import { style } from './style'



export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg',
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
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxf_7_jv_C2XHinjmiW1PmPaTwB9G8JKcvA&usqp=CAU',
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam!'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentsDetails');
    }
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentsCreate');
    }

    return (
        <Background>
            <View style={style.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect} />
            </View>


            <ListHeader
                title='Partidas agendadas'
                subtitle='Total 6' />


            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment
                        data={item}
                        onPress={handleAppointmentDetails} />

                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{paddingBottom: 69}}
                style={style.matches}
                showsVerticalScrollIndicator={false} />

        </Background>

    )
}