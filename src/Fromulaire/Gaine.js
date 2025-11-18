import "./test.css"
export default function MessageGaine({Message,namePlayer=""})
{
    const valuer = " triomphe avec intelligence";
    return(
        <div className="message-erure"> 
            <div className="message-erurre-background">
                <h1  className="responsive-contenu" style={Message==="Magnifique ! Le joueur"?{color:"green"}:{color:"red"}}>{Message + "  "+namePlayer+" "}<br/>{namePlayer.length>=2?valuer:""}</h1>
            </div>
        </div>
    );
}
