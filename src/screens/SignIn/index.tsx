import React, { useContext } from 'react';
import {
    View,
    Image,
    Text,
    Alert,
    LogBox,
    ActivityIndicator 
} from 'react-native';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])

import { useAuth } from '../../hooks/auth';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Backgorund';
import IllustrationImg from '../../assets/illustration.png';
import { style } from './styles'
import { theme } from '../../global/styles/theme';


export function SignIn() {

    const { loading, signIn } = useAuth()

    async function handleSignIn() {
        try {
            await signIn()
        } catch (error) {
            Alert.alert(error)
        }
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
                    {
                        loading ? <ActivityIndicator color={theme.colors.primary} /> :
                        <ButtonIcon
                        title="Entrar com o Discord"
                        activeOpacity={0.7}
                        onPress={handleSignIn} />
                    }
                </View>

            </View>
        </Background>

    )
}


