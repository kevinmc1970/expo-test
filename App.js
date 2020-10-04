import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [test, setTest] = useState(0); 

  const handleOnPress = () => {
    setTest(test + 1);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!! {test}</Text>
      <StatusBar style="auto" />
      <Button title="Click" onPress={handleOnPress}></Button>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
