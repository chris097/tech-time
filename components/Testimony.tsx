import Image from 'next/image';
import React from 'react';
import Test1 from '../assets/images/test1.png';

const Testimony = () => {
  return (
      <div className='mt-[119px]'>
          <div>
              <h1 className='h1-text'>What our clients are saying</h1>
              <p className='p-text'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          </div>
          <div className='lg:mt-12 mt-8'>
              <div>
                  <div className='bg-white lg:w-[603px] lg:h-[296px] w-[332px] lg:py-10 py-5 lg:px-6 px-4'>
                      <p className=' font-font-satoshi lg:text-sm text-[10px] leading-[13.5px] font-medium text-coregray lg:leading-[26px]'>High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. The best and largest all-in-one online tutoring platform in the world</p>
                      <div className='flex space-x-2 mt-5 items-center'>
                          <Image className='lg:w-[48px] lg:h-[48px] w-[24px] h-[24px]' src={Test1} alt="testimonial" />
                          <div>
                              <p className='font-font-satoshi lg:text-sm text-[10px] font-bold'>Bella Moon</p>
                              <p className='text-coregray lg:text-xs text-[8px]'>Product Designer</p>
                          </div>
                      </div>
                  </div>
             </div>
          </div>
    </div>
  )
}

export default Testimony;