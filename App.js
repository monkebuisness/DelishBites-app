import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { configureFonts, MD3LightTheme, PaperProvider } from 'react-native-paper';
import LoginButton from './components/LoginButton';
import LoginForum from './components/LoginForum';
import CustomSearchBar from './components/CustomSearchBar';



export default function App() {
  return (
    <>
    <View style={styles.container}>
    <CustomSearchBar/>
      <StatusBar style="auto" />
    </View>
    </>
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
