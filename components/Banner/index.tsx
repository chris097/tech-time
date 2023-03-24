import Arrow from '@/assets/svg/Arrow';
import Pattern from '@/assets/svg/Pattern';
import { avatars } from '@/dummy';
import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import Header from '../Header';
import Hero from '../../assets/images/hero.png';

const Banner = () => {
    return (
        <div className='h-screen text-white bg-primaryblue relative font-font-satoshi'>
            <span className='absolute top-1/2 mt-10 w-10'><svg viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1331 19.4004L0 3.16261L1.77117 1.56067L11.1331 15.1771L21.3806 0.25L31.6281 15.1771L41.8756 0.25L52.1231 15.1771L61.4851 1.56067L63.2562 3.16261L52.1231 19.4004L41.8756 4.47328L31.6281 19.4004L21.3806 4.47328L11.1331 19.4004Z" fill="#5588CC" />
            </svg>
            </span>
            <Pattern />
            <div className='absolute top-0'>
                <div className='mx-7 md:mx-16 2xl:max-w-7xl h-[150px] relative items-center'>
                    <Header />
                    <div className='flex items-center mt-9 flex-wrap h-full relative'>
                        <div className='flex-1'>
                            <div className='flex justify-between w-[70%]'>
                                <div className='-mt-4'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16.7401C3.584 16.7401 0 12.9941 0 8.37855C0 3.76296 3.584 0.0169678 8 0.0169678C12.416 0.0169678 16 3.76296 16 8.37855C16 12.9941 12.416 16.7401 8 16.7401ZM8 2.79301C5.056 2.79301 2.656 5.30149 2.656 8.37855C2.656 11.4556 5.056 13.9641 8 13.9641C10.944 13.9641 13.344 11.4556 13.344 8.37855C13.344 5.30149 10.944 2.79301 8 2.79301Z" fill="#00C040" />
                                </svg>
                                </div>
                                <div><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.50586 10.114C3.01863 10.114 1 8.00412 1 5.40446C1 2.80481 3.01863 0.694946 5.50586 0.694946C7.9931 0.694946 10.0117 2.80481 10.0117 5.40446C10.0117 8.00412 7.9931 10.114 5.50586 10.114Z" fill="#FFBE4E" stroke="#FFBE4E" stroke-width="0.0901172" />
                                </svg>

                                </div>
                            </div>
                            <h1 className='text-white 2xl:text-[64px] lg:text-[56px] font-font-clash font-bold leading-tight mt-12'>
                                Grow your skills to advance your career path
                            </h1>
                            <p className='font-font-satoshi text-base w-[70%] mt-4 text-primarygray'>
                                build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                            </p>
                            <div className='mt-8 flex space-x-6 font-font-satoshi font-bold text-base'>
                                <Button
                                    name={
                                        <div className='flex space-x-2 items-center justify-center'>
                                            <p>Get Started Now</p>
                                            <Arrow />
                                        </div>
                                    }
                                    bg=""
                                    border='border'
                                    width='w-[216px]'
                                    height='h-[54px]'
                                    color='text-white'
                                    handleClick={() => { }}
                                    type="button"
                                />
                                <Button
                                    name="Enroll Now"
                                    bg="bg-white"
                                    border=''
                                    width='w-[145px]'
                                    height='h-[54px]'
                                    color='text-primaryblue'
                                    handleClick={() => { }}
                                    type="button"
                                />
                            </div>
                            <div className='mt-6 flex justify-between relative'>
                                <div className='flex items-center space-x-8'>
                                    <div className='flex -ml-1'>
                                        {avatars.map((avatar) => (
                                            <Image className='w-[64px] -mr-5 h-[64px]' src={avatar.url} alt="avatar" />
                                        ))}
                                    </div>
                                    <div className='text-center leading-tight'>
                                        <span className='font-font-clash font-bold text-[24px]'>255K+</span>
                                        <p className='text-primarygray text-sm'>Previews</p>
                                    </div>
                                </div>
                                <div className='absolute -right-20 bottom-10'>
                                    <svg width="155" height="189" viewBox="0 0 155 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M65.1756 91.0493C64.8503 90.135 64.8194 89.4243 64.4657 88.9499C54.8983 68.0867 43.9522 48.3376 29.4558 31.1874C22.8852 23.4258 15.4652 16.9146 7.78178 10.9104C5.80929 9.31624 3.77744 7.45123 1.89274 5.68801C1.24472 5.01 0.537337 4.06115 0.21207 3.14687C0.0933339 2.60521 0.237978 1.55646 0.648527 1.15117C1.05908 0.745876 1.97048 0.916799 2.41197 1.22219C21.6335 15.4373 38.8332 32.3896 51.5478 54.5108C58.0381 65.8931 64.2934 77.3427 69.5804 89.501C70.1122 90.7879 70.9977 92.5493 71.9685 92.991C84.5885 98.7338 94.6316 108.668 103.355 119.987C116.912 137.406 129.735 155.466 142.881 173.291C143.736 174.342 144.65 175.663 146.209 176.512C144.588 161.146 142.733 145.847 141.053 130.21C143.374 129.977 144.376 131.13 145.114 132.789C145.912 134.72 146.857 136.752 147.332 138.918C149.709 150.902 152.086 162.886 154.229 174.937C154.675 177.543 154.652 180.284 154.481 182.923C153.993 188.1 150.706 190.192 146.528 188.221C138.409 184.213 130.524 180.137 122.579 175.79C120.196 174.601 119.399 172.671 120.07 170.608C120.801 168.816 122.621 168.007 125.092 169.027C129.357 170.829 133.447 172.968 138.154 175.075C137.681 174.059 137.562 173.518 137.209 173.043C123.564 155.793 110.008 138.374 96.0406 121.36C91.915 116.209 86.7333 111.935 82.0216 107.527C80.1369 105.764 77.7538 104.575 75.1049 102.743C75.3733 104.537 75.6702 105.891 75.9076 106.974C78.2773 115.506 79.8544 124.409 79.9623 133.444C79.9799 141.498 78.6446 149.076 74.81 156.073C73.4337 158.338 71.9696 160.771 70.1518 162.731C62.2068 171.48 51.0684 171.357 42.7319 162.374C32.2164 151.424 24.7587 127.655 35.1779 107.98C40.9724 96.8239 49.9242 91.528 61.1788 91.0417C62.4129 90.9764 63.7942 91.0129 65.1756 91.0493ZM70.6016 153.392C73.7907 146.867 75.1285 140.44 75.0256 133.706C75.1786 123.013 72.9226 112.721 69.874 102.8C69.2519 100.532 67.9274 99.6159 66.0452 99.0032C56.0766 96.2433 44.6281 102.11 39.7425 112.286C33.1604 126.114 35.9682 146.897 46.1016 157.812C52.8477 165.236 61.1641 165.015 67.6425 157.548C68.8148 156.062 69.9277 154.304 70.6016 153.392Z" fill="white" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='flex-1 justify-center mt-[12.8px] flex items-center'>
                            <Image className='bg-no-repeat w-[87%] object-fill bg-cover' src={Hero} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner