import { StyleSheet, Text, View } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👤 Meu perfil</Text>

      <Text style={styles.texto}>Usuário</Text>

      <Text style={styles.pontos}>⭐ Pontos: 0</Text>
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
    fontSize: 18,
    marginBottom: 10,
  },

  pontos: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
