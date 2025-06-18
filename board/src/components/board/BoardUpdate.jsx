import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardUpdate = () => {
  const { idx } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    writer: ''
  });

  const getBoard = async() => {
  const resp2 = await axios.get(`/board/${idx}`);
  const data = resp2.data;
  setInputs(data);
}
  useEffect(()=>{
  getBoard();
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    const resp = await axios.put('/board', inputs);
      if (resp.status === 200) {
        alert('게시글 수정이 완료되었습니다.');
        navigate('/board');
      }else{
        alert('게시글 수정이 실패되었습니다.')
      }
    };

  const boardDetail = () => {
    navigate(`/board/${idx}`);
  }

  return (
    <div>
      <h2>게시글 수정</h2>
      <input 
        name="title" 
        value={inputs.title} 
        onChange={handleChange}
      />
      <br />
      <input 
        name="writer" 
        value={inputs.writer} 
        onChange={handleChange}
      />
      <br />
      <textarea 
      name="content" 
      value={inputs.content} 
      onChange={handleChange}
      />
      <br />
      <button onClick={handleUpdate}>수정 완료</button>
      <button onClick={boardDetail}>취소</button>
    </div>
  );
};

export default BoardUpdate;
