import React from 'react'
import Navbar from '../components/Navbar'
import HomeInfo from '../components/HomeInfo'

function home() {
  return (
    <div className="container-fluid">
       <Navbar/>
       <HomeInfo/>
    </div>
  )
}

export default home