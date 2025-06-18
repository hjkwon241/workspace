import React from 'react';
import {Routes, Route} from 'react-router-dom';
import BoardList from '../board/BoardList';
import Header from '../layout/Header';
import Main from '../layout/Main';
import BoardDetail from '../board/BoardDetail';
import BoardWriter from '../board/BoardWriter';
import BoardUpdate from '../board/BoardUpdate';

const Display = () => {
  const mystyle = {
    margin : '5px',
    padding : '5px',
  }
  return (
    <div style={mystyle}>
      <Header/>
      <Routes>
        <Route path ='/' element={<Main/>}/>
        <Route path ='/board' element={<BoardList/>}/>
        <Route path ='/board/:idx' element={<BoardDetail/>}/>
        <Route path="/write" element={<BoardWriter />} />
        <Route path="board/edit/:idx" element={<BoardUpdate />} />
      </Routes>
    </div>
  );
};

export default Display;