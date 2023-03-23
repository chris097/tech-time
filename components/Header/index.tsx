import Logo from '@/assets/svg/Logo'
import React from 'react';
import Banner from '../Banner';

type NavProps = {
    id: number,
    name: string,
    link: string
}

const navs: NavProps[] = [
    {id: 1, name: "Home", link: "/home"},
    { id: 2, name: "About Us", link: "/about-us" },
    {id: 3, name: "Courses", link: "/courses"},
    {id: 4, name: "Testimonial", link: "/testimonial"},
    {id: 5, name: "Community", link: "/community"},
]

const Header = () => {
    return (
            <div className='flex justify-between h-[150px] items-center'>
                <Logo />
                <div className='flex space-x-6'>
                    <ul className='flex space-x-6 items-center'>
                    {navs?.map((nav, index) => (
                        <li className="text-coregray" key={index}>{nav.name}</li>
                    ))}
                </ul>
                <button className='bg-white w-[145px] h-[54px] text-primaryblue rounded-[4px] hover:opacity-80'>Enroll Now</button>
                </div>
            </div>
    )
};

export default Header