

import React, {useState} from 'react'


export default function TextForm(props) {

  const HandleUpClick=()=>{
//  console.log("Uppercase was clicked" + text);
   let newText = text.toUpperCase();
   setText(newText)
  }

  const HandeLowerClick =() =>{
  console.log("Lowecase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText)
  alert("Your text has been converted to lower case")


  }

  const HandleClearClick =() =>{
    console.log("It was clicked to clear" + text);
    let newText = ''
    setText(newText)
  
    }

    const handleFirstLetter = () => {
      let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      setText(newText);
    };


  const handleOnChange =(event) =>{
   console.log("On Change");
   setText(event.target.value)

  }




const [text, setText] = useState('Type here');

  return (
    <>
<div>
  
 
    <h1>{props.heading}</h1> 
    <div class="mb-3">

    <textarea class="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" ></textarea>
    </div>
    <button className='btn btn-primary' value={text} onClick={HandleUpClick}> Remove to Uppercase</button>

    {" "}
  
    <button className="btn btn-primary" value={text} onClick= {HandeLowerClick}> Remove to Lowercase </button>

    {" "}

    <button className="btn btn-primary" value={text} onClick= {HandleClearClick}> Clear the text</button>

    {" "}

    <button className="btn btn-primary" value={text} onClick= {handleFirstLetter}> Change the First letter to Capital</button>
    {" "}


 </div>   
   
   <div className="container my-3">
     <h1> Youe text summary</h1>
     <p>{text.split("").length } words and {text.length} characters </p>
    <p>{0.008 * text.split("").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>


   </div>

    </>
  )
}
