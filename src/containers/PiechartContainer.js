import Piechart from '../components/Piechart';
import * as actions from '../actions';
import { connect } from 'react-redux';

//store안의 state값을 props로 연결
const mapStateToProps = (state) => ({
  studylist_chkrate: state.pieData.studylist_chkrate
});

//액션 생성자를 통해 액션을 생성함
//액션을 dispatch하는 함수를 만들고, props로 연결
const mapDispatchToProps = (dispatch) => ({
  getstudylist: (date) => dispatch(actions.get_studylist(date))
});

// Calendar 컴포넌트의 Container 컴포넌트
// Calendar 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 함
const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Piechart);

export default CalendarContainer;
