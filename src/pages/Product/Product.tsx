import { useLoaderData } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import styles from './Product.module.css';
import { NavLink } from "react-router-dom";
import cn from 'classnames';

//сделать переход обратно в каталог из странички с товаром при нажатии на кнопку.

function Product() {


    
    const data = useLoaderData() as Product
    return (
        <div className={styles['product']}>
            <div className={styles['product-image-block']}>
                <img className={styles['product-image']} src={data.image} alt={data.title} />
            </div>
            <div className={styles['product-content']}>
                <h3 className={styles['product-title']}>{data.title}</h3>
                <p className={styles['product-description']}>{data.description}</p>
                <p className={styles['product-price']}>{data.price} рублей</p>
                <p className={styles['product-price']}>Кол-во комнат: {data.flats}</p>
                <p className={styles['product-price']}>Метро: {data.metro}</p>
            </div>

            <NavLink 
            className={({ isActive }) => cn(styles['link'], {[styles.active]: isActive})} 
            to="/Menu"
            >← Назад в каталог</NavLink>

            <button className={styles['btn-add']} onClick={()=>console.log(data.id)}>➴  Добавить в корзину </button>
           

        </div>

    )
}

export default Product;