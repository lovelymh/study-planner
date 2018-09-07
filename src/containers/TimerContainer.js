import Timer from '../components/Timer';
import * as actions from '../actions';
import { connect } from 'react-redux';

//store안의 state값을 props로 연결
const mapStateToProps = (state) => ({
  countingstatus: state.timeData.countingstatus,
  resulttime: state.timeData.resulttime,
  prettytime: state.timeData.prettytime,
  seqid: state.timeData.seqid,
  subject: state.timeData.subject
});

//액션 생성자를 통해 액션을 생성함
//액션을 dispatch하는 함수를 만들고, props로 연결
const mapDispatchToProps = (dispatch) => ({
  onStarttimer: () => dispatch(actions.start_timer()),
  onStoptimer: () => dispatch(actions.stoptimer()),
  onAddtime: () => dispatch(actions.add_time()),
  onResettimer: () => dispatch(actions.resetimer()),
  setSeletedid: () => dispatch(actions.set_selectedid()),
  getSelectedtimer: () => dispatch(actions.get_selectedtimer())
});

const TimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);

export default TimerContainer;
