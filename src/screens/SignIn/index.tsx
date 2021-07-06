import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ButtonIcon';

import { Background } from '../../components/Backgorund';

import IllustrationImg from '../../assets/illustration.png';
import { style } from './styles'

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <Background>
            <View style={style.container}>
                <Image source={IllustrationImg}
                    style={style.image}
                    resizeMode='stretch'
                />

                <View style={style.content}>
                    <Text style={style.title}>
                        Organize {`\n`}
                        suas jogatinas {`\n`}
                        facilmente
                    </Text>
                    <Text style={style.subtitle}>
                        Crie grupos para jogar seus games{`\n`}
                        favoritos com os amigos
                    </Text>
                    <ButtonIcon
                        title="Entrar com o Discord"
                        activeOpacity={0.7}
                        onPress={handleSignIn} />

                </View>

            </View>
        </Background>

    )
}


