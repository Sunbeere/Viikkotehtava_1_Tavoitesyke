import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HeartRate Limits Calculator</Text>

      <Text>Enter your age:</Text>

      <TextInput style={styles.input}
      keyboardType="numeric"
      value={age}
      onChangeText={setAge}
      placeholder="Enter age" />
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

    header: { fontSize: 26, fontWeight: 'bold', textAlign: 'left', marginBottom: 30, 
    },

    input: {borderWith: 1, bordercolor: 'gray', padding: 10, marginTop:10, borderRadius: 5, },
});
