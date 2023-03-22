import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div className="faq bg-white  py-6 " id="contactfaq">
        <div className="container box">
            <div className='flex of-faq gap-2 spc-btw'>
                <div className='w-50'>
                <h3 className='txt-primary text-500 size-1 border-lit-right sm'>FAQs</h3>
                <h3 className='text-600 myb-2 txt-black size-2'>Frequently Asked Questions</h3>
                   
                <Accordion/>
                
                </div>
                <div className='w-50' id="contact">
                    <h3 className='txt-primary text-500 size-1 border-lit-right sm'>Get in touch</h3>
                    <h3 className='text-600 txt-black size-2'>Drop Us a Message</h3>

                    <form>
                        <div className='flex gap-1 myt-1'>
                        <input type="text" className="p-1 w-50 size-1 txt-black text-500" placeholder="Your name here" required />
                        <input type="email" className='p-1 w-50 size-1 text-500 txt-black' placeholder="Your email" required />
                        </div>
                        <textarea className='w-100 my-1 p-1' style={{minHeight:'170px'}}></textarea>
                        <button className='btn bg-grad text-400 lg size-1' style={{cursor:'pointer'}}>Submit now</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
