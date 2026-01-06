import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'


import ProductContainer from './Screens/Product/ProductContainer'
import HomeNavigator from './Navigators/HomeNavigator';
import Header from './Shared/Header';
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <ProductContainer />
        {/* <HomeNavigator /> */}
      </View>
    </NavigationContainer>
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
