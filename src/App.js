import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div className="App">
      <Navbar title = "MyTextConverterApp" mode = {mode} toggleMode= {toggleMode}/>
      <TextForm heading = "Enter Text : " mode = {mode}  />
    </div>  
  );
}

export default App;
