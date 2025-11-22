import { StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigators/AppNavigator';
import "./src/i18n";
import { AppProvider } from './src/context/useAsyncStorage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
