import { categories } from '@/dummy';
import React from 'react'
import Button from './Button';
import Card from './Card';

const Category = () => {
  return (
      <div className='container lg:mt-28 mt-16'>
          <div className='text-center'>
              <h2 className='h1-text'>Browse Our Popular Courses</h2> 
              <p className='p-text'>
                  High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image
              </p>
              <div className='flex justify-center lg:space-x-8 space-x-4 lg:mt-[56px] mt-5'>
                  {categories.map((category, index)=> (
                    <div key={index} className={`${index === 0 && 'bg-white text-primaryblue '} lg:w-[137px] w-[69px] lg:h-[46px] h-[19px] text-coregray font-font-satoshi lg:text-base text-[8px] items-center flex justify-center font-bold cursor-pointer`}>
                      {category.name}
                  </div>
                ))}
        </div>
        <div className='w-full lg:gap-8 gap-3 grid lg:grid-cols-3 grid-cols-2 h-auto lg:mt-16 mt-10 text-left'>
        <Card />
        <Card />
        <Card />
        </div>
        <div className='font-bold lg:mt-10 mt-6'>
          <Button 
          name="Explore All Courses"
          bg="bg-primaryblue"
          color="text-white"
          height="lg:h-[54px] h-[27px]"
          width='lg:w-[209px] w-[83px]'
          type='button'
          border=''
          handleClick={() => {}}
        />
        </div>
          </div>
    </div>
  )
}

export default Category;