import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-community/picker'


export default function App() {
  const [selectedGradeValue, setSelectedGradeValue] = React.useState(100);
  let totalPoints = selectedGradeValue
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedGradeValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedGradeValue(itemValue)}
      >
        <Picker.Item label="5.5" value={100} />
        <Picker.Item label="5.6" value={120} />
        <Picker.Item label="5.7" value={140} />
      </Picker>

      <Text>Your total score: {totalPoints}</Text>
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


