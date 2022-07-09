import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ saludo }) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);

    const { categoryId } = useParams();

/*
    useEffect(() => {
        const URL = categoryId
            ? `https://api.storerestapi.com/products/category/${categoryId}`
            : 'https://api.storerestapi.com/products'
        fetch(URL)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [categoryId]); */


    useEffect(() => {
        const URL = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products'
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [categoryId]); 

    return (
        <>
            <h1>{saludo}</h1>
            {loaded ? <CircularProgress color="primary" /> : <ItemList products={products} />}
        </>
    )
}


export default ItemListContainer


