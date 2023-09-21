import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native';
import { typeproducts } from '../../types';
import SearchInput from './search/search';
import { useNavigation } from '@react-navigation/native';


const DashboardComponents = ({ products } : {products: typeproducts[]}) => {
    // console.log(products)
    const navigation = useNavigation()
    const onPressbutton = (id: string | number) => {
      //@ts-ignore
        navigation.navigate("products-detail", {id: id})
    }
  return (
    // <Text>Choki</Text>
    <ScrollView>
    <Text style={styles.title1}>Search input</Text>
    
    <FlatList
        data={products}
        renderItem={
            //@ts-ignore
            ({item, index}) => {
                return (
                    <TouchableOpacity style={styles.card} onPress={() => onPressbutton(item.id)}>
                         <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.title} {item.id}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </TouchableOpacity>
                )
            }
        }
    />
    </ScrollView>
  )
};



const styles = StyleSheet.create({
  card: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  title1: {
    marginVertical: 50,
    fontSize: 32,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    color: 'green',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default DashboardComponents;

