import styles from './Footer.module.css';


function Footer() {
  return (
    <div className={styles['footer-container']}>
      <p className={styles['footer-text']}>Спасибо, что выбираете нас</p>
      <p className={styles['footer-number']}>+7-495-777-99-77</p>
      <p className={styles['footer-text']}>11 лет на службе Поиска Жилья</p>

    </div>
  )
}

export default Footer