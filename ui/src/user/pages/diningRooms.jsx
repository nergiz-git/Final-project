import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../context/context';
import { Link } from 'react-router';

function diningRooms() {
    const { theme } = useContext(MainContext);
    const [diningRooms, setDiningRooms] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/diningRooms")
            .then(res => res.json())
            .then(data => setDiningRooms(data));
    }, []);

    useEffect(() => {
        document.body.className = theme ? "dark" : "";
    }, [theme]);
    return (
        <>
            <div className="px-4 sm:px-6 md:px-[46px] pb-8 sm:pb-10 md:pb-[48px] pt-8 sm:pt-10 md:pt-[48px] md:mt-[160px] px-[40px]">
                <div className="relative h-[300px] sm:h-[400px] md:h-[400px] overflow-hidden rounded-lg md:rounded-none">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source src="https://cdn.media.amplience.net/v/boconcept/fe6024bc-6416-4431-a4f7-b11800906ee0/webm1080p" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/55"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 mb-2">Dining rooms</h3>
                        <h2 className="text-lg sm:text-xl md:text-[14px] text-center ml-[100px] h-[88px] w-[770px]">The dining room is the heart of the home. Flexible and functional, it is a designated space to gather with loved ones to share meals and make memories. Be inspired to create a place for entertaining with these modern dining room designs by BoConcept stylists, featuring the best of Danish design.</h2>
                    </div>
                </div>
            </div>

            <div className="text-center pb-[20px] mt-[40px] md:mt-[60px] lg:mt-[80px] px-4">
                <h3 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[22px] sm:text-[25px] md:text-[28px] font-bold`}>
                    Inspiring dining rooms
                </h3>
                <p className={`${theme ? "text-gray-300" : "text-[#545454]"} text-sm sm:text-base mt-2`}>
                    Get inspiration from a dining rooms styled by our skilled interior designers
                </p>
            </div>

            <div className="px-4 sm:px-6 md:px-8 lg:px-[40px] mb-[40px] md:mb-[60px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {diningRooms.map(item => (
                        <Link 
                        to={`/dining-rooms/${item.id}`}
                            key={item.id}
                            className="cursor-pointer group"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[400px] object-cover"
                            />
                        </Link>
                    ))}
                </div>
            </div>

        </>
    )
}

export default diningRooms