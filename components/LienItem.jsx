import { View, Text, StyleSheet } from "react-native";

export default function LienItem(props) {
  return (
    <View style={styles.lienItem}>
      <Text>{props.lienText}</Text>
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
