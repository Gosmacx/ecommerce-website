import { useState } from 'react'

import searchIcon from './assets/search.png'
import basketIcon from './assets/basket.png'
import userIcon from './assets/user.png'
import heartIcon from './assets/heart.png'
import collection1 from './assets/collection1.png'
import collection2 from './assets/collection2.png'
import collection3 from './assets/collection3.png'
import collection4 from './assets/collection4.png'
import collection5 from './assets/collection5.png'
import collection6 from './assets/collection6.png'
import collection7 from './assets/collection7.png'
import collection8 from './assets/collection8.png'
import catalogBanner from './assets/catalog-banner.png'
import categori1 from './assets/categori1.png'
import categori2 from './assets/categori2.png'
import categori3 from './assets/categori3.png'
import promoBanner from './assets/promo-banner.png'
import './test.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className='w-full text-center font-bold text-4xl mt-5' >Gosmac Shop</h1>

      <div id='navbar' className='w-full flex items-center justify-around my-7' >
        <div id='search' >
          <img src={searchIcon} alt="" />
        </div>
        <div id='links' className='flex items-center justify-center gap-10' >
          <a href='#' className='font-bold' >HOME</a>
          <a href='#' className='font-bold' >SPACES</a>
          <a href='#' className='font-bold' >PRODUCTS & SERVİCES</a>
          <a href='#' className='font-bold' >SHOWROOMS</a>
          <a href='#' className='font-bold' >COMPANY</a>
          <a href='#' className='font-bold' >MEDIA</a>
          <a href='#' className='font-bold' >CONTACT</a>
        </div>
        <div id='tools' className='flex items-center gap-2 ' >
          <img src={basketIcon} alt="" />
          <img src={heartIcon} alt="" />
          <img src={userIcon} alt="" />
        </div>
      </div>

      <div id='top-img' className='relative flex items-center justify-center text-white mb-28' >
        <img src={catalogBanner} alt="" />
        <div className='h-full w-full bg-[#252525] absolute opacity-40' ></div>
        <div className='flex flex-col items-start gap-8 justify-start absolute container' >
            <h1 className='font-bold text-7xl' >CATALOG</h1>
            <span className='w-[600px] font-normal text-[#E4E4E4] text-lg' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
        </div>
      </div>

      <div id='categories' className='container flex justify-between mb-28' >
        <div className='flex px-8 bg-black text-white w-80 h-[401px] flex-col items-start justify-center gap-6 ' >
            <h1 className='font-bold text-2xl' >Categories</h1>
            <span className='text-[#BCBCBC] ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
        </div>
        <div className='group relative overflow-hidden' >
            <img src={categori1} className="group-hover:scale-110 transition-all" alt="" />
            <div className='bg-gradient-to-t to-[#C4C4C4] from-[#000000] top-0 absolute w-full h-full opacity-50' ></div>
            <div className='text-white flex-col w-full absolute bottom-0 p-7' >
                <h1 className='font-bold text-2xl' >Lorem Ipsum</h1>
                <span className='text-[#BCBCBC] text-lg' >Lorem Ipsum</span>
            </div>
        </div>
        <div className='group relative overflow-hidden' >
            <img src={categori2} className="group-hover:scale-110 transition-all" alt="" />
            <div className='bg-gradient-to-t to-[#C4C4C4] from-[#000000] top-0 absolute w-full h-full opacity-50' ></div>
            <div className='text-white flex-col w-full absolute bottom-0 p-7' >
                <h1 className='font-bold text-2xl' >Lorem Ipsum</h1>
                <span className='text-[#BCBCBC] text-lg' >Lorem Ipsum</span>
            </div>
        </div>
        <div className='group relative overflow-hidden' >
            <img src={categori3} className="group-hover:scale-110 transition-all" alt="" />
            <div className='bg-gradient-to-t to-[#C4C4C4] from-[#000000] top-0 absolute w-full h-full opacity-50' ></div>
            <div className='text-white flex-col w-full absolute bottom-0 p-7' >
                <h1 className='font-bold text-2xl' >Lorem Ipsum</h1>
                <span className='text-[#BCBCBC] text-lg' >Lorem Ipsum</span>
            </div>
        </div>

      </div>


      <div id='collectionss' className='container mb-28' >

        <div id='texts' className='w-full flex justify-between items-center mb-10 ' >
            <span className='text-[#808080] ' >Showing 1 - 15 of 22 results</span>
            <div className='flex gap-9' >
                <span className='font-bold' >Filter</span>
                <span className='font-bold' >Sort by Price</span>
                <img src={searchIcon} className="object-none" alt="" />
            </div>
        </div>

        <div className='flex items-center flex-wrap justify-between mb-14 gap-10' >

          <div className='flex flex-col shadow-lg' >
            <div>
              <img src={collection1} alt="" />
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-4 bg-white' >
              <h1 className='font-semibold text-2xl' >Zurich Vision 60x60</h1>
              <span className='text-gray-500 text-lg font-semibold ' >237.99 TL</span>
            </div>
          </div>
          <div className='flex flex-col shadow-lg' >
            <div>
              <img src={collection2} alt="" />
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-4 bg-white' >
              <h1 className='font-semibold text-2xl' >Zurich Pearl 60x60</h1>
              <span className='text-gray-500 text-lg font-semibold ' >237.99 TL</span>
            </div>
          </div>
          <div className='flex flex-col shadow-lg' >
            <div>
              <img src={collection3} alt="" />
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-4 bg-white' >
              <h1 className='font-semibold text-2xl' >Zurich Gray 60x60</h1>
              <span className='text-gray-500 text-lg font-semibold ' >237.99 TL</span>
            </div>
          </div>
          <div className='flex flex-col shadow-lg' >
            <div>
              <img src={collection4} alt="" />
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-4 bg-white' >
              <h1 className='font-semibold text-2xl' >Zurich Dark Grey 60x60</h1>
              <span className='text-gray-500 text-lg font-semibold ' >237.99 TL</span>
            </div>
          </div>
          <div className='flex flex-col shadow-lg' >
            <div>
              <img src={collection5} alt="" />
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-4 bg-white' >
              <h1 className='font-semibold text-2xl' >Windsor White Oak</h1>
              <span className='text-gray-500 text-lg font-semibold ' >237.99 TL</span>
            </div>
          </div>
          <div className='flex flex-col shadow-lg' >
            <div>
              <img src={collection6} alt="" />
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-4 bg-white' >
              <h1 className='font-semibold text-2xl' >Sicil Grey Dekor</h1>
              <span className='text-gray-500 text-lg font-semibold ' >237.99 TL</span>
            </div>
          </div>
          <div className='flex flex-col shadow-lg' >
            <div>
              <img src={collection7} alt="" />
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-4 bg-white' >
              <h1 className='font-semibold text-2xl' >Sardina White</h1>
              <span className='text-gray-500 text-lg font-semibold ' >237.99 TL</span>
            </div>
          </div>
          <div className='flex flex-col shadow-lg' >
            <div>
              <img src={collection8} alt="" />
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-4 bg-white' >
              <h1 className='font-semibold text-2xl' >Sicil Gray 30x60</h1>
              <span className='text-gray-500 text-lg font-semibold ' >237.99 TL</span>
            </div>
          </div>
        </div>

        <button className='w-44 h-14 bg-black flex items-center justify-center mx-auto ' >
            <span className='text-white text-base font-black' >LOAD MORE</span>
        </button>

      </div>

      <div className='container mb-28 flex' >
        <div className='bg-gray-100 shadow-lg flex flex-col grow items-start justify-center p-8 gap-3 bannerBox' >
            <h1 className='text-4xl' >Promotional Banner</h1>
            <span className='text-[#616161] ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
        </div>
        <img src={promoBanner} className="clipImg" alt="" />
      </div>


      <footer id='footer' className='w-full bg-black h-80 flex items-start p-24 justify-evenly text-white ' >
        <div className='flex flex-col ' >
          <h1 className='w-full text-center font-bold text-4xl text-white h-full' >Gosmac Shop</h1>
        </div>
        <div className='flex flex-col gap-1' >
          <h1 className='font-semibold mb-1' >Products</h1>
          <a href="#" className='text-gray-300' >Sand Stone</a>
          <a href="#" className='text-gray-300' >Stone</a>
          <a href="#" className='text-gray-300' >Cement</a>
          <a href="#" className='text-gray-300' >Soft Stone</a>
        </div>
        <div className='flex flex-col gap-1' >
          <h1 className='font-semibold mb-1 self-start' >Services</h1>
          <a href="#" className='text-gray-300' >Measurement Service</a>
          <a href="#" className='text-gray-300' >Product Advice</a>
          <a href="#" className='text-gray-300' >Interior Design</a>
        </div>
        <div className='flex flex-col gap-1' >
          <h1 className='font-semibold mb-1' >Contact Information</h1>
          <span className='text-gray-300' >3181 Al Imam Saud Ibn Abdul Aziz Branch Rd</span>
          <span className='text-gray-300' >An Nuzhah, Riyadh 12474, Saudi Arabia</span>
          <span className='text-gray-300' >Saudi Arabia</span>
        </div>
      </footer>



    </div>
  )
}

export default App
