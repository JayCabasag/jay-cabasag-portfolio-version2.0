import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo-container'>LOGO</div>
        
        <div className='nav-item-container'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Works</a></li>
                <li><a href='#'>About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar