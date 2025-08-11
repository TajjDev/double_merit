import React from 'react'
import { NavLink } from 'react-router-dom'
import './link.css'

const Links = ({to,label,onClick,className}) => {
  return (<>
    <NavLink  className={className} onClick={onClick} id='linkk' to={to}>
        <span  id='span2'>{label}</span>
    </NavLink></>
  )
}

export default Links
