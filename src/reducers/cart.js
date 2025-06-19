import { ADD_ITEM, DELETE_ITEM, INCREASE, DECREASE } from "./type";

//초기 상태 값 설정
const initialState = [
  
];

const cart = (state=initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, count: item.count + 1 }
          : item
      );

    case DECREASE:
      return state.map(item =>
        item.id === action.payload.id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );

    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);

    case ADD_ITEM:
      return [...state, action.payload]; //전개 배열

    default:
      return state;
  }
};
export default cart;