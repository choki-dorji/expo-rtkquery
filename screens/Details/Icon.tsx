import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as needed

const CartIcon = () => {
  return (
    <View style={styles.cartContainer}>
      <Icon name="shopping-cart" size={24} color="#000" />
    </View>
  );
};


const styles = StyleSheet.create({
    cartContainer: {
      marginRight: 16,
    },
  
  });
export default CartIcon;