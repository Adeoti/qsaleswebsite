import React from 'react';
import Ayzeelogo from '../../images/logos/ayzeelogo.png';
import Gtlogo from '../../images/logos/gtbanklogo.png';
import Meenafimg from '../../images/meenaf.jpeg';
import Supremeimg from '../../images/supreme.jpeg';
import rabsmauimg from '../../images/rabsmau.jpeg';
import Teefahimg from '../../images/teefah.jpeg';



const Partners = () => {
  return (
    <div className='bg-grey m-0'>
      <div className='container box'>
        <div className='flex of-partners spc-btw gap-3 py-7'>
            <div className='grid w-60 o2'>
                <div><img src={Ayzeelogo} style={{width:'100%', maxHeight:'75px'}}/></div>
                <div><img src={Gtlogo} style={{width:'100%', maxHeight:'75px'}}/></div>
                <div><img src={Meenafimg} style={{width:'100%', maxHeight:'75px'}}/></div>
                <div><img src={rabsmauimg} style={{width:'100%', maxHeight:'75px'}}/></div>
                <div><img src={Supremeimg} style={{width:'100%', maxHeight:'75px'}}/></div>
                <div><img src={Teefahimg} style={{width:'100%', maxHeight:'75px'}}/></div>
                
            </div>
            <div className=" w-40 o1">
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
