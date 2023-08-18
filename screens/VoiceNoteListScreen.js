import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VoiceNoteListScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToRecording = () => {
    navigation.navigate('Record');
  };

  const handleNavigateToPlay = () => {
    navigation.navigate('Play', { note: { title: 'Sample Note' } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Note List</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToRecording}>
        <Text style={styles.buttonText}>Record a Voice Note</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToPlay}>
        <Text style={styles.buttonText}>Play a Voice Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3E9BF7',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VoiceNoteListScreen;
