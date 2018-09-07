import React from 'react';
import './Mainpage.css';
import { Link } from 'react-router-dom';
import studyimage from '../images/open-book-1428428_1920.jpg';

const Mainpage = ({}) => {
  return (
     <section className="mainpage-wrapper" style={{ backgroundImage: `url(${studyimage})`}}>
       <div className="welcome">당신의 공부를 돕는 스터디 플래너와 함께 하세요</div>
       <Link className="into-user" to="/user">>>시작하기</Link>
     </section>
  );
}

export default Mainpage;
