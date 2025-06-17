import axios from 'axios';
import { useEffect, useState } from 'react';
import React, { useParams } from 'react-router-dom';

/*
  1. idx라는 pram을 통해서 해당 컴포넌트로 이동(라우팅)
  2. 전달 받은 idx 파라미터를 통해 api에 데이터 요청
  3. 요청 받은 데이터 콘솔에 출력
*/
const BoardDetail = () => {

  const {idx} = useParams();
  const [board, setBoard] = useState({});

const getBoard = async() => {
  const resp2 = await axios.get(`/board/${idx}`);
  const data = resp2.data;
  setBoard(data);
}
useEffect(()=>{
  getBoard();
  },[]);

  if(board ===null) return <div>로딩중</div>

  return (
    <div>
      <p>{board.idx}</p>
      <p>{board.content}</p>
      <p>{board.writer}</p>
      <p>{board.title}</p>
      <p>{board.regDate}</p>
    </div>
  );
};

export default BoardDetail;