import React from 'react'
import style from './About.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function About() {
  return (
    <section className={`${style.aboutSection}`}>
      <div className="container">
        <div className={`vh-100 w-100 d-flex justify-content-center align-items-center`}>
          <div className="row w-100">
            <div className="col-12 ">
              <div className='text-center'>
                <h2 className='text-white'>ABOUT COMPONENT</h2>                                
              </div>

              <div className={`d-flex justify-content-center align-items-center mt-3`}>
                     <div className={`${style.aboutSectionLineDiv} me-3`}></div>
                       <i className="fa-solid fa-star text-white"></i>
                     <div className={`${style.aboutSectionLineDiv} ms-3`}></div>
              </div>

              <div className="row m-auto mt-3 text-white">
                    <div className={`col-md-6 ${style.aboutSectionParag}`}>
                      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                    </div>

                    <div className={`col-md-6 ${style.aboutSectionParag}`}>
                      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                      
                    </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
