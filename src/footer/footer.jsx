import { useState } from "react"

const socialLinks = ['fa-brands fa-instagram', 'fa-brands fa-x-twitter', 'fa-brands fa-tiktok', 'fa-brands fa-facebook-f']
const FooterLinks = [
    {
        name: 'Quick Links',
        items: ['Home', 'Categories', 'Best Selling', 'Featured', 'Product Details', 'Contact']
    },
    {
        name: 'Customer Care',
        items: ['FAQs', 'Shipping & Returns', 'Privacy Policy', 'Terms & Conditions']
    },
]

function Footer() {

    const [subscribed, setSubscribed] = useState(false)
    const [inp, updateInp] = useState('')
    const [err , setErr] = useState('')

    const handleInp = (e) => {
        let val = e.target.value
        updateInp(val)
    }

    const update = () => {
        if (inp.trim() === '') {
            setErr('Must Enter Your Email to Subscribe !')
            return
        }

        let format = '@gmail.com'
        if(!inp.includes(format)){
           setErr('Invalid Format')
           setSubscribed(false)
           return
        } else{
        }
        setSubscribed(true)
        updateInp('')
        setErr('')

    }

    return (
        <>
            <div className="flex px-[8rem] gap-[8rem] mb-10 justify-center items-center">
                <div>
                    <a href="#" className="logoName tracking-[0.7rem] text-[3rem] text-white">IVYLANE</a>
                    <div className="flex gap-4 mt-[2rem]" >
                        {socialLinks.map((link, i) => (
                            <div className="social cursor-pointer text-white hover:text-[#A0E08D] transition-color duration-[300ms] text-3xl " key={i} >
                                <i className={link}></i>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 text-white">
                    {FooterLinks.map((link, index) => (
                        <div key={index}>
                            <p className='text-white text-3xl font-bold mb-[1rem]'>{link.name}</p>
                            {link.items.map((item, idx) => (
                                <div key={idx} className='leading-[2.8rem] text-xl'>
                                    <a href="/" className='text-white hover:text-[#A0E08D] transition-colors duration-[300ms] w-full'>{item}</a>
                                </div>
                            ))}
                        </div>
                    ))}

                    <div>
                        <p className='text-white text-3xl font-bold'>News Letter</p>
                        <div className='mt-[1rem]'>
                            <p className='text-xl mb-3'>Subscribe for the latest plant tips & offers!</p>

                            <input
                                onChange={handleInp}
                                type="email"
                                disabled={subscribed}
                                value={inp} 
                                placeholder={subscribed ? 'You will get exclusive updates !!!' :'example@gmail.com'}
                                className='w-full bg-transparent border-b border-white/50 p-4'
                            />

                            <button
                                disabled={subscribed}
                                id="subsBtn"
                                className={`
                                    btn text-white border border-white/30 w-full mt-[2rem] transition-all duration-300 hover:bg-[#4b743fab]
                                    ${subscribed ? 'bg-[#4b743fab] cursor-not-allowed' : 'bg-white/10 hover:bg-white/20'}
                                `}
                                onClick={update}
                            >
                                {subscribed ? 'Subscribed' : 'Subscribe'}
                            </button>
                            <p className="text-red-500 text-lg mt-5 text-center">{err}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
