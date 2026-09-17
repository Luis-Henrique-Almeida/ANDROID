import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <View>
          <Text style={styles.saudacao}>Olá! </Text>
          <Text style={styles.nome}>Bem-vindo de volta</Text>
        </View>

        <Pressable
          style={styles.botaoPerfil}
          onPress={() => router.push("/perfil")}
        >
          <Ionicons name="person" size={24} color="#f0f0f0" />
        </Pressable>
      </View>

      {/* Card de pontos */}
      <View style={styles.cardPontos}>
        <View style={styles.iconePontos}>
          <Ionicons name="star" size={28} color="#F5B800" />
        </View>

        <View>
          <Text style={styles.labelPontos}>Meus pontos</Text>
          <Text style={styles.numeroPontos}>0</Text>
        </View>
      </View>

      {/* Resumo */}
      <Text style={styles.tituloSecao}>Meu progresso</Text>

      <View style={styles.resumoContainer}>
        <View style={styles.cardResumo}>
          <View style={styles.iconeTarefa}>
            <Ionicons name="checkmark-circle" size={25} color="#2E7D32" />
          </View>

          <Text style={styles.numeroResumo}>0</Text>
          <Text style={styles.labelResumo}>Concluídas</Text>
        </View>

        <View style={styles.cardResumo}>
          <View style={styles.iconePendente}>
            <Ionicons name="time" size={25} color="#EF6C00" />
          </View>

          <Text style={styles.numeroResumo}>0</Text>
          <Text style={styles.labelResumo}>Pendentes</Text>
        </View>

        <View style={styles.cardResumo}>
          <View style={styles.iconeAtrasada}>
            <Ionicons name="alert-circle" size={25} color="#f80c0c" />
          </View>

          <Text style={styles.numeroResumo}>0</Text>
          <Text style={styles.labelResumo}>Pendentes</Text>
        </View>
      </View>

      {/* Ações */}
      <Text style={styles.tituloSecao}>Acessar</Text>

      <Pressable
        style={styles.cardAcao}
        onPress={() => router.push("/tarefas")}
      >
        <View style={styles.iconeAcao}>
          <Ionicons name="list" size={26} color="#f0f0f0" />
        </View>

        <View style={styles.textosAcao}>
          <Text style={styles.tituloAcao}>Minhas tarefas</Text>
          <Text style={styles.subtituloAcao}>Veja suas tarefas e Pontos</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#f0f0f0" />
      </Pressable>

      <Pressable
        style={styles.cardAcao}
        onPress={() => router.push("/recompensas")}
      >
        <View style={styles.iconeAcao}>
          <Ionicons name="gift" size={26} color="#f0f0f0" />
        </View>

        <View style={styles.textosAcao}>
          <Text style={styles.tituloAcao}>Recompensas</Text>
          <Text style={styles.subtituloAcao}>
            Troque seus pontos por recompensas
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#f0f0f0" />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#190522",
  },

  conteudo: {
    padding: 20,
    paddingBottom: 30,
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  saudacao: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#f0f0f0",
  },

  nome: {
    fontSize: 15,
    color: "#f0f0f0",
    marginTop: 4,
  },

  botaoPerfil: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#181724f3",
    justifyContent: "center",
    alignItems: "center",
  },

  cardPontos: {
    backgroundColor: "#181724f3",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },

  iconePontos: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#181724f3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  labelPontos: {
    fontSize: 15,
    color: "#f0f0f0",
  },

  numeroPontos: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f0f0f0",
    marginTop: 2,
  },

  tituloSecao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f0f0f0",
    marginBottom: 12,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },

  resumoContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 28,
  },

  cardResumo: {
    flex: 1,
    backgroundColor: "#181724f3",
    borderRadius: 16,
    padding: 16,
  },

  iconeTarefa: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#181724f3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  iconePendente: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#181724f3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  iconeAtrasada: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#181724f3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  numeroResumo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#f0f0f0",
  },

  labelResumo: {
    fontSize: 14,
    color: "#f0f0f0",
    marginTop: 2,
  },

  cardAcao: {
    backgroundColor: "#181724f3",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  iconeAcao: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#181724f3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  textosAcao: {
    flex: 1,
  },

  tituloAcao: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#F0F0F0",
  },

  subtituloAcao: {
    fontSize: 13,
    color: "#F0F0F0",
    marginTop: 4,
  },
});
