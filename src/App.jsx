// import { useState } from 'react'
import './App.css'
import './index.css'
import Menu from './navbar/menu/menu'
import Nav from './navbar/nav/nav'
import HeroSection from './maincontent/herosection/hero'
import BestSelling from './maincontent/selling/selling'
import Categories from './maincontent/categories/categories'
import Featured  from './maincontent/featured/fatured'
import ChooseUs from './maincontent/chooseus/chooseus'
import Services from './maincontent/services/services'
import Blog from './maincontent/blog/blog'
import Footer from './footer/footer'

function App() {

  return (
    <>
      <header className='flex flex-col items-center justify-center'>
         <Menu/>
         <Nav/>
      </header>
      <main className='h-[100%]'>
          <HeroSection/>
          <Categories/>
          <BestSelling />
          <Featured/>
          <ChooseUs/>
          <Services/>
          <Blog/>
      </main>
      <footer>
          <Footer/>
          <hr className=' border-none bg-white/40 mx-[18rem] h-[1px]' />
          <p className='text-center text-white my-[1rem]'>© 2025 IVYLANE. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
