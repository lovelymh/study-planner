import * as types from '../actions/ActionTypes';

const initalState = {
  studylist_chkrate: {}
}

function piechart(state = initalState, action) {
  switch (action.type) {
    case types.GET_STUDYLIST:
      const chk = action.studylist.filter(s => s.checked===true).length
      const no_chk = action.studylist.filter(s => s.checked===false).length
      return {
        studylist_chkrate: {
          chk: chk,
          no_chk: no_chk
        }
      };
    default:
      return state;
  }
}

export default piechart;
