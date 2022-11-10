import React, { createElement, useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Note from './components/Note';

export default function App() {
  const [newNote, setNewNote] = useState(false);
  const [note, setNote] = useState(
    {
      title: "",
      body: ""
    }
  );
  const [notes, updateNotes] = useState([
    {
      title: "Test",
      body: "Sample text to make sure the text wraps so you don’t have to scroll horizontally to see your note."
    },
    {
      title: "I'm hungry",
      body: "I want french fries"
    }
  ]);

  // handleEditNote = (index) => {
  //   // find note from notes
  //   // render w/ EditNote.js
  //   // updateNotes 
  //   // render w/ Note.js
  // };

  const clearNote = () => {
    setNote(
      {
        title: "",
        body: "",
      }
    )
  }

  const saveNote = () => {
    Keyboard.dismiss();
    clearNote();
    setNewNote(false);
    updateNotes([...notes, note]);
  }

  if (newNote) {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>NOTES</Text>

        <View style={styles.notesWrapper}>

          <TextInput 
          style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 20}}
          placeholder='Title' 
          value={note.title} 
          onChangeText={text => setNote({...note, title: text})} 
          />

          <TextInput 
          placeholder='Your text here...' 
          value={note.body} 
          onChangeText={text => setNote({...note, body: text})} 
          />

        </View>

        <TouchableOpacity style={styles.newNoteBtn} onPress={() => saveNote()}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#81D4FA'}}>Save Note</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
      return (
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>NOTES</Text>
    
          <View style={styles.notesWrapper}>
            {
              notes.map( (note, index) => {
                return (
                  <TouchableOpacity key={index}>
                    {/* onPress={() => handleEditNote(index)} */}
                    <Note title={note.title} body={note.body} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
    
          <TouchableOpacity style={styles.newNoteBtn} onPress={() => setNewNote(true)}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#81D4FA'}}>New Note</Text>
          </TouchableOpacity>
        </View>
      );
  }

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
    justifyContent: 'space-between'
  },
  newNoteBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
