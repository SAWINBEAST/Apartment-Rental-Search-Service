import styles from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { ProductListProps } from './ProductList.props';

function ProductList({products}: ProductListProps) {
    return (
        <div className={styles['cards']}>
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    price={p.price}
                    image={p.image}
                    flats={p.flats}
                    metro={p.metro}
                    like={p.like}
                />
            ))}
        </div>
    )
}

export default ProductList