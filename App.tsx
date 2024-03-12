import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    //Visualizar(view)- adicionar texto(text)
    <View style={styles.container}>
      <Text style={styles.field}>Olá Fernanda</Text>
      <TextInput style={styles.txtField} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6666ff',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
  },
  field:{
    color: 'white',
    fontSize: 30,
  },
  txtField: {
    backgroundColor: 'rgb(204, 179, 255)',
    width: 'auto',
    borderRadius:10,
    padding: 10,
    marginTop:10,
  }
});
