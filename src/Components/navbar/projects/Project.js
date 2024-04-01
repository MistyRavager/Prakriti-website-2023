import React from 'react'
import './project.css'
import projects from "./projects.json"
import img1 from './img1.jpg'
function Project() {
  return (
    <div className='body'>
      <div className='heading'>
        Our <span id='colorGreen'>Projects</span>
      </div>
      <div className='cardHolder'>
        {
          projects.map((element) => {
            return (
              <>
                <a href={element.projectLink} target='_blank' rel="noreferrer">

                  <div className='card'>
                    <div className='image'><img src={element.imageAddress === "img1" ? img1 :
                      "https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg"} className='cardImage' alt="this is it"></img></div>
                    <div className='cardContent'>
                      <b style={{ background: 'none', color: "black" }}>Name</b>: {element.name}<br />
                      <b style={{ background: 'none', color: "black" }}>Description</b>: {element.description}<br />
                      <b style={{ background: 'none', color: "black" }}>year</b> : {element.year}<br />
                      <b style={{ background: 'none', color: "black" }}>GitHub link</b> : <a href={element.link} target='_blank' rel="noreferrer" style={{ color: "black" }}>click here</a>
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

export default Project
