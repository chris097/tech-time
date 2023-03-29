import React, { useEffect, useState } from 'react'
import { cards, categories } from '@/dummy';
import Button from './Button';
import Card from './Card';

type cardProps = {
  id: number
  title: string
  name: string
  amount: string
  type: string
}

const Category = () => {
  const [isFilteredCategory, setIsFilteredCategory] = useState<cardProps[]>([]);
  const [isType, setIsType] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const filterCategory = () => {
    const filteredCategory = cards.filter(card => card.type === isType);
    setIsFilteredCategory(filteredCategory)
  };

  const categoryTag = (key:string, index:number) => {
    setIsType(key)
    setActiveCategory(index)
  }

  useEffect(() => {
    filterCategory()
  }, [isType]);

  return (
      <div className='container lg:mt-28 mt-16'>
          <div className='text-center'>
              <h2 className='h1-text'>Browse Our Popular Courses</h2> 
              <p className='p-text'>
                  High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image
              </p>
              <div className='flex justify-center lg:space-x-8 space-x-4 lg:mt-[56px] mt-5'>
                  {categories.map((category, index)=> (
                    <div
                      onClick={() => categoryTag(category.key, index)}
                      key={index}
                      className={`${index === activeCategory && 'bg-white text-primaryblue '} px-6 py-3 text-coregray font-font-satoshi lg:text-base text-[8px] items-center flex justify-center font-bold cursor-pointer`}>
                      {category.name}
                  </div>
                ))}
        </div>
        <div className='w-full lg:gap-8 gap-3 grid lg:grid-cols-3 grid-cols-2 h-auto lg:mt-16 mt-10 text-left'>
          {isType ? isFilteredCategory?.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              type={card.type}
              amount={card.amount}
              title={card.title}
            />
          ))  : cards.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              type={card.type}
              amount={card.amount}
              title={card.title}
            />
        ))}
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