import SnakePlant from '../../assets/Snakeplant.png'
import ZZplant from '../../assets/ZZPlant.png'
import MonsterPlant from '../../assets/MonsteraDeliciosa.png'
import Pothos from '../../assets/Pothos.png'
import ArecaPalm from '../../assets/ArecaPalm.png'
import AloeVera from '../../assets/Aloevera.png'
import AlocasiaPolly from '../../assets/AlocasiaPolly.png'
import Anthurium from '../../assets/Anthurium.png'

const sellingCards=[
    {name:'Snake Plant' ,info:'The Snake Plant, also known as Sansevieria or Mother-in-Law’s Tongue, is a hardy and low-maintenance indoor plant famous for its upright, sword-like leaves' , 
        img:SnakePlant },
    {name:'Monstera Deliciosa' , info:'Monstera Deliciosa, commonly called the Swiss Cheese Plant, is a tropical indoor plant prized for its large, glossy green leaves with natural splits and holes' , 
        img:MonsterPlant},
    {name:'Pothos' , info:'The Pothos plant is one of the easiest indoor plants to care for. It grows fast, has beautiful heart-shaped leaves, and looks great in any room. Pothos can survive in low light, doesn’t need frequent watering, and is perfect for beginners.' , 
        img:Pothos},
    {name:'ZZ Plant' , info:'The ZZ Plant is one of the toughest, most low-maintenance indoor plants you can get. It’s famous for its shiny, smooth, dark-green leaves that look naturally polished — almost like a premium décor piece.' , 
        img:ZZplant , style:'w-[13rem] h-[auto]'},
    {name:'Areca Palm' , info:'Areca Palm is a lush indoor palm with feathery, arching fronds that instantly create a tropical ambiance. It’s known for its air-purifying properties and ability to increase humidity. ' , 
        img:ArecaPalm },
    {name:'Aloe vera' , info:'Aloe Vera is a hardy succulent known for its thick, fleshy leaves filled with soothing gel. Perfect for beginners, it thrives in bright, indirect light and needs minimal watering. l' , 
        img:AloeVera },
    {name:'Alocasia Polly' , info:'Alocasia Polly, also known as the African Mask Plant, is admired for its striking arrow-shaped leaves with bold white veins , perfect for adding a wow factor to living spaces or offices.' , 
        img:AlocasiaPolly },
    {name:'Anthurium' , info:'Anthurium is a tropical flowering plant famous for its glossy heart-shaped leaves and vibrant red or pink spathes. It’s an elegant indoor plant that adds color and sophistication to any room..' , 
        img:Anthurium},
]

function BestSelling(){
    return(
        <>
            <div className='my-10' id='greenery'>
                <div className="flex px-[8rem] items-center justify-between">
                    <div>
                        <h3 className='text-white text-[4rem] font-bold'>Best Selling</h3>
                        <p className="text-white text-[1.4rem]">Best Selling Plants — Our Most Loved Picks</p>
                    </div>
                    <button className='btn text-white bg-white/10 border border-white/10'>View All Products</button>
                </div>
                <div className="grid grid-cols-4 gap-10 mt-14 px-[8rem]">
                    {sellingCards.map((card , index)=>(
                        <div className='flex flex-col items-center gap-3 mx-8'>
                            <div className=" sellingCard cursor-pointer m-0 p-0 relative w-[25rem] h-[25rem] " key={index}>
                                <div className="absolute inset-0 h-[20rem] w-[23rem] text-white bg-gradient-to-b from-[#61765B]/10 to-[#2C3B27]/30 top-[7rem] backdrop-blur-[4px] border border-white/30 shadow-md rounded-2xl z-10 flex items-center justify-center flex-col text-start m-0 p-0">
                                    <img
                                        src={card.img}
                                        alt="Card Image"
                                        className={`w-[15rem] h-auto object-contain z-20 absolute top-[-11rem] ${card.style} cardImg`}
                                    />
                                    <div className="mt-[10rem]">
                                        <h6 className="text-xl font-semibold text-center">{card.name}</h6>
                                        <p className="text-sm max-w-xs mt-2">{card.info}</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="flex my-[2.5rem]">
                                <button className=' btn bg-white/30 backdrop-blur-[6px] border border-white/20 w-[10rem] my-10 text-white font-medium '>Buy Now</button>
                                <button className='btn bg-white/30 backdrop-blur-[6px] border border-white/20 w-[10rem] my-10 text-white font-medium'>View Product</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BestSelling