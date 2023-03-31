import React from 'react';
import Image from 'next/image';
import Course2 from '../assets/images/course2.png';

const About = () => {
    const boxStyle = "font-bold lg:mt-6 mt-2 lg:text-base text-[12px] whitespace-nowrap";
    const pStyle = "lg:text-xs text-[8px] lg:leading-[28px] leading-[16px] text-coregray font-medium";
    const iconStyle = "lg:w-[49px] lg:h-[49px] w-[32px] h-[32px]";
    return (
        <div className='container mt-28 h-full relative'>
            <svg width="77" height="22" className='absolute lg:right-52 right-32 lg:w-[77px] hidden lg:block' viewBox="0 0 77 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2 20.7188L1 3.99906L3.1 2.34958L14.2 16.3702L26.35 1L38.5 16.3702L50.65 1L62.8 16.3702L73.9 2.34958L76 3.99906L62.8 20.7188L50.65 5.34863L38.5 20.7188L26.35 5.34863L14.2 20.7188Z" fill="#FFBE4E" stroke="#FFBE4E" stroke-width="0.749882"/>
            </svg>
            <svg width="28" height="28" className='absolute lg:-bottom-10 bottom-52 lg:-right-14 lg:w-[28px] lg:h-[28px] w-[8px] h-[8px] right-0' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 27C6.824 27 1 21.176 1 14C1 6.824 6.824 1 14 1C21.176 1 27 6.824 27 14C27 21.176 21.176 27 14 27ZM14 5.316C9.216 5.316 5.316 9.216 5.316 14C5.316 18.784 9.216 22.684 14 22.684C18.784 22.684 22.684 18.784 22.684 14C22.684 9.216 18.784 5.316 14 5.316Z" fill="#9143FD" stroke="#9143FD" stroke-width="0.26"/>
            </svg>
            
            <svg className='bottom-20 lg:-left-12 left-0 lg:w-[32px] lg:h-[30px] w-[10px] h-[9.37px] absolute' viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9435 29.1277C18.3735 29.1277 17.8035 28.858 17.4435 28.3785L1.3935 7.37041C0.973495 6.83097 0.883495 6.14169 1.1535 5.51234C1.4235 4.883 1.9635 4.46344 2.6535 4.37353L28.9035 1.01704C29.5635 0.927131 30.2235 1.19685 30.6135 1.73629C31.0335 2.27572 31.1235 2.965 30.8535 3.59435L20.6535 27.9889C20.3835 28.6182 19.8435 29.0378 19.1535 29.1277H18.9435ZM6.3135 7.67009L18.4335 23.5535L26.1435 5.12275L6.3135 7.67009Z" fill="#00D280" stroke="#00D280" stroke-width="0.299927"/>
</svg>



            <div className='lg:flex block lg:space-x-24 items-center'>
                <div className='flex-1 w-full'>
                    <h2 className='text-[24px] lg:text-left text-center lg:text-[56px] text-primaryblack font-bold font-font-clash lg:leading-[70px] leading-[36px] w-full'>This Is Why We Are Best From Others</h2>
                    <p className='w-[88%] lg:mx-0 mx-auto lg:text-left text-center leading-28 mt-4 mb-8 text-coregray font-font-satoshi lg:text-base text-[8px] font-medium capitalize'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    <Image className='w-full lg:h-[450px] h-[260px] object-fill bg-no-repeat bg-cover' src={Course2} alt="Man with laptop" />
                </div>
                <div className='flex-1 space-y-6 mt-8'>
                    <div className='flex items-center space-x-6'>
                        <div className='bg-white w-1/2 h-auto lg:p-6 p-3 font-font-satoshi '>
                            <span>
                                <svg className={`${iconStyle}`} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.570312" y="0.5" width="48" height="48" rx="4" fill="#4C7FBD" />
                                    <mask id="mask0_1476_267" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25">
                                        <rect x="12.5703" y="12.5" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1476_267)">
                                        <path d="M25.5703 32.5C25.5703 30.9833 25.2826 29.5583 24.7073 28.225C24.1326 26.8917 23.3453 25.725 22.3453 24.725C21.3453 23.725 20.1786 22.9377 18.8453 22.363C17.512 21.7877 16.087 21.5 14.5703 21.5V18.5C14.5703 17.95 14.7663 17.4793 15.1583 17.088C15.5496 16.696 16.0203 16.5 16.5703 16.5H32.5703C33.1203 16.5 33.5913 16.696 33.9833 17.088C34.3746 17.4793 34.5703 17.95 34.5703 18.5V30.5C34.5703 31.05 34.3746 31.521 33.9833 31.913C33.5913 32.3043 33.1203 32.5 32.5703 32.5H25.5703ZM21.5703 32.5C21.5703 30.55 20.8913 28.8957 19.5333 27.537C18.1746 26.179 16.5203 25.5 14.5703 25.5V23.5C15.8203 23.5 16.9913 23.7373 18.0833 24.212C19.1746 24.6873 20.1246 25.329 20.9333 26.137C21.7413 26.9457 22.383 27.896 22.8583 28.988C23.333 30.0793 23.5703 31.25 23.5703 32.5H21.5703ZM17.5703 32.5C17.5703 31.6667 17.2786 30.9583 16.6953 30.375C16.112 29.7917 15.4036 29.5 14.5703 29.5V27.5C15.9536 27.5 17.1326 27.9873 18.1073 28.962C19.0826 29.9373 19.5703 31.1167 19.5703 32.5H17.5703ZM27.3203 24.3L31.3203 22L27.3203 19.7L23.3203 22L27.3203 24.3ZM27.3203 27.35L30.0703 25.75V23.65L27.3203 25.25L24.5703 23.65V25.75L27.3203 27.35Z" fill="white" />
                                    </g>
                                </svg>
                            </span>
                            <p className={`${boxStyle}`}>Experienced Mentors</p>
                            <p className={`${pStyle}`}>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                        <div className='bg-white w-1/2 h-auto lg:p-6 p-3 font-font-satoshi '>
                            <span>
                                 <svg className={`${iconStyle}`} width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.570312" y="0.5" width="48" height="48" rx="4" fill="#AECD5E"/>
<mask id="mask0_1476_283" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25">
<rect x="12.5703" y="12.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1476_283)">
<path d="M27.8703 29.2L29.2703 27.8L25.5703 24.1V19.5H23.5703V24.9L27.8703 29.2ZM24.5703 34.5C23.187 34.5 21.887 34.2373 20.6703 33.712C19.4536 33.1873 18.3953 32.475 17.4953 31.575C16.5953 30.675 15.883 29.6167 15.3583 28.4C14.833 27.1833 14.5703 25.8833 14.5703 24.5C14.5703 23.1167 14.833 21.8167 15.3583 20.6C15.883 19.3833 16.5953 18.325 17.4953 17.425C18.3953 16.525 19.4536 15.8123 20.6703 15.287C21.887 14.7623 23.187 14.5 24.5703 14.5C25.9536 14.5 27.2536 14.7623 28.4703 15.287C29.687 15.8123 30.7453 16.525 31.6453 17.425C32.5453 18.325 33.2576 19.3833 33.7823 20.6C34.3076 21.8167 34.5703 23.1167 34.5703 24.5C34.5703 25.8833 34.3076 27.1833 33.7823 28.4C33.2576 29.6167 32.5453 30.675 31.6453 31.575C30.7453 32.475 29.687 33.1873 28.4703 33.712C27.2536 34.2373 25.9536 34.5 24.5703 34.5Z" fill="white"/>
</g>
</svg>
                            </span>
                            <p className={`${boxStyle}`}>Experienced Mentors</p>
                            <p className={`${pStyle}`}>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <div className='bg-white w-1/2 h-auto lg:p-6 p-3 font-font-satoshi '>
                            <span>
                                <svg className={`${iconStyle}`} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.570312" y="0.5" width="48" height="48" rx="4" fill="#ED6BA6"/>
<mask id="mask0_1476_301" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25">
<rect x="12.5005" y="12.0723" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1476_301)">
<path d="M12.5005 30.0723V28.4973C12.5005 27.7806 12.8672 27.1973 13.6005 26.7473C14.3338 26.2973 15.3005 26.0723 16.5005 26.0723C16.7172 26.0723 16.9255 26.0763 17.1255 26.0843C17.3255 26.0929 17.5172 26.1139 17.7005 26.1473C17.4672 26.4973 17.2922 26.8639 17.1755 27.2473C17.0588 27.6306 17.0005 28.0306 17.0005 28.4473V30.0723H12.5005ZM18.5005 30.0723V28.4473C18.5005 27.9139 18.6465 27.4263 18.9385 26.9843C19.2298 26.5429 19.6422 26.1556 20.1755 25.8223C20.7088 25.4889 21.3465 25.2389 22.0885 25.0723C22.8298 24.9056 23.6338 24.8223 24.5005 24.8223C25.3838 24.8223 26.1965 24.9056 26.9385 25.0723C27.6798 25.2389 28.3172 25.4889 28.8505 25.8223C29.3838 26.1556 29.7922 26.5429 30.0755 26.9843C30.3588 27.4263 30.5005 27.9139 30.5005 28.4473V30.0723H18.5005ZM32.0005 30.0723V28.4473C32.0005 28.0139 31.9462 27.6056 31.8375 27.2223C31.7295 26.8389 31.5672 26.4806 31.3505 26.1473C31.5338 26.1139 31.7215 26.0929 31.9135 26.0843C32.1048 26.0763 32.3005 26.0723 32.5005 26.0723C33.7005 26.0723 34.6672 26.2929 35.4005 26.7343C36.1338 27.1763 36.5005 27.7639 36.5005 28.4973V30.0723H32.0005ZM16.5005 25.0723C15.9505 25.0723 15.4798 24.8763 15.0885 24.4843C14.6965 24.0929 14.5005 23.6223 14.5005 23.0723C14.5005 22.5056 14.6965 22.0306 15.0885 21.6473C15.4798 21.2639 15.9505 21.0723 16.5005 21.0723C17.0672 21.0723 17.5422 21.2639 17.9255 21.6473C18.3088 22.0306 18.5005 22.5056 18.5005 23.0723C18.5005 23.6223 18.3088 24.0929 17.9255 24.4843C17.5422 24.8763 17.0672 25.0723 16.5005 25.0723ZM32.5005 25.0723C31.9505 25.0723 31.4795 24.8763 31.0875 24.4843C30.6962 24.0929 30.5005 23.6223 30.5005 23.0723C30.5005 22.5056 30.6962 22.0306 31.0875 21.6473C31.4795 21.2639 31.9505 21.0723 32.5005 21.0723C33.0672 21.0723 33.5422 21.2639 33.9255 21.6473C34.3088 22.0306 34.5005 22.5056 34.5005 23.0723C34.5005 23.6223 34.3088 24.0929 33.9255 24.4843C33.5422 24.8763 33.0672 25.0723 32.5005 25.0723ZM24.5005 24.0723C23.6672 24.0723 22.9588 23.7806 22.3755 23.1973C21.7922 22.6139 21.5005 21.9056 21.5005 21.0723C21.5005 20.2223 21.7922 19.5096 22.3755 18.9343C22.9588 18.3596 23.6672 18.0723 24.5005 18.0723C25.3505 18.0723 26.0628 18.3596 26.6375 18.9343C27.2128 19.5096 27.5005 20.2223 27.5005 21.0723C27.5005 21.9056 27.2128 22.6139 26.6375 23.1973C26.0628 23.7806 25.3505 24.0723 24.5005 24.0723Z" fill="white"/>
</g>
</svg>

                            </span>
                            <p className={`${boxStyle}`}>Experienced Mentors</p>
                            <p className={`${pStyle}`}>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                        <div className='bg-white w-1/2 h-auto lg:p-6 p-3 font-font-satoshi '>
                            <span>
                                <svg className={`${iconStyle}`} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.570312" y="0.5" width="48" height="48" rx="4" fill="#EA6B45"/>
<mask id="mask0_1476_318" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25">
<rect x="12.5703" y="12.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1476_318)">
<path d="M23.5703 29.5H25.5703V28.5H26.5703C26.8536 28.5 27.0913 28.404 27.2833 28.212C27.4746 28.0207 27.5703 27.7833 27.5703 27.5V24.5C27.5703 24.2167 27.4746 23.979 27.2833 23.787C27.0913 23.5957 26.8536 23.5 26.5703 23.5H23.5703V22.5H27.5703V20.5H25.5703V19.5H23.5703V20.5H22.5703C22.287 20.5 22.0496 20.5957 21.8583 20.787C21.6663 20.979 21.5703 21.2167 21.5703 21.5V24.5C21.5703 24.7833 21.6663 25.0207 21.8583 25.212C22.0496 25.404 22.287 25.5 22.5703 25.5H25.5703V26.5H21.5703V28.5H23.5703V29.5ZM16.5703 32.5C16.0203 32.5 15.5496 32.3043 15.1583 31.913C14.7663 31.521 14.5703 31.05 14.5703 30.5V18.5C14.5703 17.95 14.7663 17.4793 15.1583 17.088C15.5496 16.696 16.0203 16.5 16.5703 16.5H32.5703C33.1203 16.5 33.5913 16.696 33.9833 17.088C34.3746 17.4793 34.5703 17.95 34.5703 18.5V30.5C34.5703 31.05 34.3746 31.521 33.9833 31.913C33.5913 32.3043 33.1203 32.5 32.5703 32.5H16.5703Z" fill="white"/>
</g>
</svg>

                            </span>
                            <p className={`${boxStyle}`}>Experienced Mentors</p>
                            <p className={`${pStyle}`}>High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About