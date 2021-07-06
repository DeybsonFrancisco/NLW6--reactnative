import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const style = StyleSheet.create({
    container:{
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        borderRadius: 8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginLeft: 4,
        paddingHorizontal: 16,
        marginTop: 16,
        textAlignVertical: 'top',
        borderColor: theme.colors.secondary50
    }
})