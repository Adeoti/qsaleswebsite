import React from 'react'

const TestimonyCard = ({imagecrd,user,rank,content}) => {
  return (
    <>
     <div className="testimony-card bg-white br-1 p-2">
                <div className="flex gap-2 spc-rnd">
                  <div className="testimony-card__image">
                    <img src={imagecrd} alt="" style={{height:'100%', width:'100%', objectFit:'cover'}} />
                  </div>
                  <div className="testimony-card__name txt-black text-500">
                    {user}
                    <br/><span className="txt-grad size-x">{rank}</span>
                  </div>
                </div>
                <div className="myt-1 txt-grey">
                  <p className=''>
                   {content}
                  </p>
                </div>
              </div>
    </>
  )
}

export default TestimonyCard
