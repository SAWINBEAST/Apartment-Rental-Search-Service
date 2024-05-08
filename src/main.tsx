import React from 'react'
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Menu } from './pages/Menu/Menu.tsx';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error } from './pages/Error/Error.tsx';
import { Layout } from './layout/Layout/Layout.tsx';
import { Account } from './pages/Account/Account.tsx';
import Callback from './pages/Callback/Callback.tsx';
import Main  from './pages/Main/Main.tsx';
import Product from './pages/Product/Product.tsx';
import axios from 'axios';
import { ServerURL } from './helpers/API.ts';
import Footer from './components/Footer/Footer.tsx';

// горячая клавиша rfce

//сделать сохранение карточек в кэш страницы, как в myJournal, и добавить кнопку добавления в корзину

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/Menu',  
        element: <Menu />
      },
      {
        path: '/Cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />,
        loader: async ({params}) => {
          const {data} = await axios.get(`${ServerURL}/products/${params.id}`)
          return data;
        }
      },
      {
        path: '/Account',
        element: <Account /> 
      },
      {
        path: '*',
        element: <Error /> 
      },
      {
        path: '/',
        element: <Main /> 
      },
      {
        path: '/Callback',
        element: <Callback /> 
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)

//#region Ideas


// useEffect(() => {
//   if (items.length) {
//     console.log('Записано!');
//     localStorage.setItem('data', JSON.stringify(items))
//   }
// }, [items])



// const addItem = (item) => {
//   // console.log(item);
//   setItems(oldItems => [...oldItems,
//   {
//     post: item.post,
//     title: item.title,
//     date: new Date(item.date),
//     id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
//   }]);
// }


//#endregion




