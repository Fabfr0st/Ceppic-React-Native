import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import LienItem from "./components/LienItem";
import LienInput from "./components/LienInput";

export default function App() {
  const [listeLiens, setListeLiens] = useState([]);

  const addListeLiens = (lienTexte) => {
    setListeLiens((currentListeLiens) => [
      ...listeLiens,
      { id: Math.random().toString(), text: lienTexte },
    ]);
  }

  return (
    <View style={styles.container}>
      <LienInput liste={listeLiens} setListe={addListeLiens} />
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
