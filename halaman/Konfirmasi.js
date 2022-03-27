import * as React from 'react';
import react from 'react';
import {TouchableOpacity, View, Text, TextInput, StyleSheet,Image,SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Konfirmasi({ navigation, route }) {
  const {Keberangkatan, Tujuan, kelas, Tanggal, jam, dewasa } = route.params;
  const harga = 65000*dewasa;
  return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.background}>
          <View style={styles.form}>
          <Text style={{textAlign:'center',fontSize:34,paddingBottom:50}}>Kapalzy</Text>
          <Text style={{paddingLeft:25}}>Kuota tersedia (10000)</Text>
          <Text style={{paddingLeft:25}}>Rincian Ticket</Text>
          <View style={styles.item}>
    <View style={styles.baris}>
        <Text style={styles.baris1}>{Keberangkatan}</Text>
        <Text style={styles.baris1}>---</Text>
        <Text style={styles.baris1}>{Tujuan}</Text> 
    </View>
    <View style={styles.baris}>
      <Text style={styles.baris2}>{Tanggal}</Text>
    </View>
    <View style={styles.baris}>
      <Text style={styles.baris2}>{jam}</Text>
    </View>
    <View style={styles.baris}>
      <Text style={styles.baris2}>{kelas}</Text>
    </View>
    <View style={styles.baris}>
      <Text style={styles.baris2}>dewasa x{dewasa}</Text>
      <Text style={{width: '50%',textAlign:"center"}}>{harga}</Text>
    </View>
  </View>
  <View style={{paddingLeft:25,flexDirection: 'row'}}>
      <Text style={styles.baris2}>Total</Text>
      <Text style={{width: '50%',textAlign:"center"}}>{harga}</Text>
    </View>
          <View style={{paddingLeft:25,alignItems:"center",flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{alignItems:"center",margin:15,width:"40%",backgroundColor:"orange"}} >
            <Text>Kembali</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('konfirmasi2',{
              Keberangkatan: Keberangkatan,
              Tujuan: Tujuan,
              kelas: kelas,
              Tanggal: Tanggal,
              jam: jam,
              dewasa: dewasa,
            })}
            style={{alignItems:"center",width:"40%",backgroundColor:"orange"}} >
            <Text>Lanjutkan</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
        <View style={{flexDirection: 'row',textAlign:'center',backgroundColor:'#F2F2F2', height:50}}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home',{
              Keberangkatan: Keberangkatan,
              Tujuan: Tujuan,
              kelas: kelas,
              Tanggal: Tanggal,
              jam: jam,
              dewasa: dewasa,
            })}
            style={{width:"25%"}} >
              <MaterialCommunityIcons name="home" size={30}/>
            <Text>Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('detail',{
              Keberangkatan: Keberangkatan,
              Tujuan: Tujuan,
              kelas: kelas,
              Tanggal: Tanggal,
              jam: jam,
              dewasa: dewasa,
            })}
            style={{width:"25%"}} >
              <MaterialCommunityIcons name="book" size={30}/>
            <Text>Pesanan Saya</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('batal',{
              Keberangkatan: Keberangkatan,
              Tujuan: Tujuan,
              kelas: kelas,
              Tanggal: Tanggal,
              jam: jam,
              dewasa: dewasa,
            })}
            style={{width:"25%"}} >
              <MaterialCommunityIcons name="cash" size={30}/>
            <Text>Pembatalan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('riwayat',{
              Keberangkatan: Keberangkatan,
              Tujuan: Tujuan,
              kelas: kelas,
              Tanggal: Tanggal,
              jam: jam,
              dewasa: dewasa,
            })}
            style={{width:"25%",height:"100%"}} >
              <MaterialCommunityIcons name="menu" size={30}/>
            <Text>Lainnya</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    background:{
      backgroundColor: "#86B257",
      flex: 1,
    },
    imageStyle: {
      padding: 5,
      margin: 5,
      height: 40,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    form:{
      flex:1,
      justifyContent:"center",
      pending: 15,
      margin:50,
      backgroundColor:"white",
      borderRadius:15,
    },
    input: {
      height: 40,
      width:'80%',
      margin: 5,
      borderWidth: 1,
      padding: 5,
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        elevation: 5,
        paddingLeft:25
      },
      baris: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
      },
      baris1: {
        width: '30%',
        textAlign: 'center',
      },
      baris2:{
        width: '50%',
        fontWeight: 'bold',
        // textAlign:'center',
      },
    tanggal: {
      textAlign: 'center',
      fontWeight: 'bold',
      width: '100%',
      backgroundColor: '#86B257',
    },
  });
