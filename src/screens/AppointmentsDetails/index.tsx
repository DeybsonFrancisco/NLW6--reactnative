import React, { useState, useEffect } from 'react';
import { Fontisto } from "@expo/vector-icons"
import {
    ImageBackground,
    Text,
    View,
    FlatList,
    Alert,
    Share
} from 'react-native';
import * as Linking from 'expo-linking'

import { BorderlessButton } from 'react-native-gesture-handler'

import { Background } from '../../components/Backgorund';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member, MemberProps } from '../../components/Member'
import { ButtonIcon } from '../../components/ButtonIcon'

import { style } from './style'
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appoitment';
import { api } from '../../services/api';
import { Load } from '../../components/Load';
import { GuildProps } from '../../components/Guild';
import { Platform } from 'react-native';

type Params = {
    guildSelected: AppointmentProps,

}
type GuildWidget = {
    id: string,
    name: string,
    instant_invite: string
    members: MemberProps[],
    presence_count: number
}

export function AppointmentsDetails() {
    const [loading, setLoading] = useState(true);
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);

    const route = useRoute()
    const { guildSelected } = route.params as Params

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
            setWidget(response.data)
        } catch (error) {
            Alert.alert('Verifique as configurações do servidor. Será que o widget está habilitado?')
        } finally {
            setLoading(false)
        }
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios' ?
            `Junte-se a ${guildSelected.guild.name}` :
            widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        })
    }

    function handleOpenLinking() {
        Linking.openURL(widget.instant_invite)
    }

    useEffect(() => {
        fetchGuildWidget()
    }, [])


    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    guildSelected.guild.owner &&
                    <BorderlessButton onPress={handleShareInvitation}>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary} />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                style={style.banner}
                source={BannerImg}>
                <View style={style.bannerContent}>
                    <Text style={style.title}>
                        {guildSelected.guild.name}
                    </Text>
                    <Text style={style.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>

            {loading ? <Load /> :
                <>
                    <ListHeader
                        title="Jogadore"
                        subtitle={widget.members ?
                            widget.members.length >= 100 ? '+100' : `${widget.members.length}`
                            : '-'}
                    />

                    <FlatList
                        data={widget.members}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Member data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={style.members}>

                    </FlatList>
                </>
            }

            {
                guildSelected.guild.owner &&
                <View style={style.footer}>
                    <ButtonIcon title="Entrar na partida" onPress={handleOpenLinking} />
                </View>
            }
        </Background>
    )

}