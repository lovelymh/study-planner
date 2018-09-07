import * as types from '../actions/ActionTypes';

const initialState = {
  studylist: [],
  seqid: 0,
  subject: '',
  data: '',
  selectedid: ''
}

function studyinput(state = initialState, action) {
  const { studylist, seqid, subject, data, selectedid } = state;
  switch (action.type) {
    case types.SET_STUDYINPUT:
      return {
        ...state,
        data: action.data,
        selectedid: action.selectedid
      }
    case types.SET_STUDYTOPIC:
      return {
        ...state,
        subject: action.subject,
        selectedid: action.selectedid
      }
    case types.INSERT_STUDYINPUT:
        if(subject==='' || data===''){
          alert('내용을 입력해주세요!');
          return state;
        }

        if(studylist.length > 0 && studylist.filter(s => s.id === selectedid).length > 0){
          const nextList = [...studylist];
          const realidx = studylist.findIndex(s => s.id === selectedid);
          nextList[realidx] = {
            id: selectedid,
            topic: (action.subject ? action.subject : subject),
            input: (action.data ? action.data : data),
            checked: false,
            resulttime: 0
          }

          return {
            ...state,
            studylist: nextList,
            selectedid: '',
            data: '',
            subject: ''
          };
        //새로 생성
        } else {
          let nextid = seqid + 1;
          return{
            ...state,
             studylist: [
               ...studylist,
               {
                 id: seqid,
                 topic: subject,
                 input: data,
                 checked: false,
                 resulttime: 0
               }
             ],
             seqid: nextid,
             selectedid: '',
             data: '',
             subject: ''
          };
         }
    case types.DELETE_STUDYINPUT:
      return {
        ...state,
        studylist: studylist.filter(s => s.id !== selectedid),
        selectedid: '',
        data: '',
        subject: ''
      };
    case types.SET_STUDYCHK:
          const nextList = [...studylist];
          const current_idx = studylist.findIndex(s => s.id === action.checkedid);
          nextList[current_idx] = {
            id: action.checkedid,
            topic: studylist[current_idx].topic,
            input: studylist[current_idx].input,
            checked: !nextList[current_idx].checked,
            resulttime: studylist[current_idx].resulttime
          }

          return {
            ...state,
            studylist: nextList
          };
    case types.SET_TIMERTIME:
          const time_nextList = [...studylist];
          const currentidx = studylist.findIndex(s => s.id === action.selectedid);
          time_nextList[currentidx] = {
            id: action.selectedid,
            topic: studylist[currentidx].topic,
            input: studylist[currentidx].input,
            checked: studylist[currentidx].checked,
            resulttime: action.resulttime
          }

          return {
            ...state,
            studylist: time_nextList,
          };
    default:
      return state;
  }
}

export default studyinput;
