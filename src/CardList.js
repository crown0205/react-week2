import React from "react";
import { useHistory } from "react-router-dom";

function CardList() {
  const history = useHistory();
  return (
    <>
      <div style={{ background: "#eee", padding: "10px" }}>
        <div
          style={{
            background: "#dfdfdf",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "left",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            title
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginBottom: "10px",
            }}
          >
            [title]
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#0984e3" }}>
            예시
          </p>

          <div style={{ position: "absolute", top: "16px", right: "30px" }}>
            <span>check</span>
            <span>edit</span>
            <span>add</span>
          </div>
        </div>
        <div
          style={{
            background: "#aaa",
            position: "fixed",
            bottom: "30px",
            right: "30px",
            display: "inline-block",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
          onClick={()=>{
            history.push('/add')
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>+</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default CardList;
