import React, {useState} from 'react'

export default function TextForm(props) {

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

  return (
    <>
        <div className="container mb-3">
        <h1><b>{props.heading}</b></h1>
        <textarea className="form-control"  onChange={handleChange} value={text} rows="5" id="myBox"></textarea>
        <br />
        <button className="btn btn-primary mx-1" onClick={handleClick}><b>Convert to UpperCase</b></button> 
        <button className="btn btn-primary" onClick={handleLowerClick}><b>Convert to LowerCase</b></button>   
    </div>
    <div className="container my-3">
        <h1><b>Text Summary</b></h1>
        <p><b>words : {text.split(" ").length} , Characters : {text.length}</b></p>
        <p><b>words Read Time : {0.008 * text.split(" ").length}</b></p>
        <h2><b>Preview</b></h2>
        {text}
    </div>
    </>
  )
}
