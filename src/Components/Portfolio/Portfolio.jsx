import React from 'react'
import style from './Portfolio.module.css'
import image1 from '../../Assets/Images/poert1.png'
import image2 from '../../Assets/Images/port2.png'
import image3 from '../../Assets/Images/port3.png'




export default function Portfolio() {

    function getSource(image1){

        document.getElementById('imgScreen').setAttribute('src' , `${image1}`)

        document.getElementById('imgTemp').classList.replace('d-none' , 'd-block')         
    }

    function closeImg(){
        document.getElementById('imgTemp').classList.replace('d-block' , 'd-none')
    }


  return (
    <>
    <div id="imgTemp" onClick={()=>{closeImg()}} className={`${style.imageScreen} d-none`}>
        <div className='d-flex justify-content-center align-items-center w-100 h-100'>
            <img id="imgScreen" src='' className={`${style.imageScreenSize}`} alt="" />
        </div>
    </div>

    <section className='mt-5 w-100'>
        <div className="container w-100 mb-5">
          
            <div className="row">
                <div className="col-12 mt-5">
                    <div className='text-center'>
                      <div className={`mt-5 ${style.portfolioTitle} `}>
                        <h3>PORTFOLIO COMPONENT</h3>
                      </div>

                      <div className={`d-flex justify-content-center align-items-center mt-3`}>
                        <div className={`${style.portfolioLineDiv} me-3`}></div>
                        <i className={`fa-solid fa-star ${style.portfolioLineDivIcon}`}></i>
                        <div className={`${style.portfolioLineDiv} ms-3`}></div>
                      </div>

                    </div>
                    
                </div>
            </div>

            <div className="row gy-4 mt-2">
                <div className="col-lg-4 col-md-6">
                    <div  className={`${style.imageHover}`}>
                        <img src={image1} className={`w-100 rounded-3`} alt="" />
                          <div onClick={()=>{getSource(image1)}} className={`${style.imageLayer} rounded-3 d-flex justify-content-center align-items-center`}>
                            <i className="fa-solid fa-plus "></i>
                          </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className={`${style.imageHover}`}>
                        <img src={image2} className={`w-100 rounded-3`} alt="" />
                          <div onClick={()=>{getSource(image2)}} className={`${style.imageLayer} rounded-3 d-flex justify-content-center align-items-center`}>
                            <i className="fa-solid fa-plus "></i>
                          </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className={`${style.imageHover}`}>
                        <img src={image3} className={`w-100 rounded-3`} alt="" />
                          <div onClick={()=>{getSource(image3)}} className={`${style.imageLayer} rounded-3 d-flex justify-content-center align-items-center`}>
                            <i className="fa-solid fa-plus "></i>
                          </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className={`${style.imageHover}`}>
                        <img src={image1} className={`w-100 rounded-3`} alt="" />
                          <div onClick={()=>{getSource(image1)}} className={`${style.imageLayer} rounded-3 d-flex justify-content-center align-items-center`}>
                            <i className="fa-solid fa-plus "></i>
                          </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className={`${style.imageHover}`}>
                        <img src={image2} className={`w-100 rounded-3`} alt="" />
                          <div onClick={()=>{getSource(image2)}} className={`${style.imageLayer} rounded-3 d-flex justify-content-center align-items-center`}>
                            <i className="fa-solid fa-plus "></i>
                          </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className={`${style.imageHover}`}>
                        <img src={image3} className={`w-100 rounded-3`} alt="" />
                          <div onClick={()=>{getSource(image3)}} className={`${style.imageLayer} rounded-3 d-flex justify-content-center align-items-center`}>
                            <i className="fa-solid fa-plus "></i>
                          </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>  
  )
}
