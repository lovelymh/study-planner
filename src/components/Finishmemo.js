import React from 'react';
import './Finishmemo.css';

const Finishmemo = ({textvalue, onSavetextarea, onChangetext}) => {
//  console.log('Finishmemo');
  return(
    <div className="finishmemo">
      <p>메모</p>
      <div className="finish-memo">
        <textarea className="memo" onChange={(e)=>onChangetext(e)}>{textvalue}</textarea>
        <div className="save-button" onClick={()=>onSavetextarea(textvalue)}>
          저장
        </div>
      </div>
    </div>
  );
}

export default Finishmemo;
