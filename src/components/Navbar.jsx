import React, {useState} from 'react'

const Navbar = () => {

    const [navstate, setNavstate] = useState(false);


    const toggleNav = () => {
        setNavstate(!navstate)
    }

  return (
    <div className='navbar' id="topper">
        <div className='container box'>
            <div className='top flex spc-btw my-1 text-500'>
                <div className='txt-black size-x'>Welcome to Q-Sales Official Website</div>
                <div className=' size-x support-top txt-white'>
                    <i className='fa fa-envelope'></i> support@getqsales.com <span className="left-cast">, services@getqsales.com</span>
                </div>
            </div>

            <div className="nav flex br-xs p-2 spc-btw my-2 bg-white pos-rel in">
                <div className='dot-design'></div>
                <div className="logo txt-grad text-900">Q-Sales</div>
                 <button className='mobile-toggler' onClick={toggleNav}>&#9776;</button>
                <ul className='flex gap-3 desktop'>
                    <li><a href="#topper">Home</a></li>
                    <li><a href="#aboutus">About</a></li>
                    <li><a href="#contactfaq">Contact</a></li>
                    <li><a href="#testimony">Testimonial</a></li>
                    <li><a href="#contactfaq">FAQ</a></li>
                </ul>
                {navstate && 
                    <ul className='flex left-cast gap-3 mobile'>
                    <li><button className="mobile-toggler" onClick={toggleNav}><i className="fa fa-times size-2"></i></button></li>
                    <li><a href="#topper" onClick={toggleNav}>Home</a></li>
                    <li><a href="#aboutus" onClick={toggleNav}>About</a></li>
                    <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
                    <li><a href="#testimony" onClick={toggleNav}>Testimonial</a></li>
                    <li><a href="#contactfaq" onClick={toggleNav}>FAQ</a></li>
                </ul>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
