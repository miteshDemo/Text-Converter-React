import React, {useState} from 'react'

export default function TextForm(props) {

    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const [btnText,setBtnText] = useState("Dark Mode");

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
    }

    const handleClearClick = () => {
        let newText3 = '';
        setText(newText3);
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const toggleStyle = () =>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "3px solid white"
            })
            setBtnText("Light Mode")
        }else{
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                border: "3px solid white"
            })
            setBtnText("Dark Mode")
        }
    }

    const [text, setText] = useState("");
    return (
    <>
        <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1><b>{props.heading}</b></h1>
        <div className='mb-3'>
        <textarea className="form-control" color='grey' onChange={handleChange} value={text} rows="8" id="myBox"
         style={{color : props.mode === 'dark' ? 'white' : 'grey',
         color : props.mode === 'dark' ? 'white' : 'black'}}>
         </textarea>
        <button className="btn btn-primary mx-1" onClick={handleClick}><b>Convert to UpperCase</b></button> 
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}><b>Convert to LowerCase</b></button>   
        <button className="btn btn-primary mx-1" onClick={handleClearClick}><b>Clear</b></button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} ><b>Copy</b></button>
    </div>
    <br />
    <br />
    <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1><b>Text Summary</b></h1>
        <p><b>words : {text.split(" ").length} , Characters : {text.length}</b></p>
        <p><b>words Read Time : {0.008 * text.split(" ").length}</b></p>
        <h2><b>Preview</b></h2>
        {text}
    </div>
    </div>
    </>
  )
}
