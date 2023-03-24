import React from 'react'
import Audio from '@/assets/svg/Audio';
import Live from '@/assets/svg/Live';
import Note from '@/assets/svg/Note';
import Record from '@/assets/svg/Record';
import Image from 'next/image';
import Button from './Button';
import Course from '../assets/images/course.png';
import Course1 from '../assets/images/course1.png';
import Student from '@/assets/svg/Student';
import Crown from '@/assets/svg/Crown';
import Dot from '@/assets/svg/Dot';


const Courses = () => {
    const boxContainer = "w-[232px] h-[72px] flex space-x-4 items-center px-6 rounded-[8px] bg-white";
    const boxText = "text-base font-font-satoshi font-bold";
    const boxFlex = "flex space-x-6 items-center"

    return (
        <div className='relative'>
            <div className='container my-[96px] relative'>
                <div className='flex justify-between'>
                    <div className='flex-1 h-auto mt-10 relative'>
                        <Crown />
                        <h2 className='text-[50px] 2xl:text-[56px] text-primaryblack font-bold font-font-clash leading-[70px]'>High quality video, audio & live classes</h2>
                        <p className='w-[88%] mt-4 mb-8 text-coregray font-font-satoshi text-base font-medium capitalize'>
                            high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image
                        </p>
                        <Button
                            name="View Courses"
                            bg='bg-primaryblue'
                            width='w-[166px]'
                            height='h-[54px]'
                            color='text-white'
                            border=''
                            type='button'
                            handleClick={() => { }}
                        />
                        <div className='mt-6'>
                            <div className={`${boxFlex}`}>
                                <div className={`${boxContainer}`}>
                                    <Audio />
                                    <p className={`${boxText}`}>Audio Container</p>
                                </div>
                                <div className={`${boxContainer}`}>
                                    <Live />
                                    <p className={`${boxText}`}>Live Classes</p>
                                </div>
                            </div>
                            <div className={`${boxFlex} mt-6`}>
                                <div className={`${boxContainer}`}>
                                    <Record />
                                    <p className={`${boxText}`}>Recorded Classes</p>
                                </div>
                                <div className={`${boxContainer}`}>
                                    <Note />
                                    <p className={`${boxText}`}>50+ Notes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 h-auto justify-end flex relative'>
                        <Dot />
                        <Image className='w-[80%] h-[400px] relative' src={Course} alt="Man with Laptop" />
                        <Image className='w-[60%] h-[250px] object-fill bg-cover bg-no-repeat absolute -left-14 -bottom-10' src={Course1} alt="Man with Laptop" />
                        <Student />
                    </div>
                </div>
            </div>
            <span className='right-0 absolute -top-16'>
                <svg width="59" height="17" viewBox="0 0 59 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.668 16.0938L56.59 4.56948L47.41 16.0938L38.332 4.56948L29.254 16.0938L20.074 4.56948L10.996 16.0938L1 3.54963L2.734 2.12184L10.996 12.5243L20.074 1L29.254 12.5243L38.332 1L47.41 12.5243L56.59 1L65.668 12.5243L74.746 1L83.926 12.5243L93.004 1L103 13.6462L101.266 14.972L93.004 4.56948L83.926 16.0938L74.746 4.56948L65.668 16.0938Z" fill="#7FE8BF" stroke="#7FE8BF" stroke-width="1.01993"/>
</svg>

            </span>
            <span className='right-0 absolute bottom-6'>
                <svg width="57" height="140" viewBox="0 0 57 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83 138.452C37.736 138.452 1 107.83 1 70.0997C1 32.3691 37.736 1.74719 83 1.74719C128.264 1.74719 165 32.3691 165 70.0997C165 107.83 128.264 138.452 83 138.452ZM83 24.4402C52.824 24.4402 28.224 44.946 28.224 70.0997C28.224 95.2534 52.824 115.759 83 115.759C113.176 115.759 137.776 95.2534 137.776 70.0997C137.776 44.946 113.176 24.4402 83 24.4402Z" fill="#EFE8FF" stroke="#EFE8FF" stroke-width="1.64" />
                </svg>
            </span>
            <span className='right-60 absolute -bottom-10'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13C3.688 13 1 10.312 1 7C1 3.688 3.688 1 7 1C10.312 1 13 3.688 13 7C13 10.312 10.312 13 7 13ZM7 2.992C4.792 2.992 2.992 4.792 2.992 7C2.992 9.208 4.792 11.008 7 11.008C9.208 11.008 11.008 9.208 11.008 7C11.008 4.792 9.208 2.992 7 2.992Z" fill="#C8A1FD" stroke="#C8A1FD" stroke-width="0.12"/>
</svg>

            </span>
        </div>
    )
};

export default Courses;