import React from 'react'

const Partners = () => {
  return (
    <div className='bg-grey m-0'>
      <div className='container box'>
        <div className='flex spc-btw gap-3 py-7'>
            <div className='grid w-60'>
                <div>Logo 1</div>
                <div>Logo 2</div>
                <div>Logo 3</div>
                <div>Logo 4</div>
                <div>Logo 5</div>
                <div>Logo 6</div>
            </div>
            <div className=" w-40">
                    <h3 className='size-1 text-500 txt-primary border-lit-right sm'>Our Partners</h3>
                    <h3 className='size-2 text-900 myb-2 myt-1'>
                        Long Time Project with our <span className="txt-grad">Best Partners</span>
                    </h3>
                <p className='txt-grey'>
                    We've been luck to work with a long list of customers, located in and out of the country. Thanks to them we have grown as professionals.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
