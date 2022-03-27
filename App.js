import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pemesanan from './halaman/Pemesanan';
import Detail from './halaman/Detail';
import Konfirmasi from './halaman/Konfirmasi';
import Konfirmasi2 from './halaman/Konfirmasi2';
import riwayat from './halaman/History';
import pembatalan from './halaman/Pembatalan';

const Stack = createNativeStackNavigator();

function MyStack(){
  return (
  <Stack.Navigator
      initialRouteName={"Home"}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#86B257',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Pemesanan} 
          />
        <Stack.Screen 
          name="konfirmasi" 
          component={Konfirmasi} 
          />
        <Stack.Screen 
          name="konfirmasi2" 
          component={Konfirmasi2} 
          />
        <Stack.Screen 
          name="riwayat" 
          component={riwayat} 
          />
        <Stack.Screen 
          name="detail" 
          component={Detail} 
          />
        <Stack.Screen 
          name="batal" 
          component={pembatalan} 
          />
      </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
