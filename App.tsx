import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './state/store/store';
import DashboardScreen from './screens/Dashboard/Dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Products from './screens/Details/products';
import CartIcon from './screens/Details/Icon';

const Stack = createNativeStackNavigator()


function AppWrapper(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "home"
          component={DashboardScreen}
          options={{
            title: "Products",
            headerRight: () => (
              <CartIcon />
            )
          }}
        />
        <Stack.Screen  
        name='products-detail'
        component={Products}
        
        // options={{title: "Products"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  
      // <DashboardScreen />
  
  )
}



export default function App() {
  return (
   <Provider store={store}>
    <AppWrapper /> 
   </Provider>
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
