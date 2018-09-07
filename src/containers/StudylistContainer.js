import Studylist from '../components/Studylist';
import * as actions from '../actions';
import { connect } from 'react-redux';

//store안의 state값을 props로 연결
const mapStateToProps = (state) => ({
  studylist: state.selectData.studylist,
  subject: state.selectData.subject,
  data: state.inputData.data,
  seqid: state.selectData.seqid
});

//액션 생성자를 통해 액션을 생성함
//액션을 dispatch하는 함수를 만들고, props로 연결
const mapDispatchToProps = (dispatch) => ({
  onGetdata: (seqid) => dispatch(actions.getstudydata(seqid)),
  onchkClick: (checkedid) => dispatch(actions.setstudychk(checkedid)),
  onResetdata: () => dispatch(actions.reset_selectdata()),
  getstudychk: () => dispatch(actions.get_studychk())
});

const StudylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Studylist);

export default StudylistContainer;
