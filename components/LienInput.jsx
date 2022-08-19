import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function LienInput(props) {
  const [lienTexteSaisie, setLienTexteSaisie] = useState("");

  function lienInputHandler(texteSaisie) {
    setLienTexteSaisie(texteSaisie);
  }

  function ajoutLienHandler() {
    if (lienTexteSaisie.length > 0) {
      props.setListe(lienTexteSaisie);
      setLienTexteSaisie("");
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Nouveau lien..."
        value={lienTexteSaisie}
        style={styles.inputLien}
        onChangeText={lienInputHandler}
      />
      <Button title="Ajouter un lien" onPress={ajoutLienHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
