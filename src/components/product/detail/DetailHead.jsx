import React from 'react';
import styled from 'styled-components';
import formatKoreanCurrency from '../../../util/mock/display/display';
import DecsriptionList from './DecsriptionList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../actions/cartAction';
import { useNavigate } from 'react-router-dom';

const BR = styled.div`
  width: 100%;
  height: 13px;
  border-bottom: 1px solid #999;
`;
const DetailHeadArea = styled.div`
    width: 100%;
    display : flex;
    flex-direction : row;
    margin-bottom : 100px;
    padding-bottom : 100px;
    border-bottom : 1px solid #999;
`;
const DetailMainImg = styled.div`
    flex : 1;
    height : 500px;
    background-image: url(/images/product/${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding : 50px;
`;
const Description = styled.div`
    flex : 1;
    height : 500px;
    padding : 50px;
`;
const Title = styled.span`
    font-size: 32px;
    font-weight: bold;
    display: block;
    margin: 20px 0;
`;
const PriceTitle = styled.span`
    font-size: 32px;
    font-weight: bold;
    display: block;
    margin: 20px 0;
`;
const InfoArea = styled.div`
    display: table;
    width: 100%;
    table-layout: fixed;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 8px;
`;

const ButtonArea = styled.div`
    width: 100%;
    display : flex;
    gap : 6px;
    
    button {
        vertical-align: top;
        width: 50%;
        margin: 0;
        min-width: auto;
        padding : 15px;
        border-radius : 5px;
        font-weight : 700;
    }
`;
const CartAddButton = styled.button`
    background-color : white;
    color : #333;
    border : 1px solid gray;
`;
const BuyButton = styled.button`
    background-color : #bcd530;
    color : #fff;
    border : 1px solid #bcd530;
`;
// const MyButton = styled.button`
//     background-color :${props=>props.bg};
//     color : ${props=>props.color || 'white'};
//     border : 1px solid ${props=>props.border};
//     cursor : pointer;
// `;

const DetailHead = ({data}) => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartAddItem=() => {
    const obj = {
      id : data.id,
      productName : data.title,
      price : data.price,
      count : 1
      }; 

    //1. 메세지 없이 개수 증가
    //2. 장바구니에 이미 담겨져있다는 메세지를 알리고, 개수 증가 (*이미 담긴 상품을 장바구니 버튼 눌렀을 때->메세지 창(담기 or 안 담기)->장바구니 페이지 개수 +1 증가)
    //3. 장바구니에 이미 담겨져있다는 메세지를 알리고, 담지 않음 (*이미 담긴 상품을 장바구니 버튼 눌렀을 때->메세지 창(담기 or 안 담기)->아무런 변화x


    dispatch(addItem(obj));

    // eslint-disable-next-line no-restricted-globals
    if(confirm('장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?')){
      navigate('/cart');
    }
  }

  return (
    <DetailHeadArea>
      <DetailMainImg image={data.main}/>
      <Description>
        <Title>{data.title}</Title>
        <PriceTitle>
          {formatKoreanCurrency(data.price)}
        </PriceTitle>
        <BR/>

        <InfoArea>
          <DecsriptionList
            contents={{dt:'원산지', dd:'상품 정보 참고'}}/>
          <DecsriptionList
            contents={{dt:'배송비', dd:'3500원'}}/>
          {/* 원산지 배송비 */}
        </InfoArea>
        
        <ButtonArea>
          <CartAddButton onClick={handleCartAddItem}>장바구니</CartAddButton>
          {/* <MyButton bg='#999' color='#333' border='#555'>장바구니</MyButton> */}
          <BuyButton>바로구매</BuyButton>
        </ButtonArea>
      </Description>
    </DetailHeadArea>
  );
};

export default DetailHead;