import React from "react";
import './mainBody.css'

function mainBody(){
    return(
        <>
        <div className="body">
            <div className="bodyLeft">
                Hi, <br /> 
                Epoch <span id="colorGreen"> Welcomes You </span>.
              <p>
                Epoch is the AI & Machine Learning club of IIT Hyderabad, we conduct events and workshops, hold lectures and talks, and even host Kaggle competitions and hackathons. We create a platform that allows students to gain assistance and mentorship to enhance their AI & ML skills. Our aim is to propagate the enthusiasm for AI & ML in the institute and especially amongst freshmen. The secret of getting ahead is getting started and we aim to provide every student with the right start.
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