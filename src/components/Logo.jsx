import React from 'react'
import logo from '../assets/logo.jpg'

const Logo = ({width = "100px"}) => {
  return  <img src={logo} alt="" width={width}/>
}

export default Logo
