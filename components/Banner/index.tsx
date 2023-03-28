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
        <div className='lg:h-[948px] h-screen text-white bg-primaryblue relative font-font-satoshi'>
            <span className='absolute top-1/2 mt-10 w-10'><svg viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1331 19.4004L0 3.16261L1.77117 1.56067L11.1331 15.1771L21.3806 0.25L31.6281 15.1771L41.8756 0.25L52.1231 15.1771L61.4851 1.56067L63.2562 3.16261L52.1231 19.4004L41.8756 4.47328L31.6281 19.4004L21.3806 4.47328L11.1331 19.4004Z" fill="#5588CC" />
            </svg>
            </span>
            <Pattern />
            <div className='absolute top-0'>
                <div className='mx-7 md:mx-16 2xl:max-w-7xl relative items-center'>
                    <Header />
                    <div className='lg:flex block items-center lg:mt-9 mt-0 h-full relative'>
                        <div className='flex-1 lg:block flex justify-center flex-col items-center'>
                            <div className='hidden justify-between w-[70%] lg:flex'>
                                <div className='md:-mt-20 -mt-5'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16.7401C3.584 16.7401 0 12.9941 0 8.37855C0 3.76296 3.584 0.0169678 8 0.0169678C12.416 0.0169678 16 3.76296 16 8.37855C16 12.9941 12.416 16.7401 8 16.7401ZM8 2.79301C5.056 2.79301 2.656 5.30149 2.656 8.37855C2.656 11.4556 5.056 13.9641 8 13.9641C10.944 13.9641 13.344 11.4556 13.344 8.37855C13.344 5.30149 10.944 2.79301 8 2.79301Z" fill="#00C040" />
                                </svg>
                                </div>
                                <div className='md:-mt-16 -mt-3'><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.50586 10.114C3.01863 10.114 1 8.00412 1 5.40446C1 2.80481 3.01863 0.694946 5.50586 0.694946C7.9931 0.694946 10.0117 2.80481 10.0117 5.40446C10.0117 8.00412 7.9931 10.114 5.50586 10.114Z" fill="#FFBE4E" stroke="#FFBE4E" stroke-width="0.0901172" />
                                </svg>

                                </div>
                            </div>
                            <h1 className='text-white 2xl:text-[64px] lg:text-[56px] text-[28px] mt-4 lg:text-left text-center font-font-clash font-bold leading-tight'>
                                Grow your skills to advance your career path
                            </h1>
                            <p className='font-font-satoshi md:text-base text-[8px] lg:w-[70%] w-full md:mt-4 mt-2 lg:text-left text-center text-primarygray'>
                                build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                            </p>
                            <div className='md:mt-8 mt-4 flex space-x-6 font-font-satoshi font-bold md:text-base text-[8px] sm:text-xs'>
                                <Button
                                    name={
                                        <div className='flex space-x-2 items-center justify-center'>
                                            <p>Get Started Now</p>
                                            <Arrow />
                                        </div>
                                    }
                                    bg=""
                                    border='border'
                                    width='lg:w-[216px] sm:w-[180px] w-[110px]'
                                    height='md:h-[54px] sm:h-[47px] h-[27px]'
                                    color='text-white'
                                    handleClick={() => { }}
                                    type="button"
                                />
                                <Button
                                    name="Enroll Now"
                                    bg="bg-white"
                                    border=''
                                    width='lg:w-[216px] sm:w-[180px] w-[110px]'
                                    height='md:h-[54px] sm:h-[47px] h-[27px] '
                                    color='text-primaryblue'
                                    handleClick={() => { }}
                                    type="button"
                                />
                            </div>
                            <div className='mt-6 flex justify-between relative'>
                                <div className='flex items-center md:space-x-8 sm:space-x-4 space-x-3'>
                                    <div className='flex -ml-1'>
                                        {avatars.map((avatar, index) => (
                                            <Image key={index} className='md:w-[64px] sm:h-[48px] sm:w-[48px] h-[32px] w-[32px] lg:-mr-5 -mr-2 md:h-[64px]' src={avatar.url} alt="avatar" />
                                        ))}
                                    </div>
                                    <div className='text-center leading-tight'>
                                        <span className='font-font-clash font-bold md:text-[24px] sm:text-sm text-[8px]'>255K+</span>
                                        <p className='text-primarygray sm:text-sm text-[8px]'>Previews</p>
                                    </div>
                                </div>
                                <div>
                                    <svg className='absolute -right-10 -bottom-5 lg:block hidden' width="155" height="189" viewBox="0 0 155 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M65.1756 91.0493C64.8503 90.135 64.8194 89.4243 64.4657 88.9499C54.8983 68.0867 43.9522 48.3376 29.4558 31.1874C22.8852 23.4258 15.4652 16.9146 7.78178 10.9104C5.80929 9.31624 3.77744 7.45123 1.89274 5.68801C1.24472 5.01 0.537337 4.06115 0.21207 3.14687C0.0933339 2.60521 0.237978 1.55646 0.648527 1.15117C1.05908 0.745876 1.97048 0.916799 2.41197 1.22219C21.6335 15.4373 38.8332 32.3896 51.5478 54.5108C58.0381 65.8931 64.2934 77.3427 69.5804 89.501C70.1122 90.7879 70.9977 92.5493 71.9685 92.991C84.5885 98.7338 94.6316 108.668 103.355 119.987C116.912 137.406 129.735 155.466 142.881 173.291C143.736 174.342 144.65 175.663 146.209 176.512C144.588 161.146 142.733 145.847 141.053 130.21C143.374 129.977 144.376 131.13 145.114 132.789C145.912 134.72 146.857 136.752 147.332 138.918C149.709 150.902 152.086 162.886 154.229 174.937C154.675 177.543 154.652 180.284 154.481 182.923C153.993 188.1 150.706 190.192 146.528 188.221C138.409 184.213 130.524 180.137 122.579 175.79C120.196 174.601 119.399 172.671 120.07 170.608C120.801 168.816 122.621 168.007 125.092 169.027C129.357 170.829 133.447 172.968 138.154 175.075C137.681 174.059 137.562 173.518 137.209 173.043C123.564 155.793 110.008 138.374 96.0406 121.36C91.915 116.209 86.7333 111.935 82.0216 107.527C80.1369 105.764 77.7538 104.575 75.1049 102.743C75.3733 104.537 75.6702 105.891 75.9076 106.974C78.2773 115.506 79.8544 124.409 79.9623 133.444C79.9799 141.498 78.6446 149.076 74.81 156.073C73.4337 158.338 71.9696 160.771 70.1518 162.731C62.2068 171.48 51.0684 171.357 42.7319 162.374C32.2164 151.424 24.7587 127.655 35.1779 107.98C40.9724 96.8239 49.9242 91.528 61.1788 91.0417C62.4129 90.9764 63.7942 91.0129 65.1756 91.0493ZM70.6016 153.392C73.7907 146.867 75.1285 140.44 75.0256 133.706C75.1786 123.013 72.9226 112.721 69.874 102.8C69.2519 100.532 67.9274 99.6159 66.0452 99.0032C56.0766 96.2433 44.6281 102.11 39.7425 112.286C33.1604 126.114 35.9682 146.897 46.1016 157.812C52.8477 165.236 61.1641 165.015 67.6425 157.548C68.8148 156.062 69.9277 154.304 70.6016 153.392Z" fill="white" />
                                    </svg>

                                    <svg className=' absolute -right-20 -bottom-9 lg:hidden block' width="59" height="90" viewBox="0 0 59 111" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.1766 49.9021C36.4801 49.5363 36.7716 49.3454 36.8828 49.0777C43.2717 39.8268 48.8465 30.2743 52.4382 19.8775C54.0613 15.1682 54.9452 10.4141 55.5497 5.67613C55.7271 4.44657 56.0037 3.12423 56.2743 1.88932C56.3975 1.44676 56.6199 0.911396 56.9234 0.545573C57.1218 0.359987 57.5995 0.158348 57.8729 0.229741C58.1463 0.301137 58.3025 0.727653 58.2845 0.989982C57.1113 12.6413 54.2796 24.1267 48.1488 35.0176C44.9813 40.5996 41.7266 46.0995 37.9311 51.3691C37.5224 51.9152 37.0025 52.7289 37.0596 53.2482C37.8009 59.9992 36.1326 66.7145 33.5508 73.2209C29.6105 83.2892 25.2166 93.2094 21.0029 103.206C20.7745 103.829 20.4469 104.545 20.4798 105.414C26.5438 100.885 32.5206 96.2738 38.6836 91.652C39.3626 92.5711 39.1281 93.2813 38.6143 94.0076C38.0012 94.8267 37.3821 95.7332 36.5888 96.4756C32.1385 100.476 27.6881 104.477 23.1506 108.396C22.165 109.236 21.0051 109.913 19.8513 110.502C17.5496 111.592 15.846 110.732 15.63 108.48C15.2849 104.057 15.027 99.7173 14.8683 95.2844C14.7723 93.9835 15.3854 93.1644 16.422 92.9307C17.3595 92.7897 18.1556 93.3537 18.3448 94.6493C18.654 96.896 18.7769 99.1535 19.0681 101.663C19.3776 101.209 19.5759 101.024 19.6872 100.756C23.5343 90.6931 27.4745 80.6248 31.1414 70.485C32.2775 67.4585 32.7797 64.207 33.4561 61.1198C33.7266 59.8849 33.6306 58.5839 33.739 57.0099C33.0508 57.572 32.555 58.036 32.1584 58.4072C29.1594 61.5408 25.8058 64.4334 22.0287 66.7407C18.6422 68.7642 15.1176 70.099 11.2115 70.2362C9.91353 70.2237 8.52236 70.2165 7.24241 69.9416C1.56975 68.7868 -1.16695 64.0665 0.52834 58.3078C2.50624 51.1393 10.6469 42.0491 21.5389 41.5105C27.6864 41.1574 32.1571 43.6007 35.1792 48.2175C35.5157 48.7207 35.8461 49.3114 36.1766 49.9021ZM11.2869 67.7931C14.8325 67.5024 17.8733 66.4568 20.6829 64.7276C25.2232 62.1152 28.9914 58.5891 32.4052 54.822C33.2045 53.9922 33.2587 53.2052 33.0454 52.2594C31.7119 47.3714 26.3761 44.0198 20.8685 44.5104C13.3988 45.2007 5.35159 51.5855 3.29259 58.5845C1.85583 63.2832 4.0308 66.7293 8.79608 67.5878C9.71551 67.7092 10.7341 67.7378 11.2869 67.7931Z" fill="white"/>
</svg>


                                </div>
                            </div>
                        </div>
                        <div className='flex-1 justify-center flex items-center'>
                            <Image className='bg-no-repeat lg:w-full w-[82.5%] md:mt-[32.98px] mt-[34px] object-fill bg-cover' src={Hero} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner