import Finishmemo from '../components/Finishmemo';
import * as actions from '../actions';
import { connect } from 'react-redux';

//store안의 state값을 props로 연결
const mapStateToProps = (state) => ({
  textvalue: state.memoData.textvalue,
  storedmemo: state.memoData.storedmemo
});

//액션 생성자를 통해 액션을 생성함
//액션을 dispatch하는 함수를 만들고, props로 연결
const mapDispatchToProps = (dispatch) => ({
  onSavetextarea: (textvalue) => dispatch(actions.save_textarea(textvalue)),
  onChangetext: (e) => dispatch(actions.set_textvalue(e.target.value))
});


const FinishmemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Finishmemo);

export default FinishmemoContainer;
