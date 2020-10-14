import React from 'react'

export const MainSection = () => {
  return (
    <section className="hero is-white is-fullheight">
      <div className="hero-body"> 
        <div className="container">

          <div className="columns">

            <div className="column is-one-fifth"></div>

            <div className="column is-one-fifth is-hidden-touch">           
              <figure className='image is-128x128'>
                <img src="https://i.imgur.com/QVESlbM.png" alt=""/>
              </figure>
            </div>

            <div className="column is-desktop">
              <h1 className="title is-1 is-size-2-touch has-text-weight-bold">
                Hi! I'm Ezequiel. <br/>
                A Web Developer.
              </h1>
              <div className="subtitle is-4 is-size-5-touch">
                <p>Every interaction tells a story.</p>
              </div>
              <div className="subtitle is-4 is-size-5-touch">
                <p>I'm interested in how technology influences the stories we tell each oth</p>
              </div>
              <div className="subtitle is-4 is-size-5-touch">
                <p>I strive to develop software that makes each story more engaging..</p>
              </div>
              <div className="subtitle is-1 is-size-3-touch">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-github ml-1"></i>
              </div>
            </div>

            <div className="column is-one-quarter is-hidden-desktop"></div>            
            
          </div>
        </div>         
      </div>
    </section>
  )
}
