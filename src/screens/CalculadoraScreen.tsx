import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.CalculadoraContainer}> 
        <Text style={styles.resultadoPequeno}> 1,500.00</Text>
        <Text style={styles.resultado}> 1,500.00</Text>

        <View>
          {/* Boton */}
          <View style={styles.boton}>
            <Text style={styles.botonText}>1</Text>
          </View>
        </View>
    </View>
  )
}
