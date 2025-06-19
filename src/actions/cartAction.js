import { ADD_ITEM, DELETE_ITEM, INCREASE, DECREASE } from "../reducers/type";

function addItem(item){
  return{
    type : ADD_ITEM,
    payload : item,
  }
}
function deleteItem(id){
  return{
    type : DELETE_ITEM,
    payload : id,
  }
}

function increase(id){
  return{
  type : INCREASE,
  payload : id,
  }
}
function decrease(id){
  return{
  type : DECREASE,
  payload : id,
  }
}

export {addItem, deleteItem, increase, decrease };