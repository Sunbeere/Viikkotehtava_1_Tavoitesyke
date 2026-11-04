import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('');

  const ageNumber = Number(age);

  const lowerLimit = age !== '' && Number.isFinite(ageNumber)
    ?(220 - ageNumber)* 0.65
    : 0;

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
      <Text>Lower limit:{lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    paddingTop: 60,
    paddingLeft:20,
   
  },

    header: { fontSize: 26, fontWeight: 'bold', textAlign: 'left', marginBottom: 30, 
    },

    input: { borderWidth: 1, borderColor: 'gray', padding: 10, marginTop:10, borderRadius: 5, width:100},
});
