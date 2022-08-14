import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function App() {

  const navigation = useNavigation();

  function navigateToCep(){
    navigation.navigate('Cep');
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/CepSearch.png")}
      />
      <TouchableOpacity style={styles.button} onPress={navigateToCep}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#347355',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: "#223240",
    width: 300,
    padding: 16,
    borderRadius: 8
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: 'center'
  }
});