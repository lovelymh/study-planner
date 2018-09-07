import studyinput from './studyinput';
import studylist from './studylist';
import timer from './timer';
import memo from './memo';
import piechart from './piechart';


import { combineReducers } from 'redux';

const reducers = combineReducers({
  inputData: studyinput,
  selectData: studylist,
  timeData: timer,
  memoData: memo,
  pieData: piechart
})

export default reducers;
