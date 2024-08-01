import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/components/Title';
import Form from './SRC/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Eduardo, Gabriel</Text>
      <Title></Title>
      <Form></Form>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
