import React from "react";
import "./SearchStyles.css";

import Gold from "../../assets/gold.png";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>최고급 럭셔리 휴가를 떠나고 싶다면?</h2>
          <p>
            “그렇다. 나는 어느 날 문득 긴 여행을 떠나고 싶어졌던 것이다. 그것은
            여행을 떠날 이유로는 이상적인 것이었다고 생각된다. 간단하면서도
            충분한 설득력이 있다. 어느 날 아침 눈을 뜨고 귀를 기울여 들어보니
            어디선가 멀리서 북소리가 들려왔다. 아득히 먼 곳에서, 아득히 먼 시간
            속에서 그 북소리는 울려왔다. 아주 가냘프게. 그리고 그소리를 듣고
            있는 동안, 나는 왠지 긴 여행을 떠나야만 할 것 같은 생각이 들었다.” /
            “그렇게 온탕과 냉탕에 번갈아 뛰어드는 것처럼 일상과 여행을 오갔다.
            현실에 발을 딛고 살다가 ‘아, 너무 뜨겁다. 더 이상은 못 참겠는걸.’
            신호가 오면 어렵사리 비행기 표를 예매하고 냉탕으로 퐁당 빠져들었다.
            둘 사이의 온도 차가 때론 괴로웠지만, 한순간도 여행이 일상보다
            우월하다고 느껴본 적은 없다. 지리멸렬한 일상을 한순간 한순간 잘
            견뎌냈기에 여행을 위한 돈과 시간, 동기를 가질 수 있었으니까.”
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>전 세계 여행사 중</h3>
                <p>20년 연속 만족도 1위</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>누구도 이루지 못한 성과</h3>
                <p>20년 연속 여행 만족도 1위</p>
                <button>더 보기</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">7% 할인된 가격!</h4>
            <p className="timer">12시간 후, 할인 혜택이 사라집니다.</p>
            <p className="offers">모든 혜택 확인하기!</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>목적지</label>
              <select>
                <option value="1">하와이</option>
                <option value="1">괌</option>
                <option value="1">발리</option>
                <option value="1">몰디브</option>
                <option value="1">플로리다</option>
                <option value="1">보라보라</option>
                <option value="1">오키나와</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>체크인</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>체크아웃</label>
                <input type="date" />
              </div>
              <button>검색</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
