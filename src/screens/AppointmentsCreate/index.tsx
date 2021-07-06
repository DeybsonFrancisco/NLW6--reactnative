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

export function AppointmentsCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    function handleOpenGuilds() {
        setOpenGuildsModal(true)
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect)
        setOpenGuildsModal(false)
    }

    return (
        <KeyboardAvoidingView
            style={style.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                    setCategory={setCategory}
                    categorySelected={category} />
                <View style={style.form}>
                    <RectButton style={style.select} onPress={handleOpenGuilds}>

                        {
                            guild.icon ?
                                <GuildIcon url={guild.icon}/> :
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
                            <Text style={style.label}>Dia e mês</Text>

                            <View style={style.column}>
                                <SmallInput maxLength={2} />
                                <Text style={style.divider}> / </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={style.label}>Hora e minuto</Text>

                            <View style={style.column}>
                                <SmallInput maxLength={2} />
                                <Text style={style.divider}> : </Text>
                                <SmallInput maxLength={2} />
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
                        autoCorrect={false} />

                    <View style={style.footer}>
                        <Button title="Agendar" />
                    </View>
                </View>
            </ScrollView>
            <ModalView visible={openGuildsModal}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    )

}