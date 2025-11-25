import MonsteraDeliciosa from '../../assets/MonsteraDeliciosa.png'
import SnakePlant from '../../assets/Snakeplant.png'

function HeroSection() {


    const scrollToCategories =()=>{
    const categories = document.getElementById('categories')
        if(categories){
            categories.scrollIntoView({behavior: 'smooth'})
        }
    }

    
    const scrollToSelling =()=>{
    const selling = document.getElementById('greenery')
        if(selling){
            selling.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <>
            <section className="flex justify-center items-center py-4 px-2 gap-[10rem] mt-10">
                <div className="heroData w-[60rem] text-white">
                    <h1 className='text-[8rem] font-bold leading-[9rem] '>Fresh Plants for a Fresh Space</h1>
                    <p className='text-[1.3rem]'>Bring nature to your home, one plant at a time.</p>
                    <div className="flex ctas mt-8">
                        <button className='btn bg-white/30 backdrop-blur-[6px] border border-white/20' onClick={scrollToSelling}>Discover Greenery</button>
                        <button className='btn bg-white/30 border border-white/20 ' onClick={scrollToCategories}>Browse Categories</button>
                    </div>
                </div>
                <div className="heroImgs m-0 p-0 relative w-[30rem] h-[35rem] ">
                    <div className="absolute inset-0 h-[23rem] w-[25rem] text-white bg-white/10 top-[7rem] backdrop-blur-[3px] border border-white/30 shadow-md rounded-2xl z-10 flex items-center justify-center flex-col text-start m-0 p-0">
                        <img
                            src={MonsteraDeliciosa}
                            alt="Monstera Deliciosa"
                            className="w-[20rem] h-auto object-contain z-20 absolute top-[-13rem]"
                        />
                        <div className="mt-[14rem]">
                            <h6 className="text-xl font-semibold text-center">Monstera Deliciosa</h6>
                            <p className="text-sm max-w-xs mt-2">
                                The Swiss Cheese Plant, scientifically called Monstera deliciosa, is a popular tropical indoor plant known for its large, glossy green leaves with natural holes.
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-[13rem] left-[-5rem] z-30 w-[11rem] h-[10rem] absolute inset-0 text-white bg-white/10 backdrop-blur-[3px] border border-white/30 shadow-md rounded-2xl flex items-center justify-center flex-col text-start m-0 p-0">
                        <img src={SnakePlant} alt="Snake Plant" className="absolute top-[-10rem] left-[0rem] w-[13rem] h-[20rem] object-contain " />
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroSection