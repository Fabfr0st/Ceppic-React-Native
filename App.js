import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [lienTexteSaisie, setLienTexteSaisie] = useState("");
  const [listeLiens, setListeLiens] = useState([]);

  function ajoutLienHandler() {
    if (lienTexteSaisie.length > 0) {
      setListeLiens([...listeLiens, lienTexteSaisie]);
    }
  }

  function lienInputHandler(texteSaisie) {
    setLienTexteSaisie(texteSaisie);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nouveau lien..."
          style={styles.inputLien}
          onChangeText={lienInputHandler}
        />
        <Button title="Ajouter un lien" onPress={ajoutLienHandler} />
      </View>
      <View style={styles.lienContainer}>
        <Text style={styles.h1}>Liste des liens:</Text>
        <FlatList
          style={styles.liste}
          data={listeLiens}
          renderItem={({ item }) => <Text>• {item}</Text>}
        ></FlatList>
      </View>
      <View style={styles.rienContainer}></View>
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
    maxWidth: "50%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    backgroundColor: "#BAABEE",
    margin: 50,
  },
  lienContainer: {
    flex: 8,
    backgroundColor: "#A396D0",
    padding: 4,
    width: "70%",
    alignItems: "center",
  },
  rienContainer: {
    flex: 2,
  },
  h1: {
    fontWeight: "bold",
  },
  liste: {
    width: "100%",
  },
});
