import React, {useState} from 'react'

export default function TextForm(props) {

    const handleClick = () => {

        if(text.trim().length === 0){
            props.showAlert("Text is empty!", "warning")
            return;
        }
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase is Enabled..!", "success");
    }

    const handleLowerClick = () => {

        if(text.trim().length === 0){
            props.showAlert("Text is empty!", "warning")
            return;
        }
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to LowerCase..!", "success");
    }

    const handleClearClick = () => {
        
        if(text.trim().length === 0){
            props.showAlert("Text is Already Empty!", "warning")
            return;
        }
        let newText3 = '';
        setText(newText3);
        props.showAlert("Text Will be Cleared..!", "success");
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () =>{

        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text will be Copied..!", "success");

        if(text.length === 0){
            props.showAlert("Text is Already Empty..!", "warning")
            return;
        }
    }

    const [text, setText] = useState("");

    return (
    <>
        <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1><b>{props.heading}</b></h1>
        <div className='mb-3'>
        <textarea className="form-control" color='grey' onChange={handleChange} value={text} rows="8" id="myBox"
         style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',
         color : props.mode === 'dark' ? 'white' : '#042743'}}>
         </textarea>
         <br />
        <button className="btn btn-primary mx-1" onClick={handleClick}><b>Convert to UpperCase</b></button> 
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}><b>Convert to LowerCase</b></button>   
        <button className="btn btn-primary mx-1" onClick={handleClearClick}><b>Clear</b></button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} ><b>Copy</b></button>
    </div>
    <br />
    <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1><b>Text Summary</b></h1>
        <p><b>words : {text.split(" ").length} , Characters : {text.length}</b></p>
        <p><b>words Read Time : {0.008 * text.split(" ").length}</b></p>
        <h2><b>Preview</b></h2>
        {text.length > 0 ? text : "Write Something For Preview...!"}
    </div>
    </div>
    </>
  )
}
