/* eslint-disable */ //경보 무시 주석(불필요한 경우에만 사용)
import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ProductList = ({data}) => {

  const ProductGrid = styled.div`
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

  return (
      <ProductGrid>
        {
          data.map(product => {
            return <Product key={product.id} data={product}/>
          })
        }
      </ProductGrid>
  );
};

export default ProductList;