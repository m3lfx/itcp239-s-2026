import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { Surface, Text, TextInput, Searchbar } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import ProductList from './ProductList'
import SearchedProduct from "./SearchedProduct";
import Banner from "../../Shared/Banner";


const data = require('../../assets/data/products.json')
var { height, width } = Dimensions.get('window')
const ProductContainer = () => {

    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState('');
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState([]);
    const [initialState, setInitialState] = useState([])
    const [productsCtg, setProductsCtg] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([])
        }
    }, [])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    return (
        <Surface width="100%" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Searchbar
                placeholder="Search"
                onChangeText={(text) => [searchProduct(text), setKeyword(text), setFocus(true)]}
                value={keyword}

                onClearIconPress={onBlur}

            />
            {focus === true ? (
                <SearchedProduct
                    productsFiltered={productsFiltered}
                />
            ) : (

                <View style={styles.listContainer} >
                    <View>
                        <Banner />
                    </View>
                </View>



            )}




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