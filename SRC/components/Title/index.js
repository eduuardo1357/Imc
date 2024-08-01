import React from 'react';
import { Text, View } from 'react-native';
import  styles from "./style";

export default function Title() {
  return (
    <View style={styles.BoxTitle}>
      <Text style={styles.texTitle}>ONBITHEALTH</Text>
      <Text>01/08/2024</Text>
      <Text>Aula 02 Parte 3</Text>
      
    </View>
  );
}

