import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput defaultValue="Nouveau lien..." style={styles.inputLien} />
        <Button title="Ajouter un lien" />
      </View>
      <View style={styles.lienContainer}>
        <Text>Liste des liens:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8D77D8",
    alignItems: "center",
    justifyContent: "center",
  },
  styleTexte: {
    color: "red",
  },
  inputLien: {
    borderColor: "limegreen",
    borderWidth: 1,
    padding: 1,
    margin: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    backgroundColor: "#BAABEE",
  },
  lienContainer: {
    backgroundColor: "#A396D0",
    padding: 4,
  },
});
