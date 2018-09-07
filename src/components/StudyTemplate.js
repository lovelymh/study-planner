import React from 'react';
import './StudyTemplate.css';

const StudyTemplate = ({ studyinputform, studyinfo }) => {
  return(
    <div className="study-template">
      <p>오늘의 공부 리스트</p>
      <div className="inputform">
        {studyinputform}
      </div>
      <div className="studylist">
        {studyinfo}
      </div>
    </div>
  );
}

export default StudyTemplate;
