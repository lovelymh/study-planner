import * as types from '../actions/ActionTypes';

const initalState = {
  textvalue: '',
  storedmemo: ''
}

function memo(state = initalState, action) {
  switch (action.type) {
    case types.SAVE_TEXTAREA:
      if(action.textvalue===''){
        alert('내용을 입력해주세요!');
        return state;
      }
      return {
        ...state,
        storedmemo: action.textvalue
      }
    case types.SET_TEXTVALUE:
      return {
        ...state,
        textvalue: action.textvalue
      }
    default:
      return state;
  }
}

export default memo;
