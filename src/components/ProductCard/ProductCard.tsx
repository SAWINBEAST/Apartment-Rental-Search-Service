import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

//поставить максимальную длину на текст товара.

function ProductCard(props: ProductCardProps) {
    const { id, image, title, description, price, flats, metro, like } = props;

    return (
        <Link to={`/product/${id}`} className={styles['link']}>
            <div className={styles['card']}>
                <div className={styles['card-image-block']}>
                    <img className={styles['card-image']} src={image} alt={title} />
                </div>
                <div className={styles['card-content']}>
                    <h3 className={styles['card-title']}>{title}</h3>
                    <p className={styles['card-description']}>{description}</p> 
                    <p className={styles['card-price']}>{price} руб / мес</p>
                    <p className={styles['card-price']}>Кол-во комнат: {flats}</p>
                    <p className={styles['card-price']}>Метро: {metro}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;