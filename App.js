import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Note from './components/Note';

export default function App() {
  const [notes, updateNotes] = useState([
    {
      title: "Test",
      body: "Sample text to make sure the text wraps so you don’t have to scroll horizontally to see your note."
    },
    {
      title: "I'm hungry",
      body: "I want french fries"
    }
  ])
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>NOTES</Text>

      <View style={styles.notesWrapper}>
        {
          notes.map( (note, index) => {
            return <Note key={index} title={note.title} body={note.body} />
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  notesWrapper: {
    paddingTop: 40,
    // flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
