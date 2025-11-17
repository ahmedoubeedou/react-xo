import "./test.css"
export default function MessageGaine({Message,namePlayer=""})
{
    return(
        <div className="message-erure"> 
            <div className="message-erurre-background">
                <h1  className="responsive-contenu" style={Message==="Magnifique ! Le joueur"?{color:"green"}:{color:"red"}}>{Message + "  "+namePlayer+" triomphe avec intelligence"}</h1>
            </div>
        </div>
    );
}