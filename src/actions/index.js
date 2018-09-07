//액션 생성자 만들기
import * as types from './ActionTypes';

export const setDate = (date) => ({
  type: types.SET_DATE,
  date
})

//studyinputContainer
export const setstudyinput = (data, selectedid) => ({
  type: types.SET_STUDYINPUT,
  data,
  selectedid
})

export const setstudytopic = (subject, selectedid) => ({
  type: types.SET_STUDYTOPIC,
  subject,
  selectedid
})

export const insertstudyinput = (seqid, data) => ({
  type: types.INSERT_STUDYINPUT,
  seqid,
  data
})

export function insert_studyinput(seqid, data) {
  return (dispatch, getState) => {
    dispatch(insertstudyinput(seqid, data));
    dispatch(reset_selectdata());
    const selectedid = getState().selectData.seqid;
    if(selectedid){
      const topic = getState().inputData.studylist.filter(s=> s.id === selectedid)[0].topic;
      dispatch(set_selectedid(selectedid, topic, ''));
    }
    const studylist = getState().inputData.studylist;
    dispatch(get_studylist(studylist));
  }
}

export const deletestudyinput = (seqid) => ({
  type: types.DELETE_STUDYINPUT,
  seqid
})

export function delete_studyinput(seqid) {
  return (dispatch, getState) => {
    dispatch(deletestudyinput(seqid));
    dispatch(reset_selectdata()); //seletdata 초기화
    dispatch(set_selectedid('', '', '')); //타이머 삭제..
    const studylist = getState().inputData.studylist;
    dispatch(get_studylist(studylist));
  }
}

export const set_studytimer = (selectedid, resulttime) => ({
    type: types.SET_TIMERTIME,
    selectedid,
    resulttime
})

//더블클릭 이벤트시
export function getstudydata(seqid) {
    return (dispatch, getState) => {
        const studylist = getState().inputData.studylist;
        const data = getState().inputData.data;
        dispatch(get_studydata(seqid, studylist, data)); //selectData 세팅

        const data2 = getState();
        dispatch(setstudyinput(data2.selectData.data, data2.selectData.seqid));
        dispatch(setstudytopic(data2.selectData.subject, data2.selectData.seqid));
        dispatch(set_selectedid(seqid, data2.selectData.subject, ''));
        dispatch(get_selectedtimer(data2.selectData.seqid, data2.inputData.studylist));
    }
}

export const get_studydata = (seqid, studylist, data) => ({
            type: types.GET_STUDYDATA,
            seqid,
            studylist,
            data
})


export function setstudychk(checkedid) {
    return (dispatch, getState) => {
              const studylist = getState().inputData.studylist;
              dispatch(set_studylistchk(checkedid, studylist));
              const reset_studylist = getState().inputData.studylist;
              dispatch(get_studylist(reset_studylist));
              dispatch(get_studychk(reset_studylist));
    }
}


export const set_studylistchk = (checkedid, studylist) => ({
    type: types.SET_STUDYCHK,
    checkedid,
    studylist
})

export const reset_selectdata = () => ({
    type: types.RESET_SELECTDATA
})

//Timer
export const start_timer = () => ({
    type: types.START_TIMER
})

export const restart_timer = () => ({
    type: types.RESTART_TIMER
})

export const stop_timer = () => ({
    type: types.STOP_TIMER
})

export function stoptimer(){
  return (dispatch, getState) => {
    dispatch(stop_timer());
    const selectedid = getState().selectData.seqid;
    const resulttime = getState().timeData.resulttime;
    dispatch(set_studytimer(selectedid, resulttime));
  }
}

export const reset_timer = () => ({
    type: types.RESET_TIMER
})

export function resetimer(){
  return (dispatch, getState) => {
    dispatch(reset_timer());
    const selectedid = getState().selectData.seqid;
    const resulttime = getState().timeData.resulttime;
    dispatch(set_studytimer(selectedid, resulttime));
  }
}

export const add_time = () => ({
    type: types.ADD_TIME
})

export const set_selectedid = (seqid, subject, resulttime) => ({
    type: types.SET_SELECTEDID,
    seqid,
    subject,
    resulttime
})

export const get_selectedtimer = (seqid, studylist) => ({
    type: types.GET_SELECTEDTIMER,
    seqid,
    studylist
})

export const get_studychk = (studylist) => ({
    type: types.GET_STUDYCHK,
    studylist
})

//FinishmemoContainer
export const save_textarea = (textvalue) => ({
    type: types.SAVE_TEXTAREA,
    textvalue
})

export const set_textvalue = (textvalue) => ({
    type: types.SET_TEXTVALUE,
    textvalue
})

//PiechartContainer
export const get_studylist = (studylist) => ({
    type: types.GET_STUDYLIST,
    studylist
})
