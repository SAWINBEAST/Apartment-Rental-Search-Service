import styles from './Main.module.css';
import { NavLink } from "react-router-dom";
import cn from 'classnames';


function Main() {
  return (
    <div className={styles['main-container']}>
        <div className={styles['banner-block']}>
                <img className={styles['banner-image']} src={"http://img.advertology.ru/aimages/2020/01/27/cian4.jpg"} alt={"Баннер"} />
        </div>
        
        <NavLink 
        className={({ isActive }) => cn(styles['link'], {[styles.active]: isActive})} 
        to="/Menu"
        >Хочу снять квартиру !</NavLink>

    </div>
        
    
  )
}

export default Main