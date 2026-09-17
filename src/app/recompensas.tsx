import { StyleSheet, Text, View } from "react-native";

export default function Recompensas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎁 Recompensas</Text>

      <Text style={styles.texto}>Nenhuma recompensa cadastrada ainda.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181724f3",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  texto: {
    fontSize: 17,
  },
});
