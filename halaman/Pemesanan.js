import * as React from 'react';
import react from 'react';
import {TouchableOpacity, View, Text, TextInput, StyleSheet,Image,SafeAreaView, FlatList } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ModalSelector from 'react-native-modal-selector'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Pemesanan({ navigation }) {
    const [Keberangkatan, onChangekeberangkatan] = react.useState(null);
    const [Tujuan, onChangeTujuan] = react.useState();
    const [kelas, onChangekelas] = react.useState();
    const [Tanggal, onChangeTanggal] = react.useState();
    const [jam, onChangejam] = react.useState();
    const [dewasa, onChangedewasa] = react.useState();
    let index = 0;
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    const data = [
            { key: index++, section: true, label: 'Pelabuhan' },
            { key: index++, label: 'Bakauheni'},
            { key: index++, label: 'Merak' },
            { key: index++, label: 'Tanjung Perak' },
            { key: index++, label: 'Tanjung Priok' }
    ];
    const data1 = [
      {   section: true, label: 'Kelas' },
      { key: index1++, label: 'Express'},
      {  key: index1++,label: 'Ekonomi' },
];
const data2 = [
  {   section: true, label: 'Tanggal' },
  { key: index2++, label: 'Minggu 27-03-2022'},
  {  key: index2++,label: 'Senin 28-03-2022' },
  {  key: index2++,label: 'Selasa 29-03-2022' },
  {  key: index2++,label: 'Rabu 30-03-2022' },
  {  key: index2++,label: 'Kamis 31-03-2022' },
  {  key: index2++,label: 'Jumat 01-04-2022' },
  {  key: index2++,label: 'Sabtu 02-04-2022' },
  {  key: index2++,label: 'Minggu 03-04-2022' },
  {  key: index2++,label: 'Senin 04-04-2022' },
  {  key: index2++,label: 'Selasa 05-04-2022' },
];
const data3 = [
  {   section: true, label: 'jam' },
  { key: index3++, label: '01:00'},
  { key: index3++, label: '02:00'},
  { key: index3++, label: '03:00'},
  { key: index3++, label: '04:00'},
  { key: index3++, label: '05:00'},
  { key: index3++, label: '06:00'},
  { key: index3++, label: '07:00'},
  { key: index3++, label: '08:00'},
  { key: index3++, label: '09:00'},
  { key: index3++, label: '10:00'},
  { key: index3++, label: '11:00'},
  { key: index3++, label: '12:00'},
  { key: index3++, label: '13:00'},
  { key: index3++, label: '14:00'},
  { key: index3++, label: '15:00'},
  { key: index3++, label: '16:00'},
  { key: index3++, label: '17:00'},
  { key: index3++, label: '18:00'},
  { key: index3++, label: '19:00'},
  { key: index3++, label: '20:00'},
  { key: index3++, label: '21:00'},
  { key: index3++, label: '22:00'},
  { key: index3++, label: '23:00'},
  { key: index3++, label: '24:00'},
];

    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.background}>
          <View style={styles.form}>
          <Text style={{textAlign:'center',fontSize:34,paddingBottom:50}}>Kapalzy</Text>
          <Text style={{paddingLeft:25}}>Lokasi Keberangkatan</Text>
          <View style={{flexDirection: 'row', width:"90%",paddingLeft:25}}>
            <Image 
            source={require('../assets/kapal.png')} 
            style={styles.imageStyle}
            />
            <ModalSelector
            style={styles.input}
        data={data}
        initValue="Pilih Pelabuhan Awal"
        onChange={(option) => {
          onChangekeberangkatan(option.label);
        }}
      >
        <TextInput
          editable={false}
          placeholder="Pilih Pelabuhan Awal"
          placeholderTextColor={"black"}
          value={Keberangkatan}
        />
      </ModalSelector>
          </View>
          <Text style={{paddingLeft:25}}>Lokasi Tujuan</Text>
          <View style={{flexDirection: 'row', width:"90%",alignItems:"center",paddingLeft:25}}>
            <Image 
            source={require('../assets/kapal.png')} 
            style={styles.imageStyle}
          />  
          <ModalSelector
            style={styles.input}
        data={data}
        initValue="Pilih Pelabuhan Awal"
        onChange={(option) => {
          onChangeTujuan(option.label);
        }}
      >
        <TextInput
          editable={false}
          placeholder="Pilih Pelabuhan Tujuan"
          placeholderTextColor={"black"}
          value={Tujuan}
        />
      </ModalSelector>
          </View>
          <Text style={{paddingLeft:25}}>kelas Keberangkatan</Text>
          <View style={{flexDirection: 'row', width:"90%",alignItems:"center",paddingLeft:25}}>
            <Image 
            source={require('../assets/kapal.png')} 
            style={styles.imageStyle}
            />
          <ModalSelector
            style={styles.input}
        data={data1}
        initValue="Pilih Pelabuhan Awal"
        onChange={(option) => {
          onChangekelas(option.label);
        }}
      >
        <TextInput
          editable={false}
          placeholder="Pilih Layanan"
          placeholderTextColor={"black"}
          value={kelas}
        />
      </ModalSelector>
          </View>
          <Text style={{paddingLeft:25}}>Lokasi Tujuan</Text>
          <View style={{flexDirection: 'row', width:"90%",alignItems:"center",paddingLeft:25}}>
            <Image 
            source={require('../assets/kapal.png')} 
            style={styles.imageStyle}
          />  
          <ModalSelector
            style={styles.input}
        data={data2}
        initValue="Pilih Pelabuhan Awal"
        onChange={(option) => {
          onChangeTanggal(option.label);
        }}
      >
        <TextInput
          editable={false}
          placeholder="Pilih Tanggal Masuk"
          placeholderTextColor={"black"}
          value={Tanggal}
        />
      </ModalSelector>
          </View>
          <Text style={{paddingLeft:25}}>Lokasi Tujuan</Text>
          <View style={{flexDirection: 'row', width:"90%",alignItems:"center",paddingLeft:25}}>
            <Image 
            source={require('../assets/kapal.png')} 
            style={styles.imageStyle}
          />  
          <ModalSelector
            style={styles.input}
        data={data3}
        initValue="Pilih Pelabuhan Awal"
        onChange={(option) => {
          onChangejam(option.label);
        }}
      >
        <TextInput
          editable={false}
          placeholder="Pilih Jam Masuk"
          placeholderTextColor={"black"}
          value={jam}
        />
      </ModalSelector>
          </View>
          <View style={{flexDirection: 'row', width:"90%",paddingLeft:25}}>
          <Text style={{width:'70%'}}>Dewasa</Text>
          <TextInput
            style={{width:'10%',borderWidth:1}}
            onChangeText={onChangedewasa}
            value={dewasa}
          />
          <Text style={{width:'20%', textAlign:"right"}}>Orang</Text>
          </View>
          <View style={{alignItems:"center"}}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('konfirmasi',{
              Keberangkatan: Keberangkatan,
              Tujuan: Tujuan,
              kelas: kelas,
              Tanggal: Tanggal,
              jam: jam,
              dewasa: dewasa,
            })}
            style={{alignItems:"center",width:"60%",backgroundColor:"orange"}} >
            <Text>Buat Ticket</Text>
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
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'stretch',
    },
    col: {
      width: '30%',
      textAlign: 'center',
    },
    col5:{
      width: '50%',
      fontWeight: 'bold',
      textAlign:'center',
    },
    tanggal: {
      textAlign: 'center',
      fontWeight: 'bold',
      width: '100%',
      backgroundColor: '#86B257',
    },
  });
