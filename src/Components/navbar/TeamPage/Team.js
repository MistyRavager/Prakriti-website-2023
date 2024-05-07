import React from 'react'
import '../events/events.css'
import img1 from "./img1.jpg"
import img2 from "./img2.jpeg"
import img3 from "./img3.jpeg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpeg"
import img6 from "./img6.png"

import teams from "./teams.json"
function Team() {
    return (
      <div className='body'>
      <div className='heading'>
        Our <span id='colorGreen'>Heads</span>
      </div>
      <div className='cardHolder'>
        {
          teams.map((element) => {
            return (
              <>
                <a href={element.projectLink} target='_blank' rel="noreferrer">

                  <div className='card' style={{height : "250px"}}>
                    <div className='image'><img src={element.imageAddress === "img1" ? img1 :element.imageAddress === "img2" ? img2 :element.imageAddress === "img3" ? img3 :element.imageAddress === "img4" ? img4: element.imageAddress === "img5" ? img5: element.imageAddress === "img6" ? img6:
                      "https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg"} className='cardImage' alt="this is it"></img></div>
                    <div className='cardContent'>
                      <b style={{ background: 'none', color: "black" }}>Name</b>: {element.name}<br />
                      <b style={{ background: 'none', color: "black" }}>Roll</b>: {element.roll}<br/>
                    </div>
                  </div>
                </a>
              </>
            )
          })
        }
        {/* <a href='https://www.youtube.com' rel="noreferrer" target='_blank'>

        <div className='card'>
          <div className='image'><img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg' className='cardImage' alt=""></img></div>
          <div className='cardContent'>
            Description: Lorem ad nisi et dolore eiusmod proident eiusmod esse nostrud non eiusmod adipisicing. Eiusmod nulla proident velit excepteur magna proident deserunt dolore proident cillum. Consectetur ea magna enim sunt officia id voluptate incididunt esse quis ex fugiat. Aute nulla tempor sint enim commodo dolor ut.
          </div>
        </div>
        </a>
        <a href='https://www.youtube.com' rel="noreferrer" target='_blank'>

        <div className='card'>
          <div className='image'><img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg' className='cardImage' alt=""></img></div>
          <div className='cardContent'>
            Description: Lorem ad nisi et dolore eiusmod proident eiusmod esse nostrud non eiusmod adipisicing. Eiusmod nulla proident velit excepteur magna proident deserunt dolore proident cillum. Consectetur ea magna enim sunt officia id voluptate incididunt esse quis ex fugiat. Aute nulla tempor sint enim commodo dolor ut.
          </div>
        </div>
        </a>
        <a href='https://www.youtube.com' rel="noreferrer" target='_blank'>

        <div className='card'>
          <div className='image'><img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg' className='cardImage' alt=""></img></div>
          <div className='cardContent'>
            Description: Lorem ad nisi et dolore eiusmod proident eiusmod esse nostrud non eiusmod adipisicing. Eiusmod nulla proident velit excepteur magna proident deserunt dolore proident cillum. Consectetur ea magna enim sunt officia id voluptate incididunt esse quis ex fugiat. Aute nulla tempor sint enim commodo dolor ut.
          </div>
        </div>
        </a>
        <a href='https://www.youtube.com' rel="noreferrer" target='_blank'>

        <div className='card'>
          <div className='image'><img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg' className='cardImage' alt=""></img></div>
          <div className='cardContent'>
            Description: Lorem ad nisi et dolore eiusmod proident eiusmod esse nostrud non eiusmod adipisicing. Eiusmod nulla proident velit excepteur magna proident deserunt dolore proident cillum. Consectetur ea magna enim sunt officia id voluptate incididunt esse quis ex fugiat. Aute nulla tempor sint enim commodo dolor ut.
          </div>
        </div>
        </a> */}

      </div>
    </div>
      )
}

export default Team

