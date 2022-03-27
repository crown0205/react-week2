// 액션 타입을 정해줍니다.
const CREATE = "card/CREATE";
const DELETE = "card/DELETE";

// 초기 상태값을 만들어줍니다.
const initState = {
  list: [
    { txt1: "title", txt2: "syllable", txt3: "예시", completed: false },
    {
      txt1: "아무개",
      txt2: "아무렇게",
      txt3: "아무개는 뭘까?",
      completed: false,
    },
    { txt1: "ㄴㄴ", txt2: "able", txt3: "네시", completed: false },
  ],
};

// 액션 생성 함수예요.
export function createCard(card) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, card };
}

export function deleteCard(card_index) {
  // console.log("지울 버킷 인덱스", card_index);
  return { type: DELETE, card_index };
}

// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "card/CREATE": {
      const new_card_list = [...state.list, action.card];
      return { list: new_card_list };
    }

    case "card/DELETE": {
      // console.log(state.list, action)
      const new_card_list = state.list.filter((l, idx) => {
        // console.log("이제 값을 삭제할거야!");
        // console.log(l, idx)
        return parseInt(action.card_index) !== idx;
      });

      return { list: new_card_list };
    }
    default:
      return state;
  }
}
