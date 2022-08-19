import { View, Text, StyleSheet, Pressable } from "react-native";

export default function LienItem(props) {
  return (
    <View style={styles.lienItem}>
      <Pressable onPress={props.onSupprimerItem.bind(this, props.id)}>
        <Text>{props.lienText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  lienItem: {
    backgroundColor: "lightblue",
    marginTop: 20,
    color: "green",
    padding: 8,
  },
});
