import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/AppTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.CalculadoraContainer}> 
        <Text style={styles.resultadoPequeno}> 1,500.00</Text>
        <Text style={styles.resultado}> 1,500.00</Text>

        <View style={styles.fila}>
          {/* Boton */}
          <BotonCalc texto="C" color="#9B9B9B" />
          <BotonCalc texto="+/-" color="#9B9B9B"/>
          <BotonCalc texto="del" color="#9B9B9B"/>
          <BotonCalc texto="/" color="#FF9427"/>
        </View>
    </View>
  )
}
