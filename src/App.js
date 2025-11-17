import logo from './logo.svg';
import './App.css';
import {myContext} from "./Fromulaire/creatContexts.js"
import "./Fromulaire/test.css"
import Options from "./Fromulaire/Options.js"
import { useContext, useState } from 'react';

function App() {
const[Change,setChange] = useState(false);
const[Coler,setColor] = useState("isdaisblefalse");
const resultecontext=useContext(myContext);

const [InputValue,setInputValue] = useState({player1:"",player2:"",counter:"VS"})
const [isDisable,setIsDisable] = useState(true);
function Aller()
{
  setChange(true);
}

function Isdisable()
{
  if(InputValue.player1.length>=2 &&  InputValue.player2.length>=2)
  {
    setIsDisable(false);
    setColor("isdaisbletrue")
  }
  else{
    setIsDisable(true);
   setColor("isdaisblefalse")
  }
}
  return (
         <myContext.Provider value={{player1:InputValue.player1,player2:InputValue.player2}}>
    <div className="App flexs"> 
        <div className="container">  
    <h2 >TIC-TAC-TOE</h2>
    
    <div style={{display:"flex",justifyContent:"space-between",minWidth:"300px"}}>
    <p className="nameplayer" >{InputValue.player1}</p>
    <p className="conter" >{InputValue.counter}</p>
    <p className="nameplayer">{InputValue.player2}</p>
    </div>
    <div  className="container-dsiplay" style={Change?{display:"none"}:{display:"flex"}}>
    <div>
        <label>Player 1</label><input className="input-player" value={InputValue.player1} onKeyUp={Isdisable} onChange={(e)=>{setInputValue({...InputValue,player1:e.target.value})}}/>
    </div>
    <div>
        <label>Player 2</label><input className="input-player" value={InputValue.player2} onKeyUp={Isdisable} onChange={(e)=>{setInputValue({...InputValue,player2:e.target.value})}}/>
    </div>
    <div style={{display:"flex",position:"relative",marginLeft:"0px",marginTop:"20px",width:"320px",justifyContent:"space-around"}}>
          <p className="p-xop"></p>
    <div className="body-xo">
        <p className="p-xo"></p>
    </div>
 <p className="p-xop1"></p>
      <div className="body-xo">
        <p className="p-xo"></p>
    </div>
    </div>
    <div>
        <button  onClick={Aller} className={Coler} disabled={isDisable}>GO</button>
    </div>
    </div>
    {Change?<Options player1={resultecontext.player1} player2={resultecontext.player2}/>:""};
        </div>
</div>
    </myContext.Provider>
  );
}

export default App;
