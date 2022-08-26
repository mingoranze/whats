import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Linking,
  Image,
} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState('');

  const click = () => {
    Linking.openURL(`https://wa.me/55${numero}`);
  };

  return (
    <View style={estilo.area}>
      <View style={estilo.areaItem}>
        <Image 
        source={require('./whats')}
        style={{width:50, height:50}}
        />
        <TextInput
          style={estilo.input}
          keyboardType="numeric"
          value={numero}
          onChangeText={n=>setNumero(n)}
          placeholder="Digite o numero com DDD"
        />
        <Button title="iniciar conversa" onPress={click} />
      </View>
        <Text style={estilo.subTitulo}> Desenvolvido por Keven Mingoranze </Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ccc'
  },

  areaItem: {
    backgroundColor: '#001524',
    width: 200,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },

  input: {
    width: 180,
    height: 30,
    borderWidth: 1,
    marginBottom: 13,
    backgroundColor:'#fff',
    padding: 5,
    borderRadius: 5,
    marginTop:20,
  },
  subTitulo: {
    fontSize: 10,
  },
});

export default App;
