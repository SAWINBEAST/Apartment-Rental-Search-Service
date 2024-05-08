import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Product } from "../../interfaces/product.interface";
import { ServerURL } from "../../helpers/API";
import ProductCard from "../../components/ProductCard/ProductCard";

import styles from './Cart.module.css';
import ProductList from "../../components/ProductList/ProductList";


export function Cart() {

    const [products, setProducts] = useState<Product[]>([]);

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${ServerURL}/products`);
             setProducts(data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, []);


    const newProducts = products.filter((product) => product.like==true);

    return <>
        <h2 className={styles['title']}>Ваши любимые квартиры :</h2>

         <ProductList products={newProducts} />    

         </>
    
    //#region Legacy

    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('data'));
    //     if (data) {
    //       setItems(data.map(item => ({
    //         ...item,
    //         date: new Date(item.date)
    //       })));
    //     }
    //   }, []);

    //let selectedItems : Array<number>;

    // <h2>Пусто !</h2>
    // <p>Вы пока что ничего не добавили</p>

    //#endregion 

}