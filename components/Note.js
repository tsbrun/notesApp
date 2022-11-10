import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Note = () => {
  return (
    <View style={styles.textWrapper}>
      {/* [styles.textWrapper, styles.shadow] */}
      <TextInput style={styles.title} placeholder="Title" />

      <TextInput style={styles.body} multiline={true} placeholder="Start writing..." />
    </View>
  )
}

const styles = StyleSheet.create({
  textWrapper: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  // shadow: {
  //   shadowColor: '#EAECEE',
  //   shadowOffset: {width: 5, height: -5},
  //   shadowOpacity: 0.2,
  //   shadowRadius: 10,
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  body: {
    
  },
});

export default Note;