import { faqs } from '@/dummy';
import React, { useState } from 'react'

const FAQ = () => {

    const [currentFaq, setCurrentFaq] = useState(0);
    const [toggleFaq, setToggleFaq] = useState(false);

    const handleFaq = (index: number) => {
        setCurrentFaq(index)
        setToggleFaq(open => !open)
    };

    return (
        <div className='container relative mt-20'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='h1-text capitalize'>frequently asked questions</h1>
                <p className='p-text capitalize mt-2'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            </div>
            <div className='w-full lg:px-32 px-2 lg:mt-[74px] mt-[18px]'>
                {faqs.map((faq, index) => (
                    <div onClick={() => handleFaq(index)} key={index} className='border-b lg:py-6 pb-4 cursor-pointer'>
                    <div className='flex justify-between items-center'>
                            <p className={`lg:text-xl text-[14px] font-font-satoshi ${toggleFaq && currentFaq === index && "text-primaryblue"} font-black text-primaryblack`}>{faq.title}</p>
                        {toggleFaq && currentFaq === index ? <span><svg className='lg:w-[14px] lg:h-[2px] w-[5.32px] h-[0.76px]' viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2V0H14V2H0Z" fill="#004DB3" />
                        </svg>
                        </span>: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1476_727" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1476_727)">
<path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#000F24"/>
</g>
</svg>
}
                    </div>
                        {(toggleFaq && currentFaq === index) && <p className='text-coregray lg:text-base text-[8px] font-font-satoshi font-medium lg:leading-[26px] leading-[16px] mt-4'>{faqs[currentFaq].description}</p>}
                </div>
                ))}
            </div>
        </div>
    )
};

export default FAQ