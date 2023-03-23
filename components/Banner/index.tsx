import React from 'react'
import Header from '../Header'

const Banner = () => {
  return (
      <div className='h-screen bg-primaryblue text-white font-font-satoshi'>
          <div className='mx-7 md:mx-14 2xl:max-w-7xl h-[150px] items-center'>
              <Header />
              <div className='flex mt-5'>
                  <div className='flex-1 border'>
                      <h1 className='text-white 2xl:text-[64px] lg:text-[56px] font-font-clash font-bold leading-tight'>
                          Grow your skills to advance your career path
                      </h1> 
                      <p className='font-font-satoshi text-base w-[70%] mt-4 text-primarygray'>
                          build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                      </p>
                      <div>
                      </div>
                 </div>
                 <div className='flex-1 border'>Box 1</div>
              </div>
          </div>
    </div>
  )
}

export default Banner