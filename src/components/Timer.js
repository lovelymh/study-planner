import React, { Component } from 'react';
import './Timer.css';


class Timer extends Component {

  componentWillReceiveProps(nextProps) {

    if(!this.props.countingstatus && nextProps.countingstatus) {
      const timerinterval = setInterval(()=>{
        this.props.onAddtime();
      }, 1000);
      this.setState({
        timerinterval
      });
    }else if(this.props.countingstatus && !nextProps.countingstatus) {
      clearInterval(this.state.timerinterval);
    }

    if(this.props.resulttime > 0 && nextProps.resulttime === 0 && !this.state.timerinterval){
      clearInterval(this.state.timerinterval);
    }
  }

  render(){
    //  console.log('TIMER');
    const { countingstatus, prettytime, subject, seqid,
            onStarttimer, onStoptimer, onResettimer} = this.props;

    return(
      <div className="timer">
        <p>{subject} 스톱워치</p>
        <div className="timer-time">
          {prettytime}
        </div>
        <div className="timer-button">
          <div className={`${seqid!=='' ? 'button' : 'none'} start`} onClick={seqid!=='' ? (countingstatus ? onStoptimer : onStarttimer) : ''}>
            { countingstatus ? '중지' : '시작'}
          </div>
          <div className={`${seqid!=='' ? 'button' : 'none'} initialization`} onClick={seqid!=='' ? onResettimer : ''}>
            초기화
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
