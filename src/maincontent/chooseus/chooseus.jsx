import OutdoorPlant from '../../assets/outdoor plant.png'

function ChooseUs(){
    return(
        <>
            <div className="grid grid-cols-2 gap-[10rem] px-[8rem] mt-[8rem] justify-items-center items-center ">
                <div>
                    <h3 className='text-white text-[4rem] font-bold text-start'>Why Choose Us?</h3>
                    <p className='text-white text-[1.2rem] mt-[2rem] leading-10 text-[1.4rem]'>We make plant shopping effortless by bringing you only the healthiest, most vibrant greenery. Each plant comes with clear, easy-to-follow care guidance, so you’ll always know how to keep your indoor jungle thriving. Our reliable service ensures your order arrives on time and in perfect condition, while our team is always ready to assist with any questions or concerns. Enjoy a smoother, smarter, and fresher plant-buying experience, designed to make your home greener, your life brighter, and your plant journey truly enjoyable.</p>
                </div>
                <div>
                    <img src={OutdoorPlant} className='w-[30rem] h-auto' alt="Section image" />
                </div>
            </div>
        </>
    )
}

export default ChooseUs