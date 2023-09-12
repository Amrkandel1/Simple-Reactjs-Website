import React from 'react'
import style from './Footer.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Footer() {
  return (
    <footer className=''>

      <div className={`${style.footerPart1} `}>
        <div className="container py-5">
          <div className="row text-center text-white ">
            <div className="col-md-4 gy-5">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>

            </div>

            <div className="col-md-4 gy-5">
              <h3>AROUND THE WEB</h3>
              <div className='text-white d-flex justify-content-center align-items-center'>
                <div className={`${style.footerIcons} me-2 d-flex justify-content-center align-items-center`}>
                <i className="fa-brands fa-facebook fs-5 "></i>
                </div>

                <div className={`${style.footerIcons} me-2 d-flex justify-content-center align-items-center`}>
                <i className="fa-brands fa-twitter fs-5"></i>
                </div>

                <div className={`${style.footerIcons} me-2 d-flex justify-content-center align-items-center`}>
                <i className="fa-brands fa-linkedin-in fs-5"></i>
                </div>

                <div className={`${style.footerIcons} me-2 d-flex justify-content-center align-items-center`}>
                <i className="fa-solid fa-globe fs-5"></i>
                </div>
                

              </div>
              
            </div>

            <div className="col-md-4 gy-5">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              
            </div>

          </div>
        </div>
      </div>


      <div className={`${style.footerPart2} py-3`}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-white">
              <p>Copyright © Your Website 2021</p>
            </div>
          </div>
        </div>


            

      </div>
        

    </footer>
  )
}
