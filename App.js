import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { configureFonts, MD3LightTheme, PaperProvider } from 'react-native-paper';
import LoginButton from './components/LoginButton';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working onr</Text>
      <LoginButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
