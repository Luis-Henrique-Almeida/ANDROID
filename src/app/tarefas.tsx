import { StyleSheet, Text, View } from "react-native";

export default function Tarefas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Minhas tarefas</Text>

      <Text style={styles.texto}>Nenhuma tarefa cadastrada ainda.</Text>
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
