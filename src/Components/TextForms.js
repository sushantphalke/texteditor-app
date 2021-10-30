import React,{useState}from 'react'
import PropTypes from 'prop-types'
import "./TextForms.css"
export default function TextForms(props) {
    const[text, setText]= useState("Enter text here...");
  
    
    const handleupclicked = ()=>{
        console.log("click on convert to uppercase ");
        let newText = text.toUpperCase();
        setText(newText);
      
        
      
    }
    const handleLowclicked = ()=>{
        console.log("click on convert to lowercase");
        let newText = text.toLowerCase();
        setText(newText);
       
      
    }
    const handleOnChange = (event)=>{
        console.log("clicked on textbox");
        setText(event.target.value);
        
        
    }
    const handleCleartextbox = (event)=>{
        console.log("clicked on clear textbox");
        setText("");
        props.showAlert("textbox cleared","success");   
    }
    const handleCopy=()=>{
            console.log("text copied to clipboard")
            var text = document.getElementById("textbox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert(" copied to clipboard","success")
    }
    const handleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces cleared","success");
        
    }
    return (
        <>
            <div id='textboxandbuttons' className={`container  container-${props.elementmode} bg-${props.elementmode}`}> 
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea className={`form-control bg-${props.elementmode} text-${props.elementmode==="light"?"dark":"light"} `}  id="textbox"  value={text} onChange={handleOnChange} rows="7"></textarea>
            </div>
            <button className="btn btn-success mx-2 my-2" onClick={handleupclicked}>Convert To UPPERCASE</button>
            <button className="btn btn-success mx-2 my-2" onClick={handleLowclicked}>Convert To lowercase</button>
            <button className="btn btn-success mx-2 my-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCleartextbox}>Clear TextBox</button>
            </div>
            <div className='container my-5'>
            <h3>Your Text Summary</h3>   
            <p id='textsummary'> {text.length>0?text.split(' ').length:0} Words , {text.length} characters and it will take approx. {text.length * 0.0012} minutes. </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter your text in textbox to preview...'}</p>        
            </div>
            </>
    )
}
TextForms.propTypes= {title: PropTypes.string}
TextForms.defaultProps= {title: "Enter Your Text here..."}