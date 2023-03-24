import React from 'react';
import Image from 'next/image';
import Course2 from '../assets/images/course2.png';

const About = () => {
    return (
        <div className='container mt-28 h-full'>
            <div className='flex space-x-14 items-center'>
                <div className='flex-1'>
                    <h2 className='text-[50px] 2xl:text-[56px] text-primaryblack font-bold font-font-clash leading-[70px]'>This Is Why We Are Best From Others</h2>
                    <p className='w-[88%] leading-28 mt-4 mb-8 text-coregray font-font-satoshi text-base font-medium capitalize'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    <Image className='w-full h-[450px] object-fill bg-no-repeat bg-cover' src={Course2} alt="Man with laptop" />
                </div>
                <div className='flex-1 space-y-6 '>
                    <div className='flex items-center space-x-6'>
                        <div className='bg-white w-1/2 h-auto p-6 font-font-satoshi '>
                            <span>
                                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.570312" y="0.5" width="48" height="48" rx="4" fill="#4C7FBD" />
                                    <mask id="mask0_1476_267" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25">
                                        <rect x="12.5703" y="12.5" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1476_267)">
                                        <path d="M25.5703 32.5C25.5703 30.9833 25.2826 29.5583 24.7073 28.225C24.1326 26.8917 23.3453 25.725 22.3453 24.725C21.3453 23.725 20.1786 22.9377 18.8453 22.363C17.512 21.7877 16.087 21.5 14.5703 21.5V18.5C14.5703 17.95 14.7663 17.4793 15.1583 17.088C15.5496 16.696 16.0203 16.5 16.5703 16.5H32.5703C33.1203 16.5 33.5913 16.696 33.9833 17.088C34.3746 17.4793 34.5703 17.95 34.5703 18.5V30.5C34.5703 31.05 34.3746 31.521 33.9833 31.913C33.5913 32.3043 33.1203 32.5 32.5703 32.5H25.5703ZM21.5703 32.5C21.5703 30.55 20.8913 28.8957 19.5333 27.537C18.1746 26.179 16.5203 25.5 14.5703 25.5V23.5C15.8203 23.5 16.9913 23.7373 18.0833 24.212C19.1746 24.6873 20.1246 25.329 20.9333 26.137C21.7413 26.9457 22.383 27.896 22.8583 28.988C23.333 30.0793 23.5703 31.25 23.5703 32.5H21.5703ZM17.5703 32.5C17.5703 31.6667 17.2786 30.9583 16.6953 30.375C16.112 29.7917 15.4036 29.5 14.5703 29.5V27.5C15.9536 27.5 17.1326 27.9873 18.1073 28.962C19.0826 29.9373 19.5703 31.1167 19.5703 32.5H17.5703ZM27.3203 24.3L31.3203 22L27.3203 19.7L23.3203 22L27.3203 24.3ZM27.3203 27.35L30.0703 25.75V23.65L27.3203 25.25L24.5703 23.65V25.75L27.3203 27.35Z" fill="white" />
                                    </g>
                                </svg>
                            </span>
                            <p className='font-bold mt-6 text-base'>Experienced Mentors</p>
                            <p className='text-xs leading-[28px] text-coregray font-medium'>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                        <div className='bg-white w-1/2 h-auto p-6 font-font-satoshi '>
                            <span>
                                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.570312" y="0.5" width="48" height="48" rx="4" fill="#4C7FBD" />
                                    <mask id="mask0_1476_267" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25">
                                        <rect x="12.5703" y="12.5" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1476_267)">
                                        <path d="M25.5703 32.5C25.5703 30.9833 25.2826 29.5583 24.7073 28.225C24.1326 26.8917 23.3453 25.725 22.3453 24.725C21.3453 23.725 20.1786 22.9377 18.8453 22.363C17.512 21.7877 16.087 21.5 14.5703 21.5V18.5C14.5703 17.95 14.7663 17.4793 15.1583 17.088C15.5496 16.696 16.0203 16.5 16.5703 16.5H32.5703C33.1203 16.5 33.5913 16.696 33.9833 17.088C34.3746 17.4793 34.5703 17.95 34.5703 18.5V30.5C34.5703 31.05 34.3746 31.521 33.9833 31.913C33.5913 32.3043 33.1203 32.5 32.5703 32.5H25.5703ZM21.5703 32.5C21.5703 30.55 20.8913 28.8957 19.5333 27.537C18.1746 26.179 16.5203 25.5 14.5703 25.5V23.5C15.8203 23.5 16.9913 23.7373 18.0833 24.212C19.1746 24.6873 20.1246 25.329 20.9333 26.137C21.7413 26.9457 22.383 27.896 22.8583 28.988C23.333 30.0793 23.5703 31.25 23.5703 32.5H21.5703ZM17.5703 32.5C17.5703 31.6667 17.2786 30.9583 16.6953 30.375C16.112 29.7917 15.4036 29.5 14.5703 29.5V27.5C15.9536 27.5 17.1326 27.9873 18.1073 28.962C19.0826 29.9373 19.5703 31.1167 19.5703 32.5H17.5703ZM27.3203 24.3L31.3203 22L27.3203 19.7L23.3203 22L27.3203 24.3ZM27.3203 27.35L30.0703 25.75V23.65L27.3203 25.25L24.5703 23.65V25.75L27.3203 27.35Z" fill="white" />
                                    </g>
                                </svg>
                            </span>
                            <p className='font-bold mt-6 text-base'>Experienced Mentors</p>
                            <p className='text-xs leading-[28px] text-coregray font-medium'>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <div className='bg-white w-1/2 h-auto p-6 font-font-satoshi '>
                            <span>
                                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.570312" y="0.5" width="48" height="48" rx="4" fill="#4C7FBD" />
                                    <mask id="mask0_1476_267" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25">
                                        <rect x="12.5703" y="12.5" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1476_267)">
                                        <path d="M25.5703 32.5C25.5703 30.9833 25.2826 29.5583 24.7073 28.225C24.1326 26.8917 23.3453 25.725 22.3453 24.725C21.3453 23.725 20.1786 22.9377 18.8453 22.363C17.512 21.7877 16.087 21.5 14.5703 21.5V18.5C14.5703 17.95 14.7663 17.4793 15.1583 17.088C15.5496 16.696 16.0203 16.5 16.5703 16.5H32.5703C33.1203 16.5 33.5913 16.696 33.9833 17.088C34.3746 17.4793 34.5703 17.95 34.5703 18.5V30.5C34.5703 31.05 34.3746 31.521 33.9833 31.913C33.5913 32.3043 33.1203 32.5 32.5703 32.5H25.5703ZM21.5703 32.5C21.5703 30.55 20.8913 28.8957 19.5333 27.537C18.1746 26.179 16.5203 25.5 14.5703 25.5V23.5C15.8203 23.5 16.9913 23.7373 18.0833 24.212C19.1746 24.6873 20.1246 25.329 20.9333 26.137C21.7413 26.9457 22.383 27.896 22.8583 28.988C23.333 30.0793 23.5703 31.25 23.5703 32.5H21.5703ZM17.5703 32.5C17.5703 31.6667 17.2786 30.9583 16.6953 30.375C16.112 29.7917 15.4036 29.5 14.5703 29.5V27.5C15.9536 27.5 17.1326 27.9873 18.1073 28.962C19.0826 29.9373 19.5703 31.1167 19.5703 32.5H17.5703ZM27.3203 24.3L31.3203 22L27.3203 19.7L23.3203 22L27.3203 24.3ZM27.3203 27.35L30.0703 25.75V23.65L27.3203 25.25L24.5703 23.65V25.75L27.3203 27.35Z" fill="white" />
                                    </g>
                                </svg>
                            </span>
                            <p className='font-bold mt-6 text-base'>Experienced Mentors</p>
                            <p className='text-xs leading-[28px] text-coregray font-medium'>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                        <div className='bg-white w-1/2 h-auto p-6 font-font-satoshi '>
                            <span>
                                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.570312" y="0.5" width="48" height="48" rx="4" fill="#4C7FBD" />
                                    <mask id="mask0_1476_267" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25">
                                        <rect x="12.5703" y="12.5" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1476_267)">
                                        <path d="M25.5703 32.5C25.5703 30.9833 25.2826 29.5583 24.7073 28.225C24.1326 26.8917 23.3453 25.725 22.3453 24.725C21.3453 23.725 20.1786 22.9377 18.8453 22.363C17.512 21.7877 16.087 21.5 14.5703 21.5V18.5C14.5703 17.95 14.7663 17.4793 15.1583 17.088C15.5496 16.696 16.0203 16.5 16.5703 16.5H32.5703C33.1203 16.5 33.5913 16.696 33.9833 17.088C34.3746 17.4793 34.5703 17.95 34.5703 18.5V30.5C34.5703 31.05 34.3746 31.521 33.9833 31.913C33.5913 32.3043 33.1203 32.5 32.5703 32.5H25.5703ZM21.5703 32.5C21.5703 30.55 20.8913 28.8957 19.5333 27.537C18.1746 26.179 16.5203 25.5 14.5703 25.5V23.5C15.8203 23.5 16.9913 23.7373 18.0833 24.212C19.1746 24.6873 20.1246 25.329 20.9333 26.137C21.7413 26.9457 22.383 27.896 22.8583 28.988C23.333 30.0793 23.5703 31.25 23.5703 32.5H21.5703ZM17.5703 32.5C17.5703 31.6667 17.2786 30.9583 16.6953 30.375C16.112 29.7917 15.4036 29.5 14.5703 29.5V27.5C15.9536 27.5 17.1326 27.9873 18.1073 28.962C19.0826 29.9373 19.5703 31.1167 19.5703 32.5H17.5703ZM27.3203 24.3L31.3203 22L27.3203 19.7L23.3203 22L27.3203 24.3ZM27.3203 27.35L30.0703 25.75V23.65L27.3203 25.25L24.5703 23.65V25.75L27.3203 27.35Z" fill="white" />
                                    </g>
                                </svg>
                            </span>
                            <p className='font-bold mt-6 text-base'>Experienced Mentors</p>
                            <p className='text-xs leading-[28px] text-coregray font-medium'>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About