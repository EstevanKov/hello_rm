import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={estilos.container}>
      <View style={estilos.azul}></View>
      <View style={estilos.naranja}></View>
      <View style={estilos.rojo}></View>
    </View>
  );
}

const estilos= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  azul: {
    height: 60,
    width: '50%',
    backgroundColor: 'blue',
  },
  naranja: {
    height: 60,
    width: '75%',
    backgroundColor: 'orange',
  },
  rojo: {
    height: 60,
    width: '100%',
    backgroundColor: 'red',
  },
});
