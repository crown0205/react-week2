import "./App.css";
import styled from "styled-components";
import { Route } from "react-router-dom";
import CardList from "./CardList";
import CardAdd from "./CardAdd";

function App() {
  return (
    <div className="App">
      <HeaderStyle>나만의 사전</HeaderStyle>
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
`;

const WrapStyle = styled.div`
  padding: 20px;
`;

export default App;
