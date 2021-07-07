import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import uuid from 'react-native-uuid'

import { Background } from '../../components/Backgorund';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';

import { style } from './style';
import { theme } from '../../global/styles/theme';
import { GuildProps } from '../../components/Guild';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTINO_APPOINTMENTS } from '../../configs/database';
import { useNavigation } from '@react-navigation/native';

export function AppointmentsCreate() {


    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation()

    function handleOpenGuilds() {
        setOpenGuildsModal(true)
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect)
        setOpenGuildsModal(false)
    }

    function handleCloseGuilds() {
        setOpenGuildsModal(false)
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId)
    }

    async function handleSave() {
        const appointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} as ${hour}:${minute}h`,
            description
        }
        const storage = await AsyncStorage.getItem(COLLECTINO_APPOINTMENTS)
        const appoitments = storage ? JSON.parse(storage) : []

        await AsyncStorage.setItem(COLLECTINO_APPOINTMENTS, JSON.stringify([...appoitments, appointment]))

        navigation.navigate('Home')
    }


    return (
        <KeyboardAvoidingView
            style={style.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Background>
                <ScrollView>
                    <Header
                        title="Agendar partida"
                    />
                    <Text style={
                        [
                            style.label,
                            {
                                marginLeft: 24,
                                marginTop: 36,
                                marginBottom: 18
                            }
                        ]}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category} />
                    <View style={style.form}>
                        <RectButton style={style.select} onPress={handleOpenGuilds}>

                            {
                                guild.icon ?
                                    <GuildIcon guildId={guild.id} iconId={guild.icon} /> :
                                    <View style={style.image} />
                            }

                            <View style={style.selectBody}>
                                <Text style={style.label}>
                                    {guild.name ? guild.name : 'Selecione um servidor'}
                                </Text>
                            </View>

                            <Feather
                                name="chevron-right"
                                color={theme.colors.heading}
                                size={18}
                            />

                        </RectButton>

                        <View style={style.field}>
                            <View>
                                <Text style={[style.label, { marginBottom: 12 }]}>Dia e mês</Text>

                                <View style={style.column}>
                                    <SmallInput maxLength={2} onChangeText={setDay} />
                                    <Text style={style.divider}> / </Text>
                                    <SmallInput maxLength={2} onChangeText={setMonth} />
                                </View>
                            </View>

                            <View>
                                <Text style={[style.label, { marginBottom: 12 }]}>Hora e minuto</Text>

                                <View style={style.column}>
                                    <SmallInput maxLength={2} onChangeText={setHour} />
                                    <Text style={style.divider}> : </Text>
                                    <SmallInput maxLength={2} onChangeText={setMinute} />
                                </View>
                            </View>
                        </View>
                        <View style={[style.field, { marginBottom: 12 }]}>
                            <Text style={style.label}> Descrição</Text>
                            <Text style={style.caracteresLimit}>Max 100 caracteres</Text>
                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription} />

                        <View style={style.footer}>
                            <Button title="Agendar" onPress={handleSave}/>
                        </View>
                    </View>
                </ScrollView>
                <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                    <Guilds handleGuildSelect={handleGuildSelect} />
                </ModalView>
            </Background>
        </KeyboardAvoidingView>
    )
}