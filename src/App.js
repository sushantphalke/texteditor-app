import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Pagination from './Components/Pagination';
import TextForms from './Components/TextForms';
import Verticalbuttons from './Components/Verticalbuttons';
import {useState} from 'react';
import Alerts from './Components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const[btntext, setbtntext] = useState("Enable dark mode");
  const[elementmode, setelementmode] = useState("light");
  const[alert,setAlert ] = useState(null);


  const showAlert = (message,type)=>{
   setAlert({
      message : message,
      type:type 
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  }

  const[myStyle, setmyStyle] = useState({
    backgroundColor:'white'
  })

  const togglemode = ()=>{
    if(myStyle.backgroundColor ==='white'){
      setmyStyle({
        color:'white',
        backgroundColor:'#0f0d20',
        
      })
      setbtntext("Enable light mode");
      setelementmode("dark");
      showAlert("Dark mode enabled","success")
      document.title = 'TextEditor-darkmode'
     
    }
    else{
      setmyStyle({
          
          backgroundColor:'white'
      })
      setbtntext("Enable dark mode");
      setelementmode("light");
      showAlert("Light mode enabled","success")
      document.title = 'TextEditor-lightmode'
      
    }
}

  return(
    <>
   <Router>
    <div style={myStyle}>

    <div id='navbar' className='container'><Navbar title="TextEditor" home = "Home" about = "About" togglemode={togglemode} elementmode={elementmode} /></div>
    <div id="alerts"><Alerts alert={alert} /></div>


    <Switch>
          
          <Route exact path="/">
              <div id='textforms' className='container my-5'><TextForms elementmode={elementmode}  heading ="Enter Text to Analyze...." showAlert={showAlert}  /></div>
              <div  id="pagintion" className='container'><Pagination elementmode={elementmode} /></div>
              </Route>
          
          <Route path='/About'>
               <Carousel elementmode={elementmode} /> 
               <About elementmode={elementmode}  />
               </Route>
              
    </Switch>
    
    <div id ="Verticalbuttons" className='container'><Verticalbuttons elementmode={elementmode} /></div>
    
    <div id='bottommodebutton' className='container'><button onClick={togglemode} className="btn btn-primary">{btntext}</button></div>

    <div id='footer'><Footer elementmode={elementmode} /></div>

</div>
 </Router> 
 </>
  )
}
export default App;

