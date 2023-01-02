import React from 'react'
import "../Pages/ErrorPage.css"
import errorPic from "../assets/images/ErrorPage.png"
const ErrorPage = () => {
  return (
    <div className='ErrorPage_Pic'>
        <img src={errorPic} alt={errorPic} />
    </div>
  )
}

export default ErrorPage