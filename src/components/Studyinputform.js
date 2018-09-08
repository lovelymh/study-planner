import React from 'react';
import './Studyinputform.css';

const Studyinputform = ({ selectedid, seqid, subject, data, studylist,
                        onChangetopic, onChange, oninsert, ondelete, onSettimer }) => {
  //console.log('Studyinputform');
  return(
    <div className="study-input-form">
      <input className="input topic" type="text" onChange={(e)=>onChangetopic(e, selectedid)} value={subject}/>
      <input className="input content" type="text" onChange={(e)=>onChange(e, selectedid)} value={data}/>
      <div className="data insert" onClick={()=>oninsert(seqid, data)}>저장</div>
      <div className="data delete" onClick={()=>ondelete(seqid)}>삭제</div>
    </div>
  );
}

export default Studyinputform;
