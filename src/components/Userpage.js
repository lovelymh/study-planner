import React from 'react';
import './Userpage.css';
import StudyTemplate from './StudyTemplate';
import StudyinputContainer from '../containers/StudyinputContainer';
import Studyinfo from './Studyinfo';
import FinishmemoContainer from '../containers/FinishmemoContainer';
import TimerContainer from '../containers/TimerContainer';
import PiechartContainer from '../containers/PiechartContainer';
import { Link } from 'react-router-dom';


const Userpage = ({match}) => {
//  {match.params.name}의 페이지 입니다.
  return (
     <section className="user-study-wrapper">
      <Link className="user-welcome" to="/">Study Planner</Link>
      <div className="user-page">
        <div className="study">
          <dlv className="studytemplate">
            <StudyTemplate studyinputform={(<StudyinputContainer/>)}
              studyinfo={(<Studyinfo/>)}
              />
          </dlv>
          <div className="finishmemo-wrappper">
            <FinishmemoContainer/>
          </div>
        </div>
        <div className="extra-info-wrapper">
          <div className="timer-wrapper">
             <TimerContainer/>
          </div>
          <div className="pie-chart-wrapper">
             <PiechartContainer/>
          </div>
        </div>
      </div>
     </section>
  );
}

export default Userpage;
