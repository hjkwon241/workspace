import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardWriter = () => {
  const [inputs, setInputs] = useState({
    title : '',
    writer : '',
    content : ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
      setInputs((inputs) => ({
      ...inputs,
      [name]: value
    }));
  };

  const registerBoard = async () => {
    const resp = await axios.post('/board', inputs);

    if(resp.status === 200){
      // alert('게시글 등록이 완료되었습니다.')
      navigate('/board')
    }else{
    alert('등록이 실패되었습니다.');
  }
  };

  const resetInputs = () => {
    setInputs({
    title : '',
    writer : '',
    content : ''
    })
  }

  // 1. 빈 값 검증 방법-1
  const {title, writer, content} = inputs;
  if(!title || !writer || !content){
    alert("모든 내용을 입력하세요.");
    return;
  }

  // 2. 빈 값 검증 방법-2
  // const inputArr = Object.values(inputs);
  // const isEmpty = inputArr.some(value => value === '');
  // if(isEmpty){
  //   alert("모든 내용을 입력하세요.");
  //   return;
  // }

  const moveToBoardList = () => {
    navigate('/board');
  }

  return (
    <div>
      <div>
        <label>제목</label>
        <input type='text' name='title' value={inputs.title}
          onChange={handleChange}/>
      </div>
      <div>
        <label>작성자</label>
        <input type='text' name='writer' value={inputs.writer}
          onChange={handleChange}/>
      </div>
      <div>
        <label>내용</label>
        <textarea cols='30' rows='10' name='content' value={inputs.content}
          onChange={handleChange}></textarea>
      </div>
      <div>
        <button onClick={registerBoard}>등록</button>
        <button onClick={resetInputs}>다시 입력</button>
        <button onClick={moveToBoardList}>목록으로 이동</button>
      </div>
    </div>
  );
};

export default BoardWriter;