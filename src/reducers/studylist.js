import * as types from '../actions/ActionTypes';

const initialState = {
  seqid : '',
  subject: '',
  data: ''
}

function studylist(state = initialState, action) {
  const { seqid } = state;
  switch (action.type) {
    case types.GET_STUDYDATA:
     if(seqid===action.seqid){
       return {
         ...state,
         seqid: '',
         subject: '',
         data: ''
       }
     } else if(seqid!==action.seqid) {
        return {
          ...state,
          seqid: action.seqid,
          subject: action.studylist.filter(s => s.id===action.seqid)[0].topic,
          data: action.studylist.filter(s => s.id===action.seqid)[0].input
        };
      }
    case types.RESET_SELECTDATA:
      return {
        ...state,
        seqid: '',
        subject: '',
        data: ''
      };
    case types.GET_STUDYCHK:
      return {
        ...state,
        studylist: action.studylist
      }

    default:
      return state;
  }
}

export default studylist;
