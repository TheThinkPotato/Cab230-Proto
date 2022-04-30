import React from "react";

export default function MessageBox(props) {
    alert(props.errorMessage);
    return (
    <div>
      <div className="log-box" style={{ marginTop: "180px" }}>
        <div style={{ marginTop: "2rem" }}>
          <div className="front-page-box box-border">
              
              <p>A{props.errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
