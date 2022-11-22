import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';

interface Props {
    texto: string,
    color: string,
}


export const BotonCalc = ({ texto, color='#2D2D2D' }: Props) => {
  return (
    <View style={{...styles.boton, backgroundColor: color}}>
        <Text style={styles.botonText}>{texto}</Text>
    </View>
  )
}
