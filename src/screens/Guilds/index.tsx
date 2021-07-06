import React from 'react';
import {
    View,
    Image,
    Text,
    FlatList
} from 'react-native';

import {Guild, GuildProps} from '../../components/Guild';
import {ListDivider} from '../../components/ListDivider';

type Props ={
    handleGuildSelect: (guild: GuildProps) => void;
}

import { style } from './styles'

export function Guilds({handleGuildSelect}: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Mercenário',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RfeYtcDQLTqC-SNvXiyJZN4BG27_VxomBA&usqp=CAU',
            owner: true
        },
        {
            id: '2',
            name: 'Lendários',
            icon: 'https://play-lh.googleusercontent.com/v6PK3-TL9StKJRaEa8FcHnrGdM0tJMnvCLsrQx0sE0kVU2cYRdiUTizlm2NHC9Piiw',
            owner: true
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1ea70e0-6b84-41e0-945a-9388d618e4a0/dbzlden-dff4e505-f1ae-499b-a654-54c20eea2e25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxZWE3MGUwLTZiODQtNDFlMC05NDVhLTkzODhkNjE4ZTRhMFwvZGJ6bGRlbi1kZmY0ZTUwNS1mMWFlLTQ5OWItYTY1NC01NGMyMGVlYTJlMjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kHPzxk9Js3Omy5IhZbd14Yl6CoFGiKigxvAo-vpPlXg',
            owner: true
        },
        {
            id: '4',
            name: 'Mercenário',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RfeYtcDQLTqC-SNvXiyJZN4BG27_VxomBA&usqp=CAU',
            owner: true
        },
        {
            id: '5',
            name: 'Lendários',
            icon: 'https://play-lh.googleusercontent.com/v6PK3-TL9StKJRaEa8FcHnrGdM0tJMnvCLsrQx0sE0kVU2cYRdiUTizlm2NHC9Piiw',
            owner: true
        },
        {
            id: '6',
            name: 'Lendários',
            icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1ea70e0-6b84-41e0-945a-9388d618e4a0/dbzlden-dff4e505-f1ae-499b-a654-54c20eea2e25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxZWE3MGUwLTZiODQtNDFlMC05NDVhLTkzODhkNjE4ZTRhMFwvZGJ6bGRlbi1kZmY0ZTUwNS1mMWFlLTQ5OWItYTY1NC01NGMyMGVlYTJlMjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kHPzxk9Js3Omy5IhZbd14Yl6CoFGiKigxvAo-vpPlXg',
            owner: true
        },
        {
            id: '7',
            name: 'Mercenário',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RfeYtcDQLTqC-SNvXiyJZN4BG27_VxomBA&usqp=CAU',
            owner: true
        },
        {
            id: '8',
            name: 'Lendários',
            icon: 'https://play-lh.googleusercontent.com/v6PK3-TL9StKJRaEa8FcHnrGdM0tJMnvCLsrQx0sE0kVU2cYRdiUTizlm2NHC9Piiw',
            owner: true
        },
        {
            id: '9',
            name: 'Lendários',
            icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1ea70e0-6b84-41e0-945a-9388d618e4a0/dbzlden-dff4e505-f1ae-499b-a654-54c20eea2e25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxZWE3MGUwLTZiODQtNDFlMC05NDVhLTkzODhkNjE4ZTRhMFwvZGJ6bGRlbi1kZmY0ZTUwNS1mMWFlLTQ5OWItYTY1NC01NGMyMGVlYTJlMjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kHPzxk9Js3Omy5IhZbd14Yl6CoFGiKigxvAo-vpPlXg',
            owner: true
        },
    ]
    return (
        <View style={style.container}>
            <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <Guild data={item} onPress={() =>handleGuildSelect(item)}/>
            )}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{paddingBottom: 69, paddingTop: 104}}
            style={style.guilds}/>
        </View>

    )
}


