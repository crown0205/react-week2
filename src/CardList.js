import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function CardList() {
  const history = useHistory();
  const cradList = useSelector(state => state.card.list);

  console.log(cradList);
  return (
    <>
      <CardContainer>
        {cradList.map((item, index) => {
          return (
            <div className="cardItem" key={`card_${index}`} completed={cradList[index].completed}>
              <p className="cardTitle">{cradList[index].txt1}</p>
              <p className="cardtxt2">[{cradList[index].txt2}]</p>
              <p className="cardtxt3">{cradList[index].txt3}</p>
              <div className="btnWrap">
                <span>check</span>
                <span>edit</span>
                <span>add</span>
              </div>
            </div>
          );
        })}
        <div
          className="upBtn"
          onClick={() => {
            history.push("/add");
          }}
        >
          <p>+</p>
        </div>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  background-color: #eee;
  padding: 10px;

  .cardItem {
    background-color: #dfdfdf;
    border-radius: 10px;
    padding: 10px;
    text-align: left;
    position: relative;
    height: 130px;
    margin-bottom: 10px;
  }

  .cardTitle {
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .cardtxt2 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .cardtxt3 {
    font-size: 16px;
    font-weight: 400;
    color: #0984e3;
  }

  .btnWrap {
    position: absolute;
    top: 24px;
    right: 30px;

    span {
      margin-right: 14px;
    }
  }

  .upBtn {
    background-color: #aaa;
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;

    p {
      font-size: 26px;
      font-weight: 700;
    }
  }
`;
export default CardList;
