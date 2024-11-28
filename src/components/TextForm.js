import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = (event) => {
        console.log("Upper Case Clicked");
        if(text.length ===0){
            props.showAlert("Text is empty. Please enter some text.","danger");
            return;
        }
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted into Uppercase","success");
    };
    const handleLoClick = (event) => {
        console.log("Lower Case Clicked");
        if(text.length ===0){
            props.showAlert("Text is empty. Please enter some text.","danger");
            return;
        }
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted into Lowercase","primary");
    };
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    };
    const handleClearClick = (event) => {
        console.log("Clear Clicked");
        if(text.length ===0){
            props.showAlert("There is nothing to clear Please type somthing in the Text area","danger");
            return;
        }
        setText("");
        props.showAlert("Text is cleared","danger");
    };
    const handleCopyClick = (event) => {
        console.log("Copy Clicked");
        if(text.length ===0){
            props.showAlert("There is nothing to copy please type something","danger");
            return;
        }
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard","warning");
    };
    const handleFindEmailClick = () => {
        console.log("Email Finder Clicked");
        let emailRegex = /\S+@\S+\.\S+/;
        let emails = text.match(emailRegex);
        if (emails) {
            setText("Email addresses found: " + emails.join(", "));
        } else {
            props.showAlert("No email address Found","danger");
        }
    };
    const [text, setText] = useState("");
    console.log(useState("Enter text here"));
    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here' style={{
                        backgroundColor: props.mode === "dark" ? 'white' : "white",
                        color: props.mode === "dark" ? 'black' : "#333",
                        '::placeholder': { color: props.mode === 'dark' ? '#aaa' : '#666' }
                    }}></textarea>
                </div>
                <button className="btn mx-1 my-1" style={{backgroundColor:'#FF00FF',color:'white'}} onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn mx-1 my-1" style={{backgroundColor:'#FF00FF',color:'white'}} onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-info mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-info mx-1 my-1" onClick={handleFindEmailClick}>Email Finder</button>
            </div>
            <div className="container my-5">
                <h2>Text Summary</h2>
                {text.trim().length === 0 ? "0" : text.trim().split(/\s+/).length} words and {text.length} characters
                <p>{text.trim().length === 0 ? "0" : (0.008 * text.trim().split(/\s+/).length).toFixed(2)} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Type Something to Preview"}</p>
            </div>
        </>
    )
}
