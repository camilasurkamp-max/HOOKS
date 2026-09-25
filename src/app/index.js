import { Stack } from "expo-router";
import { useState } from "react";
import {Button, FlatList, StyleSheet, Text, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Lista() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function adicionar() {
    setLista([...lista, texto]);
    setTexto("");
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Lista de músicas" }} />

      <TextInput
        style={styles.campo}
        value={texto}
        onChangeText={setTexto}
        placeholder="Nova música"
      />

      <Button title="ADICIONAR"
      color="purple" 
      onPress={adicionar} />

      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,         //espacamento do campo de digitacao com o cabecalho
    paddingTop: 20,
  },

  campo: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    color: "black",
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginTop: 20,      //estilo do espacamento entre o primeiro item adicionado na lista com o botao add 
  },

  item: {
    backgroundColor: "silver",
    borderRadius: 5,
    padding: 16,                  //estilos dos itens da lista
    marginBottom: 10,
    fontSize: 15,
    color: "black",
  },
});