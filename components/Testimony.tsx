import { testimonies } from '@/dummy';
import Image from 'next/image';
import React from 'react';
import Test1 from '../assets/images/test1.png';

const Testimony = () => {
  return (
      <div className='lg:mt-[119px] mt-[62px]'>
          <div>
              <h1 className='h1-text'>What our clients are saying</h1>
              <p className='p-text'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          </div>
          <div className='lg:mt-12 mt-8 relative'>
              <div className='flex space-x-4 absolute'>
                  {testimonies.map((testimony, index) => (
                      <div key={index} className='bg-white lg:w-[603px] flex flex-col lg:h-[296px] w-[332px] lg:py-10 py-5 lg:px-6 px-4'>
                          <p className=' font-font-satoshi lg:text-sm text-[10px] leading-[13.5px] font-medium text-coregray lg:leading-[26px] w-full'>{testimony.description}</p>
                      <div className='flex space-x-2 mt-5 items-center'>
                          <Image className='lg:w-[48px] lg:h-[48px] w-[24px] h-[24px]' src={Test1} alt="testimonial" />
                          <div>
                                  <p className='font-font-satoshi lg:text-sm text-[10px] font-bold'>{testimony.name}</p>
                                  <p className='text-coregray lg:text-xs text-[8px]'>{testimony.type}</p>
                          </div>
                      </div>
                  </div>
                  ))}
             </div>
                  <div className='flex justify-center space-x-3 pt-80'>
                       <div className='md:w-[10px] w-2 md:h-[10px] h-2 rounded-full bg-lighterblue' />
                       <div className='md:w-[10px] w-2  md:h-[10px] h-2  rounded-full bg-primaryblue' />
                       <div className='md:w-[10px] w-2  md:h-[10px] h-2  rounded-full bg-lighterblue' />
                       <div className='md:w-[10px] w-2  md:h-[10px] h-2  rounded-full bg-lighterblue' />
                 </div>
          </div>
    </div>
  )
}

export default Testimony;