import React, {useState} from 'react';


const Accordion = () => {

  const faqs = [
    {
      question: 'How long will it take me to master Q-Sales?',
      answer: "Not long at all. Q-Sales is user-friendly. Meaning that you can master its basic features without our intervention. And with our one-on-one training, you can master the advanced areas in less than 3 day."
    },
    {
      question: 'Can I upgrade my package at any time?',
      answer: "Just anytime you deem fit. Q-Sales is also a scalable software on your end. You can decide to extend its richness to get more hot values."
    },
    {
      question: 'Is Q-Sales Free?',
      answer: "No. We have fair pricing on all our packages, and you can just pick whichever one that's convenient for your business and budget."
    },
    {
      question: 'What do I need to get started with Q-sales?',
      answer: "All you need is to provide the necessary information of your business. Then, subscribe to a package of your choice, and our tech team will set up your software swiftly."
    }
  ]


    const [selected, setSelected] = useState(null);

    const toggleFaq = (i) =>{
        if(selected === i){
          return setSelected(null);
        }else{
          setSelected(i);
        }

        console.log(i);
    }

  return (
    <>
        {faqs.map((data, i) => {
          return(
            <div className='accordion my-1 w-100' key={i}>
              <div onClick={() => toggleFaq(i)} className='flex spc-btw title__wrapper'>
              <div className='accordion__title'>{data.question}</div>
                  <span>
                    <i className={selected == i? 'fa fa-minus': 'fa fa-plus'}></i>
                  </span>
              </div>
              <div className={selected == i ? 'accordion__content show txt-grey' : 'accordion__content  txt-grey'}>{data.answer}</div>
            </div>
          )
        })}
    </>
  )

    

}

export default Accordion
