import Studyinputform from '../components/Studyinputform';
import * as actions from '../actions';
import { connect } from 'react-redux';

//store안의 state값을 props로 연결
const mapStateToProps = (state) => ({
  studylist: state.inputData.studylist,
  subject: state.inputData.subject,
  data: state.inputData.data,
  seqid: state.inputData.seqid,
  selectedid: state.inputData.selectedid,
  checked: state.inputData.checked,
  resulttime: state.inputData.resulttime
});

//액션 생성자를 통해 액션을 생성함
//액션을 dispatch하는 함수를 만들고, props로 연결
const mapDispatchToProps = (dispatch) => ({
  onChange: (e, selectedid) => dispatch(actions.set_studyinput(e.target.value, selectedid)),
  onChangetopic: (e, selectedid) => dispatch(actions.set_studytopic(e.target.value, selectedid)),
  oninsert: (seqid, data) => dispatch(actions.insert_studyinput(seqid, data)),
  ondelete: (seqid) => dispatch(actions.delete_studyinput(seqid)),
  onSettimer: (selectedid, resulttime)=> dispatch(actions.set_studytimer(selectedid, resulttime))
});


const StudyinputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Studyinputform);

export default StudyinputContainer;
