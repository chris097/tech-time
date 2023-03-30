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

export const categories: { id: number, name: string, key: string }[] = [
    { id: 1, name: "All Categories", key: "" },
    { id: 2, name: "Design", key: "Design" },
    { id: 3, name: "Development", key: "Development" },
    { id: 4, name: "Marketing", key: "Marketing" },
];

export const cards: {
    id: number,
    type: string,
    title: string,
    amount: string,
    name: string
}[] = [
        { id: 1, type: "Design", title: "Introduction to user research in ux design", amount: "$15.00", name: "Leonard Victor" },
        { id: 2, type: "Marketing", title: "Introduction to  new marketing audience", amount: "$32.00", name: "Jeffrey Williams" },
        { id: 3, type: "Development", title: "Introduction to html, css & bootstrap", amount: "$55.00", name: "Claretta Mason" },
        { id: 4, type: "Development", title: "Introduction to javascript, git & GitHub", amount: "$45.00", name: "Jessica Duke" },
        { id: 5, type: "Marketing", title: "Introduction to outroom  marketing analysis", amount: "$25.00", name: "Samuel Jacobs" },
        { id: 6, type: "Design", title: "Introduction to live  marketing analysis", amount: "$25.00", name: "Adam Smith" },
    ];

export const faqs:{id: number, title: string, description: string}[] = [
    {
        id: 1,
        title: "Is there a free trial available?",
        description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
    },
    {
        id: 2,
        title: "Can i change my plan later?",
        description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
    },
    {
        id: 3,
        title: "Are the courses lifetime?",
        description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
    },
    {
        id: 4,
        title: "Do i get certified after taking courses?",
        description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
    },
    {
        id: 5,
        title: "How do i reach out to mentors?",
        description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
    },
    {
        id: 6,
        title: "Do we get job ready after taking courses?",
        description: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
    },
];

export const testimonies:{id: number, name: string, description: string, type: string}[] = [
    {
        id: 1, name: "Bella Moon", type: "Product Designer",
        description: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"
    },
    {
        id: 1, name: "Bella Moon", type: "Product Designer",
        description: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"
    },
    {
        id: 1, name: "Bella Moon", type: "Product Designer",
        description: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"
    },
    {
        id: 1, name: "Bella Moon", type: "Product Designer",
        description: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world"
    },
   
]

