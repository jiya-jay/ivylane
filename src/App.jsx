// import { useState } from 'react'
import './App.css'
import './index.css'
import Menu from './navbar/menu/menu'
import Nav from './navbar/nav/nav'
import HeroSection from './main content/hero section/hero'
import BestSelling from './main content/selling/selling'
import Categories from './main content/categories/categories'
import Featured  from './main content/featured/fatured'
import ChooseUs from './main content/chooseus/chooseus'
import Services from './main content/services/services'
import Blog from './main content/blog/blog'
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
