import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Card} from './Card';

const Product = ({product, onPress}) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
  },
});

export default Product