import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import image from '../../Assets/Images/avataaars.svg'
import style from './Home.module.css'

export default function Home() {
  return (
    <section className={`${style.homeSection}`}>
      <div className="container">
        <div className="vh-100 w-100  d-flex justify-content-center align-items-center">
          <div className={` ${style.homePageContant}`}>

              <div className='d-flex justify-content-center align-items-center'>
                <img src={image} className='w-50' alt="" />
              </div>
                 
              <div className='d-flex justify-content-center align-items-center'>
                <div>
                  <h2 className={`mt-5  ${style.homeTitle}`}>START FRAMEWORK</h2>

                  <div className={`d-flex justify-content-center align-items-center mt-3`}>
                     <div className={`${style.lineDiv} me-3`}></div>
                       <i className="fa-solid fa-star text-white"></i>
                     <div className={`${style.lineDiv} ms-3`}></div>
                  </div>

                  <div className='d-flex justify-content-center align-items-center mt-3'>
                    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
