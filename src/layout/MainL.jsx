import React from 'react'
import './mainL.css'
import {Outlet} from "react-router-dom"
import Topnav from '../component/nav/topNavs/topNavs'

const MainLayout = () => {
    
    return (
      <div id='layout'>
        <div id="nav"><Topnav/></div>
        <div id="display"><Outlet/></div>
      </div>
    )
  }
  
  export default MainLayout
  