import React, { Component } from 'react';
import './Studylist.css';

class Studylist extends Component {

  render(){
  //console.log('Studylist');
    const { id, topic, input, seqid, studylist, onGetdata, onchkClick } = this.props;
      return(
        <div className={`${id===seqid && 'select'} study-list`} onDoubleClick={()=>onGetdata(id)}>
          <div className={`${id===seqid && 'select'} studytopic`}>
            {topic}
          </div>
          <div className="studyinput">
            {input}
          </div>
          <input className="studylistchk" type="checkbox" onChange={()=>onchkClick(id)}
            checked={studylist&&studylist.filter(s=>s.id === id)[0] ? studylist.filter(s=>s.id === id)[0].checked : false}/>
        </div>
      );
  }
}

export default Studylist;
