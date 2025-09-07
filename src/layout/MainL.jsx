import React from 'react'
import './mainL.css'
import {Outlet} from "react-router-dom"
import Topnav from '../component/nav/topNavs/TopNavs'

const MainLayout = () => {
    
    return (
      <div id='layout'>
        <div id="nav"><Topnav/></div>
        <div id="display"><Outlet/></div>
        <footer><p>Copyright © 2025 Double Merit Children Academy</p></footer>
      </div>
    )
  }
  
  export default MainLayout
  