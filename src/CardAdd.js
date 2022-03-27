import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import { createBucket } from "./redux/modules/card";
// import { useDispatch } from "react-redux";

function CardAdd() {
  const history = useHistory();
  // const inputTxt = ["단어", "음절", "예시"];

  return (
    <AddContainer>
      <div className="addWrap">
        <h2 className="addTitle">단어 추가</h2>
        <form className="inputWrap">
          <div>
            <label>단어</label>
            <input></input>
          </div>
          <div>
            <label>음절</label>
            <input></input>
          </div>
          <div>
            <label>예시</label>
            <input></input>
          </div>
        </form>
        <div
          className="saveBtn"
          onClick={() => {
            history.goBack();
          }}
        >
          저장하기
        </div>
      </div>
    </AddContainer>
  );
}

const AddContainer = styled.div`
  padding: 0 50px;

  .addWrap {
    background-color: #dfdfdf;
    width: 100%;
    border-radius: 10px;
    margin: 20px auto 0px;
    padding: 10px;
  }

  .addTitle {
    letter-spacing: 2px;
  }

  .inputWrap {
    /* background-color: #fff; */
    display: flex;
    flex-direction: column;
    max-width: 80%;
    min-height: 200px;
    margin: 30px auto 30px;

    div {
      /* background-color: #aaa; */
      min-width: 80%;
      width: 100%;
      margin: 0px auto 10px;
      label {
        display: block;
        text-align: left;
        font-weight: 500;
        margin-left: 20px;
        margin-bottom: 10px;
      }
      input {
        width: 90%;
        height: 80px;
        border-radius: 10px;
        border: 1px solid gray;
        padding: 0px 10px;
      }
    }
  }

  .saveBtn {
    width: 200px;
    height: 50px;
    background-color: #aaa;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 0px auto 30px;
    box-shadow: 1px 1px 1px gray;
  }
`;

export default CardAdd;
