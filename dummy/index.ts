import Audio from "@/assets/svg/Audio";
import Zoom from "@/assets/svg/Zoom";
import { CONSTANT_TEXT } from "@/constants";
import { PUBLIC_URL } from "@/url";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import avatar1 from '../assets/images/image.png';
import avatar2 from '../assets/images/image1.png';
import avatar3 from '../assets/images/image2.png';
import avatar4 from '../assets/images/image3.png';
import avatar5 from '../assets/images/image4.png';

export const navs: { id: number, name: string, link: string }[] = [
    { id: 1, name: CONSTANT_TEXT.HOME, link: PUBLIC_URL.HOME_URL },
    { id: 2, name: CONSTANT_TEXT.ABOUT_US, link: PUBLIC_URL.ABOUT_US_URL },
    { id: 3, name: CONSTANT_TEXT.COURSES, link: PUBLIC_URL.COURSES_URL },
    { id: 4, name: CONSTANT_TEXT.TESTIMONIAL, link: PUBLIC_URL.TESTIMONIAL_URL },
    { id: 5, name: CONSTANT_TEXT.COMMUNITY, link: PUBLIC_URL.COMMUNITY_URL },
];

export const avatars: { id: number, url: StaticImageData }[] = [
    { id: 1, url: avatar1 },
    { id: 2, url: avatar2 },
    { id: 3, url: avatar3 },
    { id: 4, url: avatar4 },
    { id: 5, url: avatar5 },
];

export const categories:{id: number, name: string}[] = [
    {id: 1, name: "All Categories"},
    {id: 2, name: "Design"},
    {id: 3, name: "Development"},
    {id: 4, name: "Marketing"},
]
