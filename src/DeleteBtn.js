import React from "react";
import { AiFillDelete } from "react-icons/ai";

import { deleteCard, deleteCardFB } from "./redux/modules/card";
import { useDispatch, useSelector } from "react-redux";

const DeleteBtn = props => {
  const dispatch = useDispatch();
  const num = props.num;
  const card_list = useSelector(state => state.card.list)
  // console.log(card_list[num].id)
  // console.log("num : ",num)


  return (
    <>
      <span
        className="delete"
        onClick={() => {
          // console.log("누른 버튼", card_list[num].id, num);
          dispatch(deleteCardFB(card_list[num].id));
        }}
      >
        <AiFillDelete />
      </span>
    </>
  );
};

export default DeleteBtn;
