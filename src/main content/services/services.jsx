const services=[
    {
        name :'Premium Quality', description:'We offer only top-notch, healthy plants carefully selected to brighten your space and last long.' , icon:'fa-solid fa-trophy'
    },{
        name :'Pet-Friendly Options', description:'Our collection includes plants that are safe for your furry friends, so you can enjoy greenery worry-free.' , icon:'fa-solid fa-paw'
    },{
        name :'Fast & Reliable Delivery', description:'Get your plants delivered safely and quickly, directly to your doorstep, fresh and ready to grow.' , icon:'fa-solid fa-truck'
    }
]

function Services(){
    return(
        <>
            <div className="grid grid-cols-3 gap-10 px-[8rem] my-[8rem]">
                {services.map((service , index)=>(
                    <div className="flex gap-4 justify-center items-center" key={index}>
                        <div className="icon flex items-center justify-center drop-shadow-xl cursor-pointer transform hover:scale-110">
                            <i className={`${service.icon} text-[3rem] text-transparent bg-clip-text bg-[linear-gradient(315deg,#26461D,#507845)] drop-shadow-xl`}></i>
                        </div>
                        <div>
                            <h6 className="text-white text-3xl font-semibold">{service.name}</h6>
                            <p className="text-white mt-4 text-[1.2rem]">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services