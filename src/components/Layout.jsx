// import React from 'react'
import { Outlet, Link } from "react-router-dom"
import './../App.css'

const Layout = () => {
  return (
        <>
          <nav className="body ">
            <ul className="flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
  )
}

export default Layout
