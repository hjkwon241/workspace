import axios from 'axios';
import { useEffect, useState } from 'react';
import React, { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/*
  1. idx라는 pram을 통해서 해당 컴포넌트로 이동(라우팅)
  2. 전달 받은 idx 파라미터를 통해 api에 데이터 요청
  3. 요청 받은 데이터 콘솔에 출력
*/
/*
  1. 게시글 수정버튼 클릭 시 수정할 수 있게 하기
  2. 게시글 삭제버튼 클릭 시 idx를 기준으로 삭제되게 하기
  3. 게시글 목록으로 이동버튼 클릭 시 목록으로 이동하기
*/
  const BoardDetail = () => {

  const {idx} = useParams();
  const [board, setBoard] = useState({});

  const navigate = useNavigate();

  const getBoard = async() => {
  const resp2 = await axios.get(`/board/${idx}`);
  const data = resp2.data;
  setBoard(data);
}
  useEffect(()=>{
  getBoard();
  },[]);

  if(board ===null) return <div>로딩중</div>

  const updateBoard = async() => {
    navigate(`/board/edit/${idx}`);
  }

  const deleteBoard = async() => {
    const resp2 = await axios.delete(`/board/${idx}`);

    if(resp2.status === 200){
      alert('게시글이 삭제되었습니다.')
      navigate('/board')
    }else{
      alert('게시글이 삭제되지 않았습니다.')
    }
  }

  const moveToBoardList = () => {
    navigate('/board');
  }


  return (
    <div>
      <p>{board.content}</p>
      <p>{board.title}</p>
      <p>{board.regDate}</p>
      <div>
        <button onClick={updateBoard}>수정</button>
        <button onClick={deleteBoard}>삭제</button>
        <button onClick={moveToBoardList}>목록으로 이동</button>
      </div>
    </div>
  );
};

export default BoardDetail;