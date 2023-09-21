import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import LOader from '../../components/Dashboard/loader/loader'
import { useGetProductByIdQuery } from '../../state/Dashboard/Dashboard.slice'
import CartIcon from './Icon'

export default function Products({route} : {route: any}) {

  const {id} = route.params
  console.log(id)
  const {data: product, isLoading, error} = useGetProductByIdQuery(id)



  if(isLoading){
    return <LOader />
  }
  if(error){
    return "error"
  }

  // console.log("data", data)

  return (
    product &&
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <Button title="Add to Cart" onPress={() => {/* Handle add to cart */}} />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 16,
  },
});
