import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import HeaderIconButton from '../components/HeaderIconButton'
import Product from '../components/Product'
import {AuthContext} from '../contexts/AuthContext'
import {UserContext} from '../contexts/UserContext'
import axios from 'axios'
import { API_BASE_URL } from '../config'

const ProductsListScreen = ({navigation}) => {
    const {logout} = React.useContext(AuthContext)
    const user = React.useContext(UserContext)
    const [products, setProducts] = React.useState('')

    React.useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => <HeaderIconButton name={'log-out'} onPress={() => {logout()}} />
        })
    }, [navigation, logout])

    React.useEffect( ()=> {
        axios.get(`${API_BASE_URL}/v1/items`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        .then( (response) => {
            console.log(response)
            setProducts(response.data)
        })
        .catch((e)=> {
            console.log(e)
        })
    }, [])

  function renderProduct({item: product}) {
    return (
      <Product product={product} />
    );
  }

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#fafafa',
  },
  productsListContainer: {
    backgroundColor: '#fafafa',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default ProductsListScreen