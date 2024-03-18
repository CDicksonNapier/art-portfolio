//  importing dependencies and scss file 
import React from 'react'
import './layout.scss';

import {Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

// the layout component - this component holds the sidebar and the outlet for the routes and will be displayed on every page 
const Layout = () => {
  return (
    <div className="App">
        <Sidebar />
        <Outlet />
        
    </div>
  )
}
// exporting the layout component
export default Layout