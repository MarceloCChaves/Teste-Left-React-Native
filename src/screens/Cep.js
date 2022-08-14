import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from "../services/api"

export default function App() {
  const [searchCEP, setSearchCEP] = useState("");
  const [Cep, setCep] = useState({});

  async function handleSearch(){
    try {
      const response = await api.get(`${searchCEP}`)
      setCep(response.data)
    } catch {
      alert("Erro, CPF inválido")
      setSearchCEP("")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um cep no formato xxxxxxxx"
        keyboardType="numeric"
        value={searchCEP}
        onChangeText={(e) => setSearchCEP(e)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.text}>Pesquisar CEP</Text>
      </TouchableOpacity>
      <View style={styles.info}>
        <Text>CEP: {Cep.cep}</Text>
        <Text>{Cep.city} - {Cep.state}</Text>
        <Text>Rua: {Cep.street}</Text>
        <Text>Bairro: {Cep.neighborhood}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#347355',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8
  },
  button: {
    backgroundColor: "#223240",
    padding: 16,
    borderRadius: 8
  },
  text: {
    color: "#fff",
    textAlign: 'center'
  },
  info: {
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8
  }
});