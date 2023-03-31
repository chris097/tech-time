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
            <svg className='lg:w-[28px] lg:h-[25px] w-[9.87px] h-[7.62px] absolute lg:right-0 lg:top-10 -top-8 right-6' viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 24.5769C6.824 24.5769 1 19.2661 1 12.7223C1 6.17855 6.824 0.867676 14 0.867676C21.176 0.867676 27 6.17855 27 12.7223C27 19.2661 21.176 24.5769 14 24.5769ZM14 4.80341C9.216 4.80341 5.316 8.3598 5.316 12.7223C5.316 17.0848 9.216 20.6412 14 20.6412C18.784 20.6412 22.684 17.0848 22.684 12.7223C22.684 8.3598 18.784 4.80341 14 4.80341Z" fill="#004DB3" stroke="#9143FD" stroke-width="0.26"/>
            </svg>
            <svg className='absolute lg:w-[77px] lg:block lg:-left-16 h-[6px] left-0 lg:top-60 top-24' viewBox="0 0 77 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2 20.7188L1 3.99906L3.1 2.34958L14.2 16.3702L26.35 1L38.5 16.3702L50.65 1L62.8 16.3702L73.9 2.34958L76 3.99906L62.8 20.7188L50.65 5.34863L38.5 20.7188L26.35 5.34863L14.2 20.7188Z" fill="#FFBE4E" stroke="#FFBE4E" stroke-width="0.749882"/>
            </svg>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='h1-text capitalize'>frequently asked questions</h1>
                <p className='p-text capitalize mt-2'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            </div>

            <div className='w-full lg:px-32 px-2 lg:mt-[74px] mt-[18px]'>
                {faqs.map((faq, index) => (
                    <div onClick={() => handleFaq(index)} key={index} className='border-b lg:py-6 py-3 lg:pb-4 cursor-pointer'>
                        <div className='flex justify-between items-center'>
                            <p className={`lg:text-xl md:text-[14px] text-sm font-font-satoshi ${toggleFaq && currentFaq === index && "text-primaryblue"} font-black text-primaryblack`}>{faq.title}</p>
                            {toggleFaq && currentFaq === index ? <span><svg className='lg:w-[14px] lg:h-[2px] w-[5.32px] h-[0.76px]' viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2V0H14V2H0Z" fill="#004DB3" />
                            </svg>
                            </span> : <svg className='lg:w-[24px] lg:h-[24px] w-2 h-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1476_727" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1476_727)">
                                    <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#000F24" />
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