import { useState, useEffect } from 'react'

import IndoorPlants from '../../assets/indoorplant.png'
import OutdoorPlants from '../../assets/outdoorplant.png'
import AirPurifying from '../../assets/airpurifying.png'
import LowMaintainance from '../../assets/lowmaintainance.png'
import PetFriendly from '../../assets/petfriendly.png'
import RarePlants from '../../assets/rareplants.png'
import HomeDecor from '../../assets/homedecor.png'
import Succulents from '../../assets/Succulents.png'

const slideItems = [
    { name: 'Indoor Plants', info: 'Bring life and freshness to your home with our stunning indoor plants! 🌿', img: IndoorPlants, link: '/' },
    { name: 'Outdoor Plants', info: 'Enhance your garden, balcony, or patio with our vibrant outdoor plants! 🌸🌿', img: OutdoorPlants, link: '/' },
    { name: 'Home Decor', info: 'Elevate your living space with our stylish home decor plants! 🌿✨', img: HomeDecor, link: '/' },
    { name: 'Pet Friendly', info: 'Keep your home green without worrying about your furry friends! 🐶🐱', img: PetFriendly, link: '/' },
    { name: 'Air Purifying', info: 'Breathe easier and live greener with our air-purifying plants! 🌿✨', img: AirPurifying, link: '/' },
    { name: 'Rare Plants', info: 'Discover the extraordinary with our collection of rare and exotic plants! 🌿✨', img: RarePlants, link: '/' },
    { name: 'Succulents', info: 'Bring low-maintenance greenery into your home with our charming succulents! 🌵', img: Succulents, link: '/' },
    { name: 'Low Maintainance', info: 'Enjoy the beauty of greenery without the hassle! 🌿', img: LowMaintainance, link: '/' },
]

function Categories() {

    const [index, setIndex] = useState(0);
    const [smooth, setSmooth] = useState(true);
    const slidePerView = 6 // tum already pass kar rahi ho
    const total = slideItems.length;

    // Combined slides for infinite effect
    const extendedSlides = slideItems.concat(slideItems.slice(0, slidePerView));

    const nextSlide = () => {
        setIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        setIndex(prev => prev - 1);
    };

    // Reset index instantly when reaching the duplicated end
    useEffect(() => {
        if (index === total) {
            setSmooth(false);
            setTimeout(() => {
                setIndex(0);
                setSmooth(true);
            }, 20);
        }

        if (index < 0) {
            setSmooth(false);
            setTimeout(() => {
                setIndex(total - 1);
                setSmooth(true);
            }, 20);
        }
    }, [index, total]);

    useEffect(() => {
        const auto = setInterval(() => {
            nextSlide();
        }, 2000); // 3 seconds

        return () => clearInterval(auto);
    }, []);




    return (
        <>
            <div className='my-[8rem]' id='categories'>
                <div className="flex justify-between px-[8rem]">
                    <h3 className='text-white text-[4rem] font-bold text-start'>Categories</h3>
                    <div className="flex justify-center items-center">
                        <div className="mr-[1rem] flex items-center justify-center gx-4 ">
                            <div id="slideLeft" onClick={prevSlide}>
                                <i className="bi bi-chevron-left"></i>
                            </div>
                            <div id="slideRight" onClick={nextSlide}>
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </div>
                        <button className="btn text-white bg-white/10 border border-white/30 shadow-md ">Explore Categories</button>
                    </div>
                </div>
                <p className="text-white text-[1.4rem] px-[8rem] mb-[6rem]">Explore plants by type, care level, and purpose.</p>
                <div className=" relative overflow-hidden w-full" >
                    <div className={`flex mt-[8.5rem] gap-9 ${smooth ? 'transition-transform duration-500 ease-in-out' : ''}`}
                        style={{ transform: `translateX(-${index * (100 / slidePerView)}%)` }} >
                        {extendedSlides.map((slide, idx) => (
                            <div className={`flex-none w-[23%] px-2 slide`} key={idx}>
                                <div className="relative item cursor-pointer px-6 group flex flex-col  justify-center items-center " >
                                    <img src={slide.img} alt="slide image" className={`absolute inset-0 w-[55rem] h-[30rem] top-[-12rem] object-contain  hover:w-[28rem] group-hover:h-[28rem]  transition-all ease-in-out `} />
                                    <p className='text-white bg-white/10 text-[1.4rem] rounded-full font-semibold w-fit px-4 py-1 mt-[20rem] transition-all ease-in-out duration-[500ms] group-hover:mt-[3rem] backdrop-blur-[2px] border border-white/20 z-50 '>{slide.name}</p>
                                    <div className="mt-[10rem] ">
                                        <div className="opacity-0 info absolute top-[12rem] left-[4rem] w-[17rem] flex flex-col justify-center items-center">                                
                                            <p className='text-white  text-[1.2rem] z-40 text-center'>{slide.info}</p>
                                            <a className="text-white z-40 text-[1.2rem] hover:text-[#A0E08D] transition-all ease-in-out duration-[500ms] ">Explore <i className="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
