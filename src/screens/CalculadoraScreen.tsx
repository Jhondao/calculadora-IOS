import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/AppTheme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

  const {
    numeroAnterior,
    numero,
    limpiar,
    postivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  } = useCalculadora();

  return (
    <View style={styles.CalculadoraContainer}> 
      {
        (numeroAnterior !== '0') && (
          <Text style={styles.resultadoPequeno}> {numeroAnterior} </Text>
        ) 
          
      }
        <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit> {numero} </Text>

        {/* fila de botones */}
        <View style={styles.fila}>
          <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
          <BotonCalc texto="+/-" color="#9B9B9B" accion={postivoNegativo}/>
          <BotonCalc texto="del" color="#9B9B9B" accion={btnDelete}/>
          <BotonCalc texto="/" color="#FF9427" accion={btnDividir}/>
        </View>
        
        {/* fila de botones */}
        <View style={styles.fila}>
          <BotonCalc texto="7" accion={ armarNumero }/>
          <BotonCalc texto="8" accion={ armarNumero }/>
          <BotonCalc texto="9" accion={ armarNumero }/>
          <BotonCalc texto="X" color="#FF9427" accion={btnMultiplicar}/>
        </View>

        {/* fila de botones */}
        <View style={styles.fila}>
          <BotonCalc texto="4" accion={ armarNumero }/>
          <BotonCalc texto="5" accion={ armarNumero }/>
          <BotonCalc texto="6" accion={ armarNumero }/>
          <BotonCalc texto="-" color="#FF9427" accion={btnRestar}/>
        </View>

        {/* fila de botones */}
        <View style={styles.fila}>
          <BotonCalc texto="1" accion={ armarNumero }/>
          <BotonCalc texto="2" accion={ armarNumero }/>
          <BotonCalc texto="3" accion={ armarNumero }/>
          <BotonCalc texto="+" color="#FF9427" accion={btnSumar}/>
        </View>

        {/* fila de botones */}
        <View style={styles.fila}>
          <BotonCalc texto="0" ancho accion={ armarNumero } />
          <BotonCalc texto="." accion={ armarNumero }/>
          <BotonCalc texto="=" color="#FF9427" accion={calcular} />
        </View>
    </View>
  )
}
