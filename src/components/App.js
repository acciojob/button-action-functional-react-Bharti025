import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [text,setText]=useState("");
    const handleClick=()=>{
      setText("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
    }
  return (
    <div id="main">
      <p>{text}</p>
      <button id="click" onClick={handleClick}>Click me</button>
    </div>
  );
}


export default App;
