import React, { useEffect, useState } from 'react';
import Header from '../../layout/Header';
import styled from 'styled-components';
import Main from '../../layout/Main';
import { Route, Routes } from 'react-router-dom';
import data from '../../util/mock/data'
import Detail from '../product/detail/Detail';
import axios from 'axios';
import Cart from '../cart/Cart';

  const Container = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
  `;
  const HeaderArea = styled.div`
      width: 100%;
      background-color : white;
      position : sticky;
      top : 0;
        z-index : 9999;
  `;
  const Body = styled.div`
      width: 100%;
      min-height: 50vh;
  `;

const Display = () => {

  const [ products, setProducts] = useState([]);

  // console.log(products);
  const getProductList = async () => {
    const response = await fetch('http://localhost:9099/api/products');
    const data = await response.json();
    setProducts(data);
  }
  useEffect(()=>{
      getProductList();
    },[]);


  return (
    <div>
      <Container>
        <HeaderArea>
          <Header/>
        </HeaderArea>
        <Body>
          <Routes>
            <Route path='/' element={<Main data={products}/>}/>
            <Route path='/detail/:pId' element={<Detail data={products}/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Body>
      </Container>
    </div>
  );
};

export default Display;