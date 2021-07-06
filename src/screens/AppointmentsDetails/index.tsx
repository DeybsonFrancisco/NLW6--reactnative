import React from 'react';
import { Fontisto } from "@expo/vector-icons"
import {
    ImageBackground,
    Text,
    View,
    FlatList
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import { Background } from '../../components/Backgorund';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member } from '../../components/Member'
import { ButtonIcon } from '../../components/ButtonIcon'

import { style } from './style'
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'

export function AppointmentsDetails() {
    const members = [
        {
            id: '1',
            username: "Rodrigo",
            avatar_url: "https://www.freefiremania.com.br/cartoonfreefire/4c02e9398a9af4daab073b8dbeab7042.jpg",
            status: 'online'
        },
        {
            id: '2',
            username: "Miguel",
            avatar_url: "https://pbs.twimg.com/media/Eq8FQH7W4AEO3tI.jpg",
            status: 'ofline'
        },
        {
            id: '3',
            username: "Arthur",
            avatar_url: "https://www.freefiremania.com.br/cartoonfreefire/6ea7e7ffdcae4d19c4a61596b8d64a99.jpg",
            status: 'online'
        },

    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
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
                        Lendários
                    </Text>
                    <Text style={style.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da m10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadore"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={style.members}>

            </FlatList>

            <View style={style.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )

}