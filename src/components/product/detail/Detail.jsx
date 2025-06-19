import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailBody from './DetailBody';
import DetailHead from './DetailHead';
import Spinner from '../../spinner/Spinner';

  const DetailWrapper = styled.div`
    margin : 60px auto 0;
    max-width : 1200px;
    width : 80%;
  `;

const Detail = ({data}) => {

  const {pId} = useParams();

  // console.log(data);
  // console.log(pId);

  //1.
  // const product = {...data[pId-1]};

  //2.filter - 배열로 전달됨
  // const product = data.filter(obj => obj.id === parseInt(pId));
  // console.log(product);

  //3.find - 객체로 전달됨
  const product = data.find(obj => obj.id === parseInt(pId));
  // console.log(product);

  if(!product) return <Spinner/>; //에러를 방지해주는 정도(임시)

  return (
    <DetailWrapper>
          <DetailHead data={product} />
          <DetailBody detail={product.detail} />
    </DetailWrapper>
  );
};

export default Detail;