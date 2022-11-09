import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Note = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Start writing..." />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    
  },
});

export default Note;