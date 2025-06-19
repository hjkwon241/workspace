import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/product/ProductList';

const Wrapper = styled.div`

`;  

const MainBG = styled.div`
  min-height: 500px;
  background-image: url(/images/main/main1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 50px;
`;

const ButtonArea = styled.div`
    width: 100%;
    display : flex;
    gap : 6px;
    
    button {
        vertical-align: center;
        width: 5%;
        margin: auto;
        min-width: auto;
        padding : 5px;
        border-radius : 5px;
        font-weight : 700;
    }
`;

const PlusButton = styled.button`
    background-color :white;
    color : black;
    border : 1px solid #222;
    cursor : pointer;
`;

const Main = ({data}) => {
  return (
    <Wrapper>
      <MainBG/>
      <ProductList data={data}/>
      {/* <ProductList data={data}/> 삽입 예정 */}
      <ButtonArea>
        <PlusButton>+ 더보기</PlusButton>
      </ButtonArea>
    </Wrapper>
  );
};

export default Main;