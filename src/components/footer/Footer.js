import React from "react";
import "./FooterStyles.css";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <h3>여기놀자</h3>
        <div className="social">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
      <div className="bottom">
        <div className="">
          <ul>
            <li>회사소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>소비자 분쟁해결 기준</li>
            <li>사업자 정보확인</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>여기놀자 마케팅센터</li>
            <li>액티비티 호스트센터</li>
            <li>HOTEL 여기놀자</li>
            <li>콘텐츠산업진흥법에 의한 표시</li>
            <li>인재채용</li>
            <li>광고제휴 문의</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
