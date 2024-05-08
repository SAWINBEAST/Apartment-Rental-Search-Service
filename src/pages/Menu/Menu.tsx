import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Product } from "../../interfaces/product.interface";
import { ServerURL } from "../../helpers/API";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './Menu.module.css';
import ProductList from "../../components/ProductList/ProductList";

export function Menu() {

    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | undefined>();

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${ServerURL}/products`);
             setProducts(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(`${error.name} - ${error.message}`);
            }
        }
    }

    useEffect(() => {
        getProduct()
    }, []);

    return <div>
        
        <h2 className={styles['title']}>Сегодня сдаются в аренду :</h2>
        {error && <div className={styles['error-load-products']}>
                     <h2>Проблемка ...</h2>
                     <br/>
                     <div className={styles['error-name']}>{error}</div>
                     <br/>
                    <h3>Мы уже решаем её !</h3>
                </div>}
        <ProductList products={products} />

    </div>
}

