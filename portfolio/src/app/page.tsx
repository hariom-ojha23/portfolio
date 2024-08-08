'use client'

import HomeScreenWrapper from "@/components/HomeScreenWrapper";
import { socialLinks } from "@/utils/socialLinks";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
    const [name, setName] = useState('')

    const myName = 'Hariom Ojha'

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setName(myName.substring(0, index + 1))
            index++;

            if (index >= myName.length) {
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <HomeScreenWrapper>
            <div className="h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center relative">
                <h1 className="text-[85px] font-bold !mb-0 text-center">
                    Hi, I'm
                    <span className="text-yellow-300"> {name}</span>
                </h1>
                <h4 className="text-[21px] text-center font-semibold">
                    I love to learn and build scalable & optimized applications.
                </h4>

                <div className="flex gap-5 mt-10">
                    <button className="
                        py-2 px-5 
                        rounded-md 
                        border-2 
                        border-[#007bff]
                        font-semibold
                        cursor-pointer
                        hover:bg-[#007bff] 
                    ">
                        Download CV
                    </button>

                    <button className="
                        py-2 px-5 
                        rounded-md 
                        border-2 
                        border-green-500
                        cursor-pointer
                        font-semibold
                        hover:bg-green-500 
                        hover:text-black
                    ">
                        Let's Talk
                    </button>
                </div>

                <div className="
                    absolute 
                    flex gap-2 
                    bottom-3 
                    lg:flex-col 
                    lg:left-2 
                    lg:bottom-auto"
                >
                    {
                        socialLinks.map((link) => (
                            <a 
                                key={link?.id}
                                href={link.href} 
                                target="_blank" 
                                className="
                                    transition-transform 
                                    duration-150 
                                    hover:scale-[115%] 
                                    ease-linear
                                "
                            >
                                <Image 
                                    src={link.imageSrc} 
                                    height={38}
                                    width={38} 
                                    alt={link.name}
                                />
                            </a>
                        ))
                    }
                    <div></div>
                </div>
            </div>
        </HomeScreenWrapper>
    )
}

export default Home
