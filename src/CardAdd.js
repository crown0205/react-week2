import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCardFB } from "./redux/modules/card";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import store from "./redux/configStore";

function CardAdd() {
  const history = useHistory();
  const dispatch = useDispatch();
  const txt1 = React.useRef(null);
  const txt2 = React.useRef(null);
  const txt3 = React.useRef(null);

  const url_value = useParams();
  const item_id = url_value.id;
  const item_num = url_value.num;
  const item_data = store.getState().card.list[item_num];
  console.log(item_num);

  console.log("store : ", item_data);

  const addCreate = () => {
    dispatch(
      addCardFB({
        txt1: txt1.current.value,
        txt2: txt2.current.value,
        txt3: txt3.current.value,
        completed: false,
      })
    );
  };

  return (
    <AddContainer>
      <div className="addWrap">
        <h2 className="addTitle">단어 {item_id ? "수정" : "추가"}</h2>
        <form className="inputWrap">
          <div>
            <label>단어</label>
            <input
              name="txt1"
              ref={txt1}
              defaultValue={item_id ? item_data.txt1 : ""}
              // onChange={(e)=> console.log(e.target.value)}
            ></input>
          </div>
          <div>
            <label>음절</label>
            <input
              name="txt2"
              ref={txt2}
              defaultValue={item_id ? item_data.txt2 : ""}
            ></input>
          </div>
          <div>
            <label>예시</label>
            <input
              name="txt3"
              ref={txt3}
              defaultValue={item_id ? item_data.txt3 : ""}
            ></input>
          </div>
        </form>
        <div
          className="saveBtn"
          onClick={() => {
            addCreate();
            history.push("/");
          }}
        >
          {item_id ? "수정" : "저징"}하기
        </div>
      </div>
    </AddContainer>
  );
}

const AddContainer = styled.div`
  max-width: 500px;
  width: 90%;
  margin: auto;
  .addWrap {
    background-color: #dfdfdf;
    max-width: 450px;
    width: 90%;
    height: 540px;
    border-radius: 10px;
    margin: 0px auto 0px;
    padding: 10px;
  }

  .addTitle {
    letter-spacing: 2px;
  }

  .inputWrap {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 400px;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    margin: 20px auto;

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
