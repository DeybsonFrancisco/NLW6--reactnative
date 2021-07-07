import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList
} from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

import { style } from './styles'

export function Guilds({ handleGuildSelect }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    async function fecthGuilds(){
        const response = await api.get('/users/@me/guilds')
        setGuilds(response.data)
        setLoading(false)
    }

    useEffect(()=>{
        fecthGuilds()
    }, [])

    return (
        <View style={style.container}>
            {
                loading ? <Load /> :
                    <FlatList
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild data={item} onPress={() => handleGuildSelect(item)} />
                        )}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDivider />}
                        contentContainerStyle={{ paddingBottom: 69, paddingTop: 104 }}
                        style={style.guilds} />}
        </View>

    )
}


