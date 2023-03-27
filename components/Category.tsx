import { categories } from '@/dummy';
import React from 'react'
import Button from './Button';
import Card from './Card';

const Category = () => {
  return (
      <div className='container mt-28'>
          <div className='text-center'>
              <h2 className='h1-text'>Browse Our Popular Courses</h2> 
              <p className='p-text'>
                  High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image
              </p>
              <div className='flex justify-center space-x-8 mt-[56px]'>
                  {categories.map((category, index)=> (
                    <div className={`${index === 0 && 'bg-white text-primaryblue '} w-[137px] h-[46px] text-coregray font-font-satoshi text-base items-center flex justify-center font-bold cursor-pointer`}>
                      {category.name}
                  </div>
                ))}
        </div>
        <div className='w-full lg:gap-8 gap-3 grid lg:grid-cols-3 grid-cols-2 h-auto mt-16 text-left'>
        <Card />
        <Card />
        <Card />
        </div>
        <div className='font-bold mt-10'>
          <Button 
          name="Explore All Courses"
          bg="bg-primaryblue"
          color="text-white"
          height="h-[54px]"
          width='w-[209px]'
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