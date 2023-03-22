import React from 'react'
import Badges from './Badges';
import Appdevimg from '../../images/logos/appdev.jpg';
import Trainingimg from '../../images/logos/training.jpg';
import Seminarimg from '../../images/logos/seminar.jpg';
import Consultationimg from '../../images/logos/consult.jpg';

const Whatwedo = () => {
  return (
    <div className='what-we-do py-5' id="whatwedo">
      <div className="container box">
          <div style={{textAlign:'center'}} >
            <h3 className='text-500 txt-primary myb-1 border-lit-right-left sm'>What We Do</h3>
            <h3 className='txt-black size-2 w-50 m-0 m-auto'>
              We run the major tech services that <span className='txt-grad'>you and your business</span> need to grow.
            </h3>
          </div>
          <div className='flex spc-btw pos-rel what-we-do-flex gap-2 badge myt-4'>
          
        <Badges image={Consultationimg} title="IT consultation" desc="We give practical advice to serious upcoming startups" link=""/>
        <Badges image={Trainingimg} title="Training" desc=" We offer practical trainings to uplift the world of wisdom" link=""/>
        <Badges image={Appdevimg} title="App Development" desc="We develop and deploy web apps for small and large businesses" link=""/>
        <Badges image={Seminarimg} title="Seminar" desc="We give tech seminar to small and large organizations" link=""/>
       
    </div>



      </div>
    </div>
  )
}

export default Whatwedo
