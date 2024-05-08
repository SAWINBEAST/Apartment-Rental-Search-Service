import styles from './Error.module.css';

export function Error() {
    return <div className={styles['container']}>    
            <h1>Упс...</h1>
            <p className={styles['error-number']}>#404</p>
            <span>Кажется, такой страницы нет :) Проверьте адресную строку.</span>
        </div>
}