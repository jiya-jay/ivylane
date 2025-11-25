import { useState, useRef, useEffect, use } from "react";

const btnStyle = 'cursor-pointer hover:bg-transparent p-0 transform hover:scale-[1.2] hover:translate-y-[-3px]'
const linkStyle = 'text-[#A0E08D] transition-colors duration-[300ms] w-full underline'
const tabBtnStyle = 'hover:bg-white/10 border border-white/10 hover:border-white/10 rounded-[4px] w-full hover:text-[#A0E08D]'
const formInpStyle = 'w-full bg-transparent placeholder:text-gray-100/80 font-thin placeholder:text-[1.2rem] focus:ring-0 focus:outline-none'
const inpContainerStyle = 'bg-[white]/20 border border-white/40 rounded-md p-4 mt-2 flex justify-between items-center focus:shadow-lg'

function Menu() {

    // SEARCH BUTTON HANDLE

    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowInput(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearch = () => {
        setShowInput(true);
        inputRef.current?.focus();
    };

    // CART / WISHLIST / ACCOUNT BUTTON HANDLE
    // LOGIN/SIGNUP FORM

    const [activeTab, setTab] = useState('login')
    const [signupBg, updateBg] = useState('bg-transparent')
    const [loginBg, updateLoginBg] = useState('bg-[#4b743fab]')

    const [confirmPass, updateConfirm] = useState('hidden')
    const tabs =
    {
        loginTab: {
            name: 'Login',
            emailPlaceholder: 'Enter Your @gmail.com',
            phonePlaceholder: 'Enter Your Phone Number',
            passPlaceholder: 'Enter Your Password'
        },
        signupTab: {
            name: 'Signup',
            emailPlaceholder: 'Enter Your @gmail.com',
            phonePlaceholder: 'Enter Your Phone Number',
            passPlaceholder: 'Set Your Password',
            confirmPlaceholder: 'Confirm Your Password'
        }
    }


    const handleClick = (type) => {

        if (type === 'signup') {
            updateBg('bg-[#4b743fab]')
            updateLoginBg('bg-transparent')
            updateConfirm('block')
        }

        if (type === 'login') {
            updateBg('bg-transparent')
            updateLoginBg('bg-[#4b743fab]')
        }
        setTab(type)
    }

    const [curr, updateCrr] = useState('hidden')

    const handleAcc = () => {
        updateCrr('block')
    }

    const [showLoginPass, setShowLoginPass] = useState(false);
    const [showSignupPass, setShowSignupPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const [loginWith , setLoginWith ] = useState(false)
    const [signupWith , setSignupWith] = useState(false)


    return (

        <>
            <div className={`relative ${curr}`}>
                <button className={`${btnStyle} text-[2rem] fixed text-white top-[10rem] right-[47rem] z-[60] text-white`} onClick={() => (updateCrr('hidden'))}>×</button>
                <div className="backdrop-blur-[10px] bg-[#4b743fab]/40 border border-white/10 rounded-lg py-4  px-6 w-[33rem] absolute z-[59] text-white top-[10rem] right-[-14rem]">
                    <div className="flex-flex col-justify-center-items-center mx-auto">
                        <div className="flex justify-center items-center mb-5 mt-8">
                            <button className={`${loginBg} ${tabBtnStyle}`} id="loginBtn" onClick={() => { handleClick('login') }}>Login</button>
                            <button className={`${tabBtnStyle} ${signupBg}`} id="signupBtn" onClick={() => { handleClick('signup') }}>Signup</button>
                        </div>
                        <div>
                            {activeTab === 'login' && (
                                <form action="">
                                    <legend>
                                        <div className={`${inpContainerStyle} text-xl`}>
                                            <input type={loginWith ? 'email' : 'tel'} name={loginWith ? 'email' : 'number'}
                                                placeholder={loginWith ? tabs.loginTab.emailPlaceholder : tabs.loginTab.phonePlaceholder}
                                                className={`${formInpStyle}`} />
                                            {   loginWith ? <i className="fa-solid fa-envelope"></i> : <i className="fa-solid fa-phone"></i> }
                                        </div>
                                        <p className="text-[1rem] mt-3 ml-2">or , Enter with <a href="" className={linkStyle} 
                                                                                                onClick={(e)=>{
                                                                                                    e.preventDefault()
                                                                                                    setLoginWith(!loginWith)
                                                                                                }}
                                                                                                >{loginWith ? 'phoner number' : 'email'}</a></p>
                                    </legend>
                                    <legend>
                                        <div className={`${inpContainerStyle} text-2xl`}>
                                            <input type={showLoginPass ? 'text' : 'password'} name="pass"
                                                placeholder={tabs.loginTab.passPlaceholder}
                                                className={`${formInpStyle}`} />
                                            <button
                                                type="button"
                                                className={`${btnStyle}`}
                                                onClick={() => (setShowLoginPass(!showLoginPass))}>
                                                {showLoginPass ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                                            </button>
                                        </div>
                                        <p className="text-[1rem] text-end mt-3 ml-2"><a href="" className="hover:text-[#A0E08D] transition-colors duration-[300ms] ease-in-out">Forgot Password?</a></p>
                                    </legend>
                                    <button className={`btn bg-white/20 backdrop-blur-[2px] w-full mt-4 border border-white/20 text-lg`}>Submit</button>
                                    <div className="flex flex-col jusitfy-center items-center mt-[3rem]">
                                        <p className="text-[1.3rem] ">or , Login with</p>
                                        <div className="flex gap-4 mt-4">
                                            <button className={`${btnStyle} text-3xl`}>
                                                <i className="fa-brands fa-facebook-f text-[#1877F2]"></i>
                                            </button>
                                            <button className={`${btnStyle} text-3xl`}>
                                                <i className="fa-brands fa-google text-[#EA4335]"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-[1rem] mt-[1rem] text-center">Don't Have an Account? <a href="" className={linkStyle}>Signup</a></p>
                                </form>
                            )}
                            {activeTab === 'signup' && (
                                <form action="">
                                    <legend>
                                        <div className={`${inpContainerStyle} text-xl`}>
                                            <input type={signupWith ? 'email' : 'tel'} name={signupWith ? 'email' : 'number'}
                                                placeholder={signupWith ? tabs.loginTab.emailPlaceholder : tabs.loginTab.phonePlaceholder}
                                                className={`${formInpStyle}`} />
                                            {   signupWith ? <i className="fa-solid fa-envelope"></i> : <i className="fa-solid fa-phone"></i> }
                                        </div>

                                        <p className="text-[1rem] mt-3 ml-2">or , Signup with <a href="" className={linkStyle} 
                                                                                                onClick={(e)=>{
                                                                                                    e.preventDefault()
                                                                                                    setSignupWith(!signupWith)
                                                                                                }}
                                                                                                >{signupWith ? 'phoner number' : 'email'}</a></p>
                                    </legend>
                                    <legend className={`${inpContainerStyle} text-xl`}>
                                        <input type={showSignupPass ? 'text' : 'password'} name="pass" id="signupPass"
                                            placeholder={tabs.signupTab.passPlaceholder}
                                            className={`${formInpStyle}`} />
                                        <button
                                            type="button"
                                            className={`${btnStyle} text-[1.6rem]`}
                                            onClick={() => (setShowSignupPass(!showSignupPass))}>
                                            {showSignupPass ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                                        </button>
                                    </legend>
                                    <legend className={`${confirmPass} ${inpContainerStyle} mt-6`}>
                                        <input type={showConfirmPass ? 'text' : 'password'} name="confirmPass" id="confirmPass"
                                            placeholder={tabs.signupTab.confirmPlaceholder}
                                            className={`${formInpStyle}`} />
                                        <button
                                            type="button"
                                            className={`${btnStyle} text-[1.6rem]`}
                                            onClick={() => (setShowConfirmPass(!showConfirmPass))}>
                                            {showConfirmPass ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                                        </button>
                                    </legend>
                                    <button className={`btn bg-white/20 backdrop-blur-[2px] w-full mt-8 border border-white/20 text-lg`}>Submit</button>
                                    <div className="flex flex-col jusitfy-center items-center mt-[3rem]">
                                        <p className="text-[1.3rem] ">or , Signup with</p>
                                        <div className="flex gap-4 mt-4">

                                            <button className={`${btnStyle} text-3xl`}>
                                                <i className="fa-brands fa-facebook-f text-[#1877F2]"></i>
                                            </button>
                                            <button className={`${btnStyle} text-3xl`}>
                                                <i className="fa-brands fa-google text-[#EA4335]"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-[1rem] mt-[1rem] text-center">Already Have an Account? <a href="" className={linkStyle}>Login</a></p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full menu flex justify-between items-center gap-0 text-white py-4 px-[8rem] mb-4 bg-[#202B1D]/60 shadow-md">
                <a href="#" className="logoName tracking-[0.4rem] text-2xl">IVYLANE</a>
                <div className="menuLinks flex gap-0 text-2xl p-4">
                    <div ref={wrapperRef} className="search group relative inline-block">
                        <button className={btnStyle} onClick={handleSearch}>
                            <i className="bi bi-search cursor-pointer"></i>
                        </button>
                        <input
                            ref={inputRef}
                            type="text"
                            name="search"
                            id="Search"
                            placeholder="Search Your Favourite Plants...."
                            className={`
                                    absolute top-[2rem] right-[0.5rem] text-sm w-[25rem] p-4
                                    bg-[#4b743fab] text-white tracking-[2px] rounded-md shadow-md
                                    border border-white/20 transition-all ease-in-out duration-300
                                    ${showInput ? 'opacity-100' : 'opacity-0'}
                                    focus:ring-0 focus:outline-none group-hover:opacity-100
                                `}
                        />
                    </div>
                    <div>
                        <button className={btnStyle} onClick={handleAcc}>
                            <i className="bi bi-heart cursor-pointer"></i>
                        </button>
                    </div><div>
                        <button className={btnStyle} onClick={handleAcc}>
                            <i className="bi bi-person cursor-pointer text-[1.9rem]"></i>
                        </button>
                    </div><div>
                        <button className={btnStyle} onClick={handleAcc}>
                            <i className="bi bi-cart2 cursor-pointer text-[1.8rem]"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Menu;
