import React from "react";
import { useHistory } from "react-router-dom";

function CardAdd() {
  const history = useHistory();
  return (
    <div>
      <div style={{ background: "#dfdfdf", padding: "10px" }}>
        <h2>단어 추가</h2>
        <form style={{ background: "#eee", margin: "50px" }}>
          <div
            style={{
              background: "#aaa",
              marginBottom: "20px",
              width: "80%",
              margin: "auto",
            }}
          >
            <label
              style={{ marginLeft: "10%", textAlign: "left", display: "block" }}
            >
              단어
            </label>
            <input style={{ width: "80%" }}></input>
          </div>
          <div
            style={{
              background: "#aaa",
              marginBottom: "20px",
              width: "80%",
              margin: "auto",
            }}
          >
            <label
              style={{ marginLeft: "10%", textAlign: "left", display: "block" }}
            >
              단어
            </label>
            <input style={{ width: "80%" }}></input>
          </div>
          <div
            style={{
              background: "#aaa",
              marginBottom: "20px",
              width: "80%",
              margin: "auto",
            }}
          >
            <label
              style={{ marginLeft: "10%", textAlign: "left", display: "block" }}
            >
              단어
            </label>
            <input style={{ width: "80%" }}></input>
          </div>
        </form>
        <div
          style={{
            width: "200px",
            height: "50px",
            background: "#aaa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
          onClick = {()=> {
            history.goBack()
          }}
        >
          저장하기
        </div>
      </div>
    </div>
  );
}

export default CardAdd;
