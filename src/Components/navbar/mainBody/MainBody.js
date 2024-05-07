import React from "react";
import './mainBody.css'

function mainBody(){
    return(
        <>
        <div className="body">
            <div className="bodyLeft">
                Hi, <br /> 
                Prakriti <span id="colorGreen"> Welcomes You </span>.
              <p>
                Prakriti Club of IIT Hyderabad encourages students to use technology and the environment for sustainable development, facilitating smooth interdisciplinary collaboration. Increasing campus awareness of enviroment issues and developing creative solutions to urgent ecological problems are two aspects of our purpose.
                </p>
                
            </div>
            {/* <div className="bodyRight">
               <img src="AI Image.jpg" alt="" />
            </div> */}
        </div>
        </>
    );
}

export default mainBody;