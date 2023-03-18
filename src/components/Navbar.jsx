import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container box'>
            <div className='top flex spc-btw my-1 text-500'>
                <div className='txt-black size-x'>Welcome to Q-Sales Official Website</div>
                <div className='txt-black size-x'>
                    <i className='fa fa-envelope'></i> support@getqsales.com, services@getqsales.com
                </div>
            </div>

            <div className="nav flex br-xs p-2 spc-btw my-2 bg-white pos-rel in">
                <div className='dot-design'></div>
                <div className="logo txt-grad text-900">Q-Sales</div>
                <ul className='flex gap-3'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Portal</a></li>
                    <li><a href="">Kraota</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
