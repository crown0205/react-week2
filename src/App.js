import React from "react";
import "./App.css";
import styled from "styled-components";
import CardList from "./CardList";
import CardAdd from "./CardAdd";

import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";



function App() {
  const history = useHistory()

  React.useEffect(async()=>{  //db를 사용하기 위해서는 async, await를 사용해야 된다.
    console.log(db)
    const query = await getDocs(collection(db, "card"))   // db에서 이름이 같은 컬렉션 db의 모든 정보를 가져온다.
    console.log(query)
    query.forEach((doc)=>{    // 이전까지는 읽기 힘든 정보 였지만, forEach를 사용해 읽기 쉽게 변환 해주는 단계이다.
      console.log(doc.id, doc.data())
    })
  },[])

  return (
    <div className="App">
      <HeaderStyle><span onClick={()=>{
        history.push("/");
      }}>나만의 사전</span></HeaderStyle>
      <WrapStyle>
        <Route exact path="/" component={CardList} />
        <Route exact path="/add" component={CardAdd}/>
      </WrapStyle>
    </div>
  );
}

const HeaderStyle = styled.div`
  font-size: 26px;
  font-weight: 600;
  padding: 26px;
  border-bottom: 3px solid #eee;
  box-shadow: 0px 2px 5px #dfdfdf;
  span {
  cursor: pointer;
  }
`;

const WrapStyle = styled.div`
  padding-top: 30px;
`;

export default App;
