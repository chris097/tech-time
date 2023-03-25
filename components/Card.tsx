import Image from 'next/image'
import React from 'react';
import UX from '../assets/images/ux.png';
import UXDesigner from '../assets/images/ux-designer.png';

const Card = () => {
    return (
        <div className='w-full gap-8 grid grid-cols-3 h-auto mt-16 text-left'>
            <div className='h-auto bg-white p-4 rounded-[16px]'>
                <Image className='h-[292.67px] w-full object-fill bg-no-repeat bg-cover' src={UX} alt="courses" />
                <div className='flex justify-between mt-3 items-center'>
                    <span className='bg-coreblue p-2 text-xs text-primaryblue rounded-full w-[79px] font-font-satoshi font-bold flex justify-center items-center'>Design</span>
                    <div className='flex items-center text-xs font-bold font-font-satoshi text-coregray'>
                        <p>4.7k</p>
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1476_359" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                    <rect width="16" height="16" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1476_359)">
                                    <path d="M3.8835 14.6667L4.96683 9.98333L1.3335 6.83333L6.1335 6.41667L8.00016 2L9.86683 6.41667L14.6668 6.83333L11.0335 9.98333L12.1168 14.6667L8.00016 12.1833L3.8835 14.6667Z" fill="#F7B435" />
                                </g>
                            </svg>
                        </span>
                        <span className='ml-2'>
                            (32.7k+)
                        </span>
                    </div>
                </div>
                <p className='mt-6 text-2xl font-font-satoshi font-bold'>Introduction to user research in UX Design</p>
                <div className='flex justify-between mt-4 text-base text-coregray'>
                    <div className='flex space-x-2 items-center'>
                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1476_487" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1476_487)">
                                <path d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z" fill="#A1A1A1" />
                            </g>
                        </svg>
                        </span>
                        <p>23hrs 50mins</p>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1476_375" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1476_375)">
                                <path d="M14 9.9V8.2C14.55 7.96667 15.1127 7.79167 15.688 7.675C16.2627 7.55833 16.8667 7.5 17.5 7.5C17.9333 7.5 18.3583 7.53333 18.775 7.6C19.1917 7.66667 19.6 7.75 20 7.85V9.45C19.6 9.3 19.196 9.18767 18.788 9.113C18.3793 9.03767 17.95 9 17.5 9C16.8667 9 16.2583 9.07933 15.675 9.238C15.0917 9.396 14.5333 9.61667 14 9.9ZM14 15.4V13.7C14.55 13.4667 15.1127 13.2917 15.688 13.175C16.2627 13.0583 16.8667 13 17.5 13C17.9333 13 18.3583 13.0333 18.775 13.1C19.1917 13.1667 19.6 13.25 20 13.35V14.95C19.6 14.8 19.196 14.6877 18.788 14.613C18.3793 14.5377 17.95 14.5 17.5 14.5C16.8667 14.5 16.2583 14.575 15.675 14.725C15.0917 14.875 14.5333 15.1 14 15.4ZM14 12.65V10.95C14.55 10.7167 15.1127 10.5417 15.688 10.425C16.2627 10.3083 16.8667 10.25 17.5 10.25C17.9333 10.25 18.3583 10.2833 18.775 10.35C19.1917 10.4167 19.6 10.5 20 10.6V12.2C19.6 12.05 19.196 11.9377 18.788 11.863C18.3793 11.7877 17.95 11.75 17.5 11.75C16.8667 11.75 16.2583 11.8293 15.675 11.988C15.0917 12.146 14.5333 12.3667 14 12.65ZM6.5 16C7.28333 16 8.046 16.0873 8.788 16.262C9.52933 16.4373 10.2667 16.7 11 17.05V7.2C10.3167 6.8 9.59167 6.5 8.825 6.3C8.05833 6.1 7.28333 6 6.5 6C5.9 6 5.30433 6.05833 4.713 6.175C4.121 6.29167 3.55 6.46667 3 6.7V16.6C3.58333 16.4 4.16267 16.25 4.738 16.15C5.31267 16.05 5.9 16 6.5 16ZM13 17.05C13.7333 16.7 14.471 16.4373 15.213 16.262C15.9543 16.0873 16.7167 16 17.5 16C18.1 16 18.6877 16.05 19.263 16.15C19.8377 16.25 20.4167 16.4 21 16.6V6.7C20.45 6.46667 19.8793 6.29167 19.288 6.175C18.696 6.05833 18.1 6 17.5 6C16.7167 6 15.9417 6.1 15.175 6.3C14.4083 6.5 13.6833 6.8 13 7.2V17.05ZM12 20C11.2 19.3667 10.3333 18.875 9.4 18.525C8.46667 18.175 7.5 18 6.5 18C5.8 18 5.11267 18.0917 4.438 18.275C3.76267 18.4583 3.11667 18.7167 2.5 19.05C2.15 19.2333 1.81267 19.225 1.488 19.025C1.16267 18.825 1 18.5333 1 18.15V6.1C1 5.91667 1.046 5.74167 1.138 5.575C1.22933 5.40833 1.36667 5.28333 1.55 5.2C2.31667 4.8 3.11667 4.5 3.95 4.3C4.78333 4.1 5.63333 4 6.5 4C7.46667 4 8.41267 4.125 9.338 4.375C10.2627 4.625 11.15 5 12 5.5C12.85 5 13.7377 4.625 14.663 4.375C15.5877 4.125 16.5333 4 17.5 4C18.3667 4 19.2167 4.1 20.05 4.3C20.8833 4.5 21.6833 4.8 22.45 5.2C22.6333 5.28333 22.771 5.40833 22.863 5.575C22.9543 5.74167 23 5.91667 23 6.1V18.15C23 18.5333 22.8377 18.825 22.513 19.025C22.1877 19.225 21.85 19.2333 21.5 19.05C20.8833 18.7167 20.2373 18.4583 19.562 18.275C18.8873 18.0917 18.2 18 17.5 18C16.5 18 15.5333 18.175 14.6 18.525C13.6667 18.875 12.8 19.3667 12 20Z" fill="#A1A1A1" />
                            </g>
                        </svg>
                        </span>
                        <p>22 Lessons</p>
                    </div>
                </div>
                <div className='my-7 flex justify-between items-center'>
                    <div className='flex items-center space-x-2'>
                        <span>
                            <Image className='w-[40px] h-[40px] object-fill bg-cover bg-no-repeat' src={UXDesigner} alt="ux designer" />
                        </span>
                        <p className='font-font-satoshi font-bold'>Leonard Victor</p>
                    </div>
                    <p className='text-primaryblue text-xl font-semibold font-font-clash'>$45.00</p>
                </div>
            </div>
        </div>
    )
};

export default Card;