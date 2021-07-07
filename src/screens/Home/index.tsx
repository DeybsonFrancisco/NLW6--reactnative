import React, { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appoitment';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { Background } from '../../components/Backgorund';

import { style } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTINO_APPOINTMENTS } from '../../configs/database';



export function Home() {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState('');
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentsDetails');
    }
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentsCreate');
    }
    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTINO_APPOINTMENTS)
        const storage: AppointmentProps[] = response ? JSON.parse(response) : []

        if (category) {
            setAppointments(storage.filter((item: AppointmentProps) => item.category === category))
        } else {
            setAppointments(storage)
        }
        setLoading(false)
    }

    useFocusEffect(useCallback(()=>{
        loadAppointments()
    }, [category]))

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

            {
                loading ? <Load/> :
                <>
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
                        contentContainerStyle={{ paddingBottom: 69 }}
                        style={style.matches}
                        showsVerticalScrollIndicator={false} />
                </>
            }

        </Background>

    )
}