import React from "react";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import DeleteBtn from "./DeleteBtn";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { db } from "./firebase";
import { loadCardFB } from "./redux/modules/card";

function CardList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cardList = useSelector(state => state.card.list);

  React.useEffect(() => {
    dispatch(loadCardFB());
  }, []);

  return (
    <>
      <CardContainer>
        {cardList.map((item, index) => {
          console.log(item.completed)
          return (
            <CardItem
              className="cardItem"
              key={`card_${index}`}
              checked={item.completed}
              num={index}
            >
              <p className="cardTitle">{item.txt1}</p>
              <p className="cardTxt2">[{item.txt2}]</p>
              <p className="cardTxt3">{item.txt3}</p>
              <div className="btnWrap">
                <span
                  className="check"
                  onClick={() => {
                    dispatch();
                  }}
                >
                  <BsCheckLg />
                </span>
                <span
                  className="edit"
                  onClick={() => {
                    history.push("/edit/" + item.id + "/" + index);
                  }}
                >
                  <BiEditAlt />
                </span>
                <DeleteBtn num={index} />
              </div>
            </CardItem>
          );
        })}
        <div
          className="addBtn"
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
  max-width: 800px;
  min-width: 300px;
  width: 90%;
  margin: auto;
  overflow-y: auto;
  max-height: 1030px;
  background-color: #5c5c5c;
  padding: 20px;
  box-shadow: 1px 1px 4px 1px #b3b3b3;
  border-radius: 10px;



  .cardTitle {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .cardTxt2 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .cardTxt3 {
    font-size: 16px;
    font-weight: 400;
    color: #0984e3;
  }

  .btnWrap {
    position: absolute;
    top: 16px;
    right: 0px;

    span {
      margin-right: 14px;
      font-size: 20px;
      color: #7b7a77;
      cursor: pointer;
    }

    .check {
      &:hover {
        color: #10c300;
      }
    }

    .edit {
      font-weight: 700;
      font-size: 24px;
      &:hover {
        color: #ffaa00;
      }
    }

    .delete {
      font-size: 22px;
      &:hover {
        color: #ff5400;
      }
    }
  }

  .addBtn {
    background-color: #5c5c5c;
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 50px;
      font-weight: 500;
      line-height: 50px;
      margin-bottom: 5px;
      color: #fff;
    }
  }
`;

const  CardItem = styled.div`
background-color: ${props => (props.checked ? "#aaa" : "#fff")};
${props=>console.log(props)}  /* 이렇게 써줘야 콘솔값을 확인할수 있다. */
border-radius: 10px;
  padding: 16px;
  text-align: left;
  position: relative;
  min-height: 120px;
  margin-bottom: 10px;
`  // 이렇게 해줘야 프로퍼티로 값이 잘 넘어 온다!!
   // 그냥 div로 하면 프로퍼티로 값을 보내도 확인하기 힙들다.
   // 프로퍼티로 값 받아서 쓸꺼면 styled component를 사용해서 값을 보내도록 하자~!! 
export default CardList;
