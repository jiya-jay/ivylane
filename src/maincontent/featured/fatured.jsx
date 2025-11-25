import Calathea from '../../assets/CalatheaOrbifolia.png'
import FicusGinseng from '../../assets/FicusGinseng Bonsai.png'
import FicusMicrocarpa from '../../assets/FicusMicrocarpa.png'
import OliveTree from '../../assets/MiniOliveTree.png'

const FeaturedCards=[
    {name:'Calathea Orbifolia' , img:Calathea , price:'$18.00' , rating:'3.3'},
    {name:'Ficus Ginseng Bonsai' , img:FicusGinseng ,  price:'$14.05' ,  rating:'4.3'} ,
    {name:'Ficus Microcarpa' , img:FicusMicrocarpa ,  price:'$19.00' ,  rating:'4.5'},
    {name:'Mini Olive Tree' , img:OliveTree , price:'$12.00' ,  rating:'5' , Calatheastyle:'w-[13rem] h-[auto]'},
]

function Featured(){
    return(
        <>
            <div className='my-10'>
                <div className="flex px-[8rem] items-center justify-between">
                    <div>
                        <h3 className='text-white text-[4rem] font-bold text-center'>Featured</h3>
                        <p className="text-white text-[1.4rem]">Trending & Featured</p>
                    </div>
                    <button className='text-white bg-white/10 border border-white/10'>View All Products</button>
                </div>
                <div className="grid grid-cols-4 gap-10 mt-14 px-[8rem]">
                    {FeaturedCards.map((card , index)=>(
                        <div className='flex flex-col items-center gap-3 mx-8'>
                            <div className=" sellingCard cursor-pointer m-0 p-0 relative w-[25rem] h-[25rem] " key={index}>
                                <div className="absolute inset-0 h-[20rem] w-[23rem] text-white bg-gradient-to-b from-[#61765B]/10 to-[#2C3B27]/30 top-[7rem] backdrop-blur-[4px] border border-white/30 shadow-md rounded-2xl z-10 flex items-center justify-center flex-col text-start m-0 p-0">
                                    <img
                                        src={card.img}
                                        alt="Card Image"
                                        className={`w-[15rem] h-auto object-contain z-20 absolute top-[-11rem] ${card.style} cardImg`}
                                    />
                                    <div className="mt-[8rem] border-b border-white/30 pb-6">
                                        <h6 className="text-xl font-semibold text-center">{card.name}</h6>
                                    </div>
                                    <div className='flex justify-between items-center gap-[8rem] mt-4'>
                                        <div>
                                            <div className="flex gap-2 inline-block">
                                                <i className="bi bi-star-fill text-yellow-400"></i>
                                                <span>{card.rating}</span>
                                            </div>
                                            <span>{card.price}</span>
                                        </div>
                                        <button className='bg-white/10 border border-white/30'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Featured