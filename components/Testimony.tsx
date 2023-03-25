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
          <div className='mt-12'>
              <div>
                  <div className='bg-white w-[603px] h-[296px] py-10 px-6'>
                      <p className=' font-font-satoshi text-sm font-medium text-coregray leading-[26px]'>High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. The best and largest all-in-one online tutoring platform in the world</p>
                      <div className='flex space-x-2 mt-5 items-center'>
                          <Image className='w-[48px] h-[48px]' src={Test1} alt="testimonial" />
                          <div>
                              <p className='font-font-satoshi text-sm font-bold'>Bella Moon</p>
                              <p className='text-coregray text-xs'>Product Designer</p>
                          </div>
                      </div>
                  </div>
             </div>
          </div>
    </div>
  )
}

export default Testimony;