import React from 'react'
import styles from './Callback.module.css';

function Callback() {

 async function SendForm (e:FormData){
    
    //e.preventDefault();
    // const formData = new FormData(e.target);
    // const formKeys = Object.fromEntries(formData);
    await console.log(e);
    confirm();
}


  return (
    <div className={styles['form-container']}>

        <h1>Так, так, так ...</h1>
        <h2>Чем можем вам помочь?</h2>

        <form className={styles['form']} onSubmit={SendForm}>
            <input type="text" name="problem" placeholder='В чем суть вопроса ?' className={styles['input']} />
            <input type="tel" name="tel" placeholder='Оставьте свой номер телефона' className={styles['input']} />
            <input type="text" name="clientName" placeholder='Как вас зовут?' className={styles['input']} />
            <textarea title="problem" name="post" placeholder="Опишите ваш запрос подробнее..." cols="30" rows="10" className={styles['input']}></textarea>
            <button className={styles['button-form']}> Отправить заявку </button>
        </form>

    </div>
  )
}

export default Callback