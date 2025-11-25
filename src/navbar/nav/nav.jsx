import ArecaPalm from "../../assets/ArecaPalm.png";
import ZZPlant from "../../assets/ZZPlant.png";
import BonsaiPlant from "../../assets/Bonsaistyle.png";
import PeaceLily from '../../assets/PeaceLily.png'
import Philodendron from '../../assets/PhilodendronBirkin.png'
import Rubber from '../../assets/RubberPlant.png'
import StringHeart from '../../assets/StringofHearts.png'
import StringPearls from '../../assets/StringofPearls.png'
import Juniper from '../../assets/JuniperBonsai.png'


const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Category', link: '/' },
    { name: 'Product Details', link: '/' },
    {
        name: 'Dropdown',
        type: 'dropdown',
        dropdownItems: [
            {
                name: 'Featured',
                plants: [
                    { 
                        name: 'Swiss Cheese Plant', 
                        info: 'The Swiss Cheese Plant, scientifically called Monstera deliciosa', 
                        img: ArecaPalm, link: '/' 
                    },
                    { 
                        name: 'Swiss Cheese Plant', 
                        info: 'The Swiss Cheese Plant, scientifically called Monstera deliciosa', 
                        img: ZZPlant, link: '/' 
                    },
                    {
                        name: 'Swiss Cheese Plant', 
                        info: 'The Swiss Cheese Plant, scientifically called Monstera deliciosa', 
                        img: BonsaiPlant, link: '/' ,
                        style:'w-[10rem]'
                    }
                ]
            },
            {
                name: 'Trending ',
                plants: [
                    { 
                        name: 'Peace Lily', 
                        info: 'Peace Lily is a graceful indoor plant famous for its glossy green leaves and elegant white blooms.', 
                        img: PeaceLily, link: '/' 
                    },
                    { 
                        name: 'Philodendron Birkin', 
                        info: 'Philodendron Birkin is a striking houseplant known for its dark green leaves with dramatic white pinstripes', 
                        img: Philodendron, link: '/' 
                    },
                    { 
                        name: 'Rubber Plant', 
                        info: 'Rubber Plant is a resilient indoor tree prized for its large, glossy, deep green leaves', 
                        img: Rubber, link: '/' 
                    }
                ]
            },
            {
                name: 'New Arrivals',
                plants: [
                    { 
                        name: 'String of Hearts', 
                        info: 'String of Hearts is a delicate trailing succulent with heart-shaped leaves and a charming cascading habit.', 
                        img: StringHeart, link: '/' 
                    },
                    { 
                        name: 'String of Pearls', 
                        info: 'String of Pearls is a unique trailing succulent with bead-like leaves that resemble a necklace of green pearls.', 
                        img: StringPearls, link: '/' 
                    },
                    { 
                        name: 'Juniper Bonsai', 
                        info: '"Juniper Bonsai is a miniature tree that brings a sense of calm and tradition to your space.', 
                        img: Juniper, link: '/' 
                    }
                ]
            },
        ]
    },
    {
        name: 'Mega Menu',
        type: 'mega',
        menuItems: [
            {
                name: 'Indoor',
                items: [
                    { name: 'Low-Light Plants', link: '/' },
                    { name: 'Air-Purifying Plants', link: '/' },
                    { name: 'Table-Top Plants', link: '/' },
                    { name: 'Big Leaf Plants', link: '/' },
                    { name: 'Office Plants', link: '/' },
                ]
            },
            {
                name: 'Outdoor',
                items: [
                    { name: 'Garden Plants', link: '/' },
                    { name: 'Balcony Plants', link: '/' },
                    { name: 'Flowering Plants', link: '/' },
                    { name: 'Seasonal Plants', link: '/' },
                    { name: 'Shrubs & Bushes', link: '/' },
                ]
            },
            {
                name: 'Home Decor',
                items: [
                    { name: 'Decorative Pots + Plants', link: '/' },
                    { name: 'Minimalist Decor Plants', link: '/' },
                    { name: 'Aesthetic Corner Plants', link: '/' },
                    { name: 'Hanging Plants', link: '/' },
                    { name: 'Statement Plants', link: '/' },
                ]
            }
        ],
    },
    { name: 'Blog', link: '/' },
    { name: 'Contact', link: '/' }

]

function Nav() {

    return (
        <>
            <nav className="flex gap-16 text-white bg-[#31412C]/40 m-2 px-8 py-[1px] items-center justify-center w-fit text-xl rounded-[3rem] shadow-md">
                {navItems.map((navItem, index) => (
                    <div className="relative group" key={index}>
                        {navItem.type ? (
                            <button className="btn cursor-pointer">{navItem.name}</button>
                        ) : (
                            <a href={navItem.link} className="hover:text-[#A0E08D] transition-all ease-in-out duration-[500ms]">{navItem.name}</a>
                        )}
                        {navItem.type === 'dropdown' && (
                            <div className="hidden group-hover:flex absolute border border-white/30 bg-gradient-to-b from-[#2B3827]/30 to-[#1E2C1A]/70 p-4 flex z-50 top-12 left-[-25rem] rounded-xl px-4 backdrop-blur-[6px]">
                                {navItem.dropdownItems?.map((item, idx) => (
                                    <div key={idx} className="min-w-[350px]">
                                        <div className="flex flex-col justify-center items-center">
                                            <h3 className="my-6 text-[1.5rem] font-semibold tracking-[3px]">{item.name}</h3>
                                            <div className="bg-[#2C3B27]/30 mx-[6px] rounded-md shadow-lg border border-white/10 h-[35rem]">
                                                {item.plants?.map((plant, plantIdx) => (
                                                    <div key={plantIdx} className={`${ plant.name === 'String of Pearls' ? 'mt-14' :
                                                                                        plant.name === 'Juniper Bonsai' ? 'mt-16' :
                                                                                        'mt-4'} mx-2 my-4 flex justify-center items-center cursor-pointer`}>
                                                        <img src={plant.img} alt={plant.name} className={` ${plant.name === 'Swiss Cheese Plant' ? 'w-[7.5rem]' :
                                                            plant.name === 'String of Pearls' ? 'w-[8rem]' :
                                                            plant.name === 'Juniper Bonsai' ? 'w-[9rem]' :
                                                            'w-[7rem]' }`} />
                                                        <div>
                                                            <h5 className="text-[1rem] font-semibold">{plant.name}</h5>
                                                            <p className="text-[0.9rem] font-thin leading-[1rem]">{plant.info}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {navItem.type === 'mega' && (
                            <div className="hidden group-hover:flex absolute border border-white/30 bg-gradient-to-b from-[#2B3827]/30 to-[#1E2C1A]/70 p-4 flex justify-center items-center z-50 top-12 left-[-30rem] rounded-xl px-8 backdrop-blur-[6px] w-[70rem]">
                                {navItem.menuItems?.map((sec, secIdx) => (
                                    <div key={secIdx} className="mr-6">
                                        <h5 className="text-[1.8rem] font-semibold mx-5">{sec.name}</h5>
                                        <div className="mt-8 border-t border-white/20 mx-5 ">
                                            {sec.items?.map((sub, id) => (
                                                <div key={id} className="my-4 " >
                                                    <a href={sub.link} className="hover:text-[#A0E08D] transition-all ease-in-out duration-[500ms]">{sub.name}</a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <img src={ZZPlant} alt="Megamenu Image" className="w-[18rem] m-0" />
                            </div>
                        )}
                    </div>
                ))}

            </nav>
        </>
    )
}

export default Nav