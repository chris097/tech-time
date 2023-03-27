import React from 'react'

const FAQ = () => {
    return (
        <div className='container relative mt-20'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='h1-text capitalize'>frequently asked questions</h1>
                <p className='p-text capitalize mt-2'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            </div>
            <div className='w-full lg:px-32 px-2 lg:mt-[82px] mt-[24px]'>
                <div className='border-b lg:pb-8 pb-4'>
                    <div className='flex justify-between items-center'>
                        <p className='lg:text-xl text-[14px] font-font-satoshi text-primaryblue font-black'>Is there a free trial available?</p>
                        <span><svg className='lg:w-[14px] lg:h-[2px] w-[5.32px] h-[0.76px]' viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2V0H14V2H0Z" fill="#004DB3" />
                        </svg>
                        </span>
                    </div>
                    <p className='text-coregray lg:text-base text-[8px] font-font-satoshi font-medium lg:leading-[26px] leading-[16px] mt-4'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.</p>
                </div>
                <div className='border-b lg:pb-8 pb-4 mt-8'>
                    <div className='flex justify-between items-center'>
                        <p className='lg:text-xl text-[14px] font-font-satoshi text-primaryblack font-black'>Is there a free trial available?</p>
                        <span><svg className='lg:w-[14px] lg:h-[2px] w-[5.32px] h-[5.32px]' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z" fill="#000F24"/>
</svg>

                        </span>
                    </div>
                    {/* <p className='text-coregray text-base font-font-satoshi font-medium leading-[26px] mt-4'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.</p> */}
                </div>
            </div>
        </div>
    )
};

export default FAQ