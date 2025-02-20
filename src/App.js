import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState("light");

  const[alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled..!", "success");
      document.title = "Text Converter - Dark Mode";
    }else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled..!", "success");
      document.title = "Text Converter - Light Mode";
    }
  }

  const showAlert = (messege, type) => {
    setAlert({
      msg : messege,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000)
  }

  return (
    <div className="App">
      <Navbar title = "MyTextConverterApp" mode = {mode} toggleMode= {toggleMode}/>
      <Alert alert={alert} />
      <TextForm heading = "Enter Text : " mode = {mode} showAlert={showAlert}  />
    </div>  
  );
}

export default App;
