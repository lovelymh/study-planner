import * as types from '../actions/ActionTypes';
import pretty_resulttime from '../utils/PrettyTime';

const initialState = {
  countingstatus: false,
  resulttime: 0,
  prettytime: '00:00:00',
  seqid: '',
  subject: ''
}

function timer(state = initialState, action) {
  const { resulttime } = state;

  switch (action.type) {
    case types.START_TIMER:
      return {
        ...state,
        countingstatus: true
      }
    case types.STOP_TIMER:
      return {
        ...state,
        countingstatus: false
      }
    case types.RESET_TIMER:
      return {
        ...state,
        countingstatus: false,
        resulttime: 0,
        prettytime: '00:00:00'
      }
    case types.ADD_TIME:
      let next_perttytime;
      if(resulttime > 359999) { //99시간 59분 59초
        return {
          ...state,
          countingstatus: false,
          resulttime: 0,
          prettytime: '00:00:00'
        };
      } else {
        next_perttytime = pretty_resulttime(resulttime, 1);
      }

      return {
        ...state,
        resulttime: resulttime + 1,
        prettytime: next_perttytime
      }
      case types.SET_SELECTEDID:
        return {
          ...state,
          seqid: action.seqid,
          subject: action.subject,
          resulttime: (action.resulttime==='' ? 0 : action.resulttime),
          prettytime: (action.resulttime==='' ? '00:00:00' : pretty_resulttime(action.resulttime))
        }
      case types.GET_SELECTEDTIMER:
        if(action.seqid||action.seqid===0) {
          return {
            ...state,
            countingstatus: false,
            resulttime: action.studylist.filter(s=>s.id===action.seqid)[0].resulttime,
            prettytime: pretty_resulttime(action.studylist.filter(s=>s.id===action.seqid)[0].resulttime)
          }
        } else {
          return {
            countingstatus: false,
            resulttime: 0,
            prettytime: '00:00:00',
            seqid: action.seqid,
            subject: ''
          }
        }
    default:
      return state;
  }
}

export default timer;
