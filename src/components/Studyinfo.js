import React, { Component } from 'react';
import './Studyinfo.css';
import StudylistContainer from '../containers/StudylistContainer';
import { connect } from 'react-redux';

const Studyinfo = ({ studylist }) => {
//console.log('Studyinfo');
  let studylists = '';

  if(studylist){
     studylists = studylist.map((studydata) =>(
        <StudylistContainer
          id={studydata.id}
          topic={studydata.topic}
          input={studydata.input}
          key={studydata.id}
          />
      ));
  }

  return(
    <div className="studyinfo">
      {studylist ? studylists : ''}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    studylist: state.inputData.studylist
  }
}

export default connect(mapStateToProps, null)(Studyinfo);
