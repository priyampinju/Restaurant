import React from 'react'

const MainNavBar = ({logo}) => {
  return (
    <>
        <nav className="main-nav">
        <img src={logo} alt="logo" className='logo'/>
        <span className="buttons">
            <button className="nav-btn-group-item">Home</button>
            <button className="nav-btn-group-item">Menu</button>
            <button className="nav-btn-group-item">About us</button>
            <button className="nav-btn-group-item">Contact us</button>
        </span>
    </nav>
    </>
  )
}

export default MainNavBar