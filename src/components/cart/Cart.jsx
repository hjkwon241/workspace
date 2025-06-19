import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { decrease, deleteItem, increase } from '../../actions/cartAction';

const CartWrapper = styled.div`
  max-width: 80%;
  margin: auto;

  table {
    width: 100%;
  }
  td {
    text-align: center;
  }
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartDeleteItem = (id) => {
    console.log(id);
    dispatch(deleteItem(id));
    alert('상품이 장바구니에서 삭제되었습니다.')
  };

  const cartIncreaseItem = (item) => {
    console.log("증가", item);
    dispatch(increase(item));
  }

  const cartDecreaseItem = (item) => {
    console.log("감소", item);
    dispatch(decrease(item))
  }

  return (
    <CartWrapper>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품 이름</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => {
          return(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>
                <button onClick={() => cartDecreaseItem(item)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => cartIncreaseItem(item)}>+</button>
              </td>
              <td>{item.price*item.count}</td>
              <td>
                <button onClick={() => handleCartDeleteItem(item.id)}>삭제</button>
              </td>
            </tr>
          )})}
        </tbody>
      </table>
    </CartWrapper>
  );
};

export default Cart;