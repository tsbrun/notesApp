import { StyleSheet, Text, View } from 'react-native';
import Note from './components/Note';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>NOTES</Text>

      <View style={styles.notesWrapper}>
        <Note />
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
  }
});
