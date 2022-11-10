import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Note = ({ title, body }) => {
  return (
    <View style={styles.textWrapper}>
      {/* [styles.textWrapper, styles.shadow] */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
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
    marginBottom: 20,
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