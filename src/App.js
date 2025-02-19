import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [mode, setMode] = useState("light");

  return (
    <div className="App">
      <Navbar title = "MyTextConverterApp" mode = {mode} toggleMode= {toggleMode}/>
      <TextForm heading = "Enter Text : " />
    </div>  
  );
}

export default App;
