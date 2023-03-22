import React from 'react'

const Badges = ({image, title, desc, link}) => {
  return (
    <>
       
            <div className='w-25  p-1 badge-item'>
            <div className='badge-circle' style={{overflow:'hidden'}}>
              <img src={image} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div className='badge-body p-2  bg-white '>
            <h3 className='txt-black text-500 myb-1'>{title}</h3>
              <p className='myb-1'>
                {desc}
              </p>
              <a href='' className="btn secondary sm">Read more</a>
            </div>
            </div>




          
    </>
  )
}

export default Badges
