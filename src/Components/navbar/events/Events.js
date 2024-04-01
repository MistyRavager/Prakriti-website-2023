import React from 'react'
import './events.css'
import events from "./events.json"
import img1 from "./img1.jpg"
function Events() {
  return (
    <div className='body'>
      <div className='heading'>
        Our <span id='colorGreen'>Events</span>
      </div>
      <div className='cardHolder'>
        
        {
          events.map((element)=>{
            return(
                <>
              <div className='card'>
          <div className='image'><img src={element.imageAddress === "img1" ? img1 :
            "https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg"} className='cardImage' alt="this is it"></img></div>
          <div className='cardContent'>
            <b style={{background : 'none', color : "black"}}>Name</b>: {element.name}<br/>
            <b style={{background : 'none', color : "black"}}>Description</b>: {element.description}<br/>
            <b style={{background : 'none', color : "black"}}>year</b> : {element.year}<br/>
            <b style={{background : 'none', color : "black"}}>GitHub link</b> : <a href={element.link} target='_blank' rel="noreferrer" style={{color : "black"}}>click here</a>
          </div>
          </div>
            </>
            )
          })
        }
        {/* <div className='card'>
          <div className='image'><img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg' className='cardImage' alt=""></img></div>
          <div className='cardContent'>
            <b style={{background : 'none'}}>Description</b>: Lorem ad nisi et dolore eiusmod proident eiusmod esse nostrud non eiusmod adipisicing. Eiusmod nulla proident velit excepteur magna proident deserunt dolore proident cillum. Consectetur ea magna enim sunt officia id voluptate incididunt esse quis ex fugiat. Aute nulla tempor sint enim commodo dolor ut.<br/>
            <b style={{background : 'none'}}>year</b> : 2020
          </div>
        </div>

        <div className='card'>
          <div className='image'><img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg' className='cardImage' alt=""></img></div>
          <div className='cardContent'>
            <b style={{background : 'none'}}>Description</b>: Lorem ad nisi et dolore eiusmod proident eiusmod esse nostrud non eiusmod adipisicing. Eiusmod nulla proident velit excepteur magna proident deserunt dolore proident cillum. Consectetur ea magna enim sunt officia id voluptate incididunt esse quis ex fugiat. Aute nulla tempor sint enim commodo dolor ut.<br/>
            <b style={{background : 'none'}}>year</b> : 2020
          </div>
        </div>

        <div className='card'>
          <div className='image'><img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg' className='cardImage' alt=""></img></div>
          <div className='cardContent'>
            <b style={{background : 'none'}}>Description</b>: Lorem ad nisi et dolore eiusmod proident eiusmod esse nostrud non eiusmod adipisicing. Eiusmod nulla proident velit excepteur magna proident deserunt dolore proident cillum. Consectetur ea magna enim sunt officia id voluptate incididunt esse quis ex fugiat. Aute nulla tempor sint enim commodo dolor ut.<br/>
            <b style={{background : 'none'}}>year</b> : 2020
          </div>
        </div>

        <div className='card'>
          <div className='image'><img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg' className='cardImage' alt=""></img></div>
          <div className='cardContent'>
            <b style={{background : 'none'}}>Description</b>: Lorem ad nisi et dolore eiusmod proident eiusmod esse nostrud non eiusmod adipisicing. Eiusmod nulla proident velit excepteur magna proident deserunt dolore proident cillum. Consectetur ea magna enim sunt officia id voluptate incididunt esse quis ex fugiat. Aute nulla tempor sint enim commodo dolor ut.<br/>
            <b style={{background : 'none'}}>year</b> : 2020
          </div>
        </div> */}
        
      </div>
    </div>
  )
}

export default Events
