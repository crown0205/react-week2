import React from "react";
import "./App.css";
import styled from "styled-components";
import CardList from "./CardList";
import CardAdd from "./CardAdd";

import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <HeaderStyle>
        <span
          onClick={() => {
            history.push("/");
          }}
        >
          나만의 사전
        </span>
      </HeaderStyle>
      <WrapStyle>
        <Route exact path="/" component={CardList} />
        <Route exact path="/add" component={CardAdd} />
        <Route exact path="/edit/:id/:num" component={CardAdd} />
      </WrapStyle>
    </div>
  );
}

const HeaderStyle = styled.div`
  font-size: 26px;
  font-weight: 600;
  padding: 26px;
  box-shadow: 0px 7px 5px #a6a6a6;
  background-color: #fff;
  border-radius: 0px 0px 10px 10px;
  span {
    cursor: pointer;
  }
`;

const WrapStyle = styled.div`
  padding-top: 60px;
`;

export default App;
