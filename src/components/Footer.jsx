import React from 'react'

const Footer = () => {
  return (
    <div className='footer pyt-7'>
      <div className='container box'>
            <div className='flex spc-btw pyb-5 gap-5'>
                <div className='w-100'>
                    <h3 className='myb-1 size-2'>Q-Sales</h3>
                    <p className='text-400'>
                    While we aren't the only provider of enterprise-level solutions, we've made small businesses grow with our tech products and services.

                    </p>
                <div className='icons flex gap-2 myt-1'>
                    <a href='' className='txt-white size-2'><i className='txt-white fa fa-facebook-square'></i></a>
                    <a href='' className='txt-white size-2'><i className='txt-white fa fa-twitter-square'></i></a>
                    <a href='' className='txt-white size-2'><i className='txt-white fa fa-instagram'></i></a>
                </div>
                </div>
                <div className='w-100'>
                    <h3 className="myb-1 size-2 border-lit-right lg">Help Links</h3>
                </div>
                <div className='w-100'>
                    <h3 className='myb-1 size-2'>Official Info</h3>
                    
                        <div className='icon-list flex gap-1'>
                            <div><i className='icon fa fa-phone'></i></div>
                            <div>
                                <span className="text-400 light-white">Call Us</span><br/>
                                    <span className='text-600'>+2348021745111</span>
                            </div>
                        </div>

                        <div className='icon-list flex gap-1 my-1'>
                            <div><i className='icon fa fa-envelope'></i></div>
                            <div>
                                <span className="text-400 light-white">Mail Us</span><br/>
                                    <span className='text-600'>+2348021745111</span>
                            </div>
                        </div>

                        <div className='icon-list flex gap-1 my-1'>
                            <div><i className='icon fa fa-phone'></i></div>
                            <div>
                                <span className="text-400 light-white">Address</span><br/>
                                    <span className='text-600'>Block 23C, Apata, Ibadan</span>
                            </div>
                        </div>

                </div>
            </div>
        <div className='copyright py-1 myt-2'>
            &copy; 2023 Q-Sales - All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
