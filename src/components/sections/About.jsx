import React from 'react';
import Aboutimg from '../../images/aboutus.jpg';

const About = () => {
  return (
    <div className='about bg-grey' id="aboutus">
      <div className='container box'>
      <div className='flex spc-btw gap-3 py-4 '>
            
            <div className=" w-50">
                    <h3 className='size-1 text-500 txt-primary border-lit-right sm'>About Us</h3>
                    <h3 className='size-2 text-900 myb-2 myt-1'>
                        We Have a Team of <span className="txt-grad">Experienced</span> IT Specialities
                    </h3>
                <p className='txt-grey'>
                    Amazing and happy people work for us from different parts of the planet. And we're quite compatible to make our clients grow and great.
                </p>

                <div className='card-parent my-2 gap-1'>
                    <div className='card-item flex gap-1'>
                        <div className='icon'><i className='fa fa-money size-2'></i></div>
                        <div>
                            <h3 className='txt-black'>Enterprise Apps on the cloud</h3>
                            <p className='txt-grey '>We've launched two solid apps that are alway eager to re-shape the businesses that use them.</p>
                        </div>
                    </div>
                    <div className='card-item flex gap-1'>
                        <div className='icon'><i className='fa fa-trophy size-2'></i></div>
                        <div>
                        
                            <h3 className='txt-black'>Exceptional IT Services</h3>
                            <p className='txt-grey '>From consultation to training; and to app development, we are exceptional.</p>
                        </div>
                    </div>
                </div>
                <a href='#contactfaq' className='btn secondary lg text-500'>Get in touch &nbsp; &nbsp; <i className='fa fa-plus'></i></a>
            </div>
            <div className=' w-50 flex left-cast spc-btw'><div></div>
                <div className='pos-rel  about-rainbow bg-grad'>
                    <div className='about-circle'>
                        <img src={Aboutimg}  style={{objectFit:'cover', width:'100%', height:'100%'}}/>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
