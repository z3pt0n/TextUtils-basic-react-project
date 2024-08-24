import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Uppercase Clicked", "success");
  }

  const handleLowClick = ()=>{
    // console.log("UpperCase Was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Lowercase Clicked", "success");

  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Keyboard", "success");
  }

  const handleClear =() =>{
    setText('');
    document.getElementById("myBox").select();
    document.getElementById("myBox").setSelectionRange(0, 0);
    props.showAlert("All Text Cleared", "danger");

  }

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.Heading} </h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}> convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Clear Extra Space</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
