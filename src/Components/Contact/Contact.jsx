import React from 'react'
import style from './Contact.module.css'

export default function Contact() {


  function changeColor(){

     if(document.getElementById('userName').value != ''){
      document.getElementById('nameLabel').style.top='0px'
     }else{
      document.getElementById('nameLabel').style.top='40px'
     }
       
     if(document.getElementById('userAge').value != ''){
      document.getElementById('ageLabel').style.top='0px'
     }else{
      document.getElementById('ageLabel').style.top='40px'
     }

     if(document.getElementById('userEmail').value != ''){
      document.getElementById('emailLabel').style.top='0px'
     }else{
      document.getElementById('emailLabel').style.top='40px'
     }

     if(document.getElementById('userPassword').value != ''){
      document.getElementById('passwordLabel').style.top='0px'
     }else{
      document.getElementById('passwordLabel').style.top='40px'
     }

  }



  return (
    <section>
      <div className="container w-100 vh-100 ">
        <div className="row mt-5">
          <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
            <div className={``}>
              <div>
                <h2 className={`mt-5 ${style.contactTitle}`}>CONTACT SECTION</h2>
              </div>

              <div className={`d-flex justify-content-center align-items-center mt-3`}>
                  <div className={`${style.contactLineDiv} me-3 mb-4`}></div>
                    <i className={`fa-solid fa-star ${style.contactLineDivIcon} mb-4`}></i>
                  <div className={`${style.contactLineDiv} ms-3 mb-4`}></div>
              </div>

            </div>
          </div>
        </div>

      <div className={`container mt-5  w-75  m-auto`}>
      <div className="row ">
          <div className="col-12">
                


              <div className={`overflow-hidden`}>
                <label id='nameLabel' htmlFor="userName" className={`${style.inputsLabel}`}>userName :</label>
              </div>  

              <input onKeyUp={()=>{changeColor()}}  id="userName" type="text" placeholder="userName" name="userName" className={`${style.inputEdit} form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty`}/>



              <div className={`overflow-hidden`}>
                <label id='ageLabel' htmlFor="userAge" className={`${style.inputsLabel}`}>userAge :</label>
              </div>  

              <input onKeyUp={()=>{changeColor()}} id="userAge" type="text" placeholder="userAge" name="userAge" className={`${style.inputEdit} form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty`}/>



              <div>
                <label id='emailLabel' htmlFor="userEmail" className={`${style.inputsLabel}`}>userEmail :</label>
              </div> 

              <input onKeyUp={()=>{changeColor()}} id="userEmail" type="text" placeholder="userEmail" name="userEmail" className={`${style.inputEdit} form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty`}/>



              <div>
                <label id='passwordLabel' htmlFor="userPassword" className={`${style.inputsLabel}`}>userPassword :</label>
              </div>  
                        
              <input onKeyUp={()=>{changeColor()}} id="userPassword" type="text" placeholder="userPassword" name="userPassword" className={`${style.inputEdit} form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty`}/>



              <button className={`btn mt-4 text-white ${style.submitBtn}`}> send Message </button>

          </div>
        </div>

      </div>
        

      </div>
    </section>
  )
}
