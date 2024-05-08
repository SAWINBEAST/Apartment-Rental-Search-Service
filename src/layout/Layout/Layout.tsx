import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import cn from 'classnames';

export function Layout() {

    //

return <div className={styles['container']}>
        <div className={styles['header']}>
            <div className={styles['nav']}>

                <NavLink 
                className={({ isActive }) => cn(styles['link'],
                {[styles.active]: isActive })} 
                to="/">
                Главная
                </NavLink> 

                <NavLink 
                className={({ isActive }) => cn(styles['link'],
                {[styles.active]: isActive })} 
                to="/Menu">
                Каталог
                </NavLink> 


                <NavLink className={({ isActive }) => cn(styles['link-account'], {[styles.activeAccount]: isActive})} to="/Account">
                    <div className={styles['account']}>
                        <div className={styles['avatar']}>
                                <img className={styles['avatar-image']} src="/logo.jpg" alt="Аватарка" />
                        </div>
                        <div className={styles['account-info']}>
                            <h2 className={styles['account-name']}>Александр Савин</h2>    
                            <p className={styles['account-mail']}>2savinbuslov2@gmail.com</p>
                        </div>
                        <div className={styles['tooltip']}>
                            <span className={styles['tooltiptext']}>Личный кабинет</span>
                        </div>
                    </div>
                </NavLink>


                <NavLink 
                className={({ isActive }) => cn(styles['link'],
                {[styles.active]: isActive})} 
                to="/Cart">
                Избранное
                </NavLink>

                <NavLink 
                className={({ isActive }) => cn(styles['link'],
                {[styles.active]: isActive })} 
                to="/Callback">
                Заявка
                </NavLink> 
            
            </div>
            
        </div>
        <div className={styles['main-content']}>
            <Outlet />
        </div>

       
    <div> 
        <img className={styles['shop-logo']} src="/shoplogo.png" alt="Логотип магазина" />
    </div>

    </div>
}