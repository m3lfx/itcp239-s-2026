import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import { Surface, Text, TextInput, Searchbar } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import ProductList from './ProductList'


const data = require('../../assets/data/products.json')
var { height, width } = Dimensions.get('window')
const ProductContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([])
        }
    }, [])

    return (
        <Surface width="100%" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text variant="displaySmall">Search</Text>
            <FlatList

                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={2}
                data={products}

                renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                keyExtractor={item => item.name}
            />



        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductContainer;