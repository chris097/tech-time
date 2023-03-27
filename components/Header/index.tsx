import Logo from '@/assets/svg/Logo'
import { navs } from '@/dummy';
import React from 'react';
import Button from '../Button';

const Header = () => {
    return (
            <div className='flex justify-between items-center md:h-[127.34px] h-[79px]'>
            <div>
                <Logo />
                </div>
                <div className='space-x-6 lg:flex hidden'>
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
            <span className='lg:hidden block cursor-pointer'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1476_835" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_1476_835)">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white"/>
                </g>
                </svg>
            </span>
            </div>
    )
};

export default Header