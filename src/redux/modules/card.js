import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

// 액션 타입을 정해줍니다.
const LOAD = "card/LOAD";
const CREATE = "card/CREATE";
const DELETE = "card/DELETE";

// 초기 상태값을 만들어줍니다.
const initState = {
  list: [],
};

// 액션 생성 함수예요.
export function loadCard(card_list) {
  return { type: LOAD, card_list };
}

export function createCard(card) {
  console.log("액션을 생성할거야!");
  console.log("card : ", card);
  return { type: CREATE, card };
}

export function deleteCard(card_index) {
  // console.log("지울 버킷 인덱스", card_index);
  return { type: DELETE, card_index };
}

// 미들웨어
export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "card"));
    // console.log(card_data)

    let card_list = [];

    card_data.forEach(card_item => {
      card_list.push({ id: card_item.id, ...card_item.data() });
    });

    dispatch(loadCard(card_list));
  };
};

export const addCardFB = card => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "card"), card);

    const card_data = { id: docRef.id, ...card };
    dispatch(createCard(card_data));
  };
};

export const deleteCardFB = card_id => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "card", card_id);
    await deleteDoc(docRef);

    const card_list = getState().card.list;
    // console.log("card_list : ", card_list);
    // console.log("getState : ", getState());
    const card_index = card_list.findIndex((item) => {
      return item.id === card_id
    })
    dispatch(deleteCard(card_index))
  };
};

// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      return { list: action.card_list };
    }

    case "card/CREATE": {
      const new_card_list = [...state.list, action.card];
      return { list: new_card_list };
    }

    case "card/DELETE": {
      console.log(state.list, action);
      const new_card_list = state.list.filter((l, idx) => {
        return parseInt(action.card_index) !== idx;
      });

      return { list: new_card_list };
    }
    default:
      return state;
  }
}
