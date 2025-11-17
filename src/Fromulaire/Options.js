import "./test.css"
import Gaine from "./Gaine.js"
import { useState } from 'react';
import { useContext } from "react";
import { myContext } from "./creatContexts.js";
export default function Option()
{
    const resultatContext = useContext(myContext);
    const [champ,setChamp] = useState({xOrY:"",chOne:"",chTow:"",chThr:"",chFor:"",chFive:"",chSixe:"",chSeven:"",chHite:"",chNinhe:"",chekeds:false});
    const isGaine = 
    (champ.chOne===champ.chTow && champ.chTow===champ.chThr && champ.chOne!=="") || 
    (champ.chOne===champ.chFive && champ.chFive===champ.chNinhe && champ.chOne!=="")||
    (champ.chOne===champ.chFor && champ.chFor===champ.chSeven && champ.chOne!=="")||
    (champ.chFor===champ.chFive && champ.chFive===champ.chSixe && champ.chFor!=="")||
    (champ.chSeven===champ.chHite && champ.chSeven===champ.chNinhe && champ.chNinhe!=="")||
    (champ.chThr===champ.chFive && champ.chThr===champ.chSeven && champ.chThr!=="")||
    (champ.chTow===champ.chFive && champ.chTow===champ.chHite && champ.chTow!=="")||
    (champ.chThr===champ.chSixe && champ.chSixe===champ.chNinhe && champ.chSixe!=="");
        const Result = 
        champ.chOne !==""&&
        champ.chTow !=="" &&
        champ.chThr !=="" && 
        champ.chFor !=="" &&
        champ.chFive !=="" &&
        champ.chSixe !=="" &&
        champ.chSeven !=="" &&
        champ.chHite !=="" &&
        champ.chNinhe !=="";
        const[scores,setScore] = useState({scorePlayer1:0,scorePlayer2:0});
        
    function cha()
    {
        setChamp({...champ,chekeds:isGaine});
        ajouerScore();
      
    if(isGaine)
            {
            setTimeout(()=>{setChamp({xOrY:"",chOne:"",chTow:"",chThr:"",chFor:"",chFive:"",chSixe:"",chSeven:"",chHite:"",chNinhe:"",chekeds:false}) },4000)
           

return true ;
            }
           
         else if(Result)
        {
            setTimeout(()=>{setChamp({chOne:"",chTow:"",chThr:"",chFor:"",chFive:"",chSixe:"",chSeven:"",chHite:"",chNinhe:"",chekeds:false}) },4000)

         
            }
        }
    function ajouerScore()
    {
        if(isGaine)
        {
            if(champ.xOrY==="x")
            {
                const copyScores = {...scores}
                copyScores.scorePlayer1+=1;
                setScore(copyScores)
            }
            else{
                 const copyScores = {...scores}
                copyScores.scorePlayer2+=1;
                setScore(copyScores)
            }
        }
    }
   function VerifierResultatInputs(e)
   {
    const ValueInputs = e.target.value;
    if(ValueInputs.length<=1)
    {
        if(!(champ.xOrY === ValueInputs.toLowerCase()))
        {    //    console.log("The resultat of if")
            champ.xOrY=ValueInputs.toLowerCase();
        if(e.target.value.toLowerCase()==="o"||e.target.value.toLowerCase()==="x" )
        {
            console.log("The resultat of if")
 return true;
        }
        }
        else{
            return false;
        }
     
        ajouerScore();
    }
ajouerScore();
    return false;
   }
   
    return(
        <div className="flexs" style={{flexDirection:"column",gap:"7px"}}>
     <div className="parent-score"> 
      <p className="score">Score : {" "+scores.scorePlayer1}</p>
      <p className="score">Score :{" "+scores.scorePlayer2}</p>
    </div>
            <div className="titre-head"> 
                <p >Tour actuel: joueur  <span style={champ.xOrY!==" "?{color:"red",fontSize:"40px"}:""}>{champ.xOrY==="x"?"o":champ.xOrY==="o"?"x":""}</span></p>
            </div>
        <div className="container-champs">
            <div className="div-y">
             <p className="p-y"></p>
            <p className="p-y"></p>
            
            </div>
            
            <div className="champs">
                <div>
            <input className="input-champ"   onKeyUp={cha} value={champ.chOne} onChange={(e)=>{
                if(VerifierResultatInputs(e)){
                setChamp({...champ,chOne:e.target.value})
                }
                else{
                    setChamp({...champ,chOne:""});
                }            
                }
               
                
                
                }/>
        </div>
        <div>
            <input className="input-champ" onKeyUp={cha} value={champ.chTow} onChange={(e)=>{
                if(VerifierResultatInputs(e)){setChamp({...champ,chTow:e.target.value})
                
                }
                else{
                    setChamp({...champ,chTow:""})
                }
            }
                }/>
        </div>
        <div>
            <input className="input-champ"  onKeyUp={cha}  value={champ.chThr} onChange={(e)=>{if(VerifierResultatInputs(e)){
                setChamp({...champ,chThr:e.target.value})
                }
                else{
                    setChamp({...champ,chThr:""})
                }
                
                }}/>
        </div>
</div>
            <div className="champs">
                <div>
            <input className="input-champ"  onKeyUp={cha} value={champ.chFor} onChange={(e)=>{
                if(VerifierResultatInputs(e)){setChamp({...champ,chFor:e.target.value})} 
                else{
  setChamp({...champ,chFor:""})
                }
                }} />
        </div><div>
            <input className="input-champ"  onKeyUp={cha} value={champ.chFive} onChange={(e)=>{if(VerifierResultatInputs(e)){
                setChamp({...champ,chFive:e.target.value})
            }
            else{
                setChamp({...champ,chFive:""})
            }
                }}  />
        </div><div>
            <input className="input-champ"  onKeyUp={cha} value={champ.chSixe} onChange={(e)=>{
                if(VerifierResultatInputs(e)){
                    setChamp({...champ,chSixe:e.target.value})
                }
                else{
                    setChamp({...champ,chSixe:""});
                }
                }} />
        </div>
              </div>
            <div style={{display:"flex",gap:"3px",justifyContent:"space-between",alignItems:"center",width:"90%",margin:"auto"}}>
                
                <div>
            <input className="input-champ"  onKeyUp={cha} value={champ.chSeven} onChange={(e)=>{
                if(VerifierResultatInputs(e)){setChamp({...champ,chSeven:e.target.value})
                }
            else{
                setChamp({...champ,chSeven:""})
            }
                }}  />
        </div>
        <div>
            <input className="input-champ"  onKeyUp={cha} value={champ.chHite} onChange={(e)=>{
                if(VerifierResultatInputs(e)){setChamp({...champ,chHite:e.target.value})
                }
            else{
                setChamp({...champ,chHite:""})
            }
                }} />
        </div>
        <div>
            <input className="input-champ"  onKeyUp={cha} value={champ.chNinhe} onChange={(e)=>{
                if(VerifierResultatInputs(e)){setChamp({...champ,chNinhe:e.target.value})
                }
            else{
                setChamp({...champ,chNinhe:""});
            }
                }}  />
        </div>
        </div>
        
        {champ.chekeds?<Gaine Message="Magnifique ! Le joueur" namePlayer={champ.xOrY==="x"?resultatContext.player1:resultatContext.player2}/>:""}
        {Result &&  !isGaine ?<Gaine Message="Aucun gagnant ... mais la performance etait remarquable!"/>:""}
        
        </div>
        </div>
    );
}