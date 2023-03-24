import Logo from '@/assets/svg/Logo'
import { navs } from '@/dummy';
import React from 'react';
import Button from '../Button';

const Header = () => {
    return (
            <div className='flex justify-between items-center mt-8'>
                <Logo />
                <div className='flex space-x-6'>
                    <ul className='flex space-x-6 items-center'>
                    {navs.map((nav, index) => (
                        <li className="text-coregray cursor-pointer hover:text-white" key={index}>{nav.name}</li>
                    ))}
                </ul>
                <Button
                    name='Enroll Now'
                    bg='bg-white'
                    width='w-[145px]'
                    height='h-[54px]'
                    type='button'
                    color='text-primaryblue'
                    border=''
                    handleClick={() => {}}
                />
                </div>
            </div>
    )
};

export default Header