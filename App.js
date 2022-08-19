import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
} from "react-native";
import LienItem from "./components/LienItem";

export default function App() {
  const [lienTexteSaisie, setLienTexteSaisie] = useState("");
  const [listeLiens, setListeLiens] = useState([]);

  function ajoutLienHandler() {
    if (lienTexteSaisie.length > 0) {
      setListeLiens((currentListeLiens) => [
        ...listeLiens,
        { id: Math.random().toString(), text: lienTexteSaisie },
      ]);
      setLienTexteSaisie("");
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
          value={lienTexteSaisie}
          style={styles.inputLien}
          onChangeText={lienInputHandler}
        />
        <Button title="Ajouter un lien" onPress={ajoutLienHandler} />
      </View>
      <Image
        source={require("./images/link.png")}
        style={{ width: 15, height: 15 }}
      />
      <View style={styles.lienContainer}>
        <Text style={styles.h1}>Liste des liens:</Text>
        <FlatList
          style={styles.liste}
          data={listeLiens}
          renderItem={(itemData) => {
            return <LienItem lienText={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            item.id;
          }}
        />
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
    maxWidth: "50%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    backgroundColor: "#BAABEE",
    margin: 50,
    minHeight: "8%",
    maxHeight: 80,
  },
  lienContainer: {
    flex: 8,
    backgroundColor: "#A396D0",
    padding: 4,
    width: "70%",
    alignItems: "center",
    margin: 15,
  },
  h1: {
    fontWeight: "bold",
  },
  liste: {
    width: "100%",
  },
});
