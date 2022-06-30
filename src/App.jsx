import { useState } from 'react'

import searchIcon from './assets/search.png'
import basketIcon from './assets/basket.png'
import userIcon from './assets/user.png'
import heartIcon from './assets/heart.png'
import mainImg from './assets/main.png'
import small1 from './assets/small-1.png'
import small2 from './assets/small-2.png'
import small3 from './assets/small-3.png'
import small4 from './assets/small-4.png'
import content1 from './assets/content1.png'
import content2 from './assets/content2.png'
import content3 from './assets/content3.png'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'
import collection1 from './assets/collection1.png'
import collection2 from './assets/collection2.png'
import collection3 from './assets/collection3.png'
import collection4 from './assets/collection4.png'
import collection5 from './assets/collection5.png'
import collection6 from './assets/collection6.png'
import collection7 from './assets/collection7.png'
import collection8 from './assets/collection8.png'
import banner from './assets/banner.png'
import videoImg from './assets/videoImg.png'
import showroom from './assets/showroom.png'

import './test.css'
function App() {

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

      <div id='top-img' className='relative flex items-center' >
        <img src={mainImg} alt="" />
        <div className='glassBox flex items-start justify-around flex-col px-9 text-white ' >
          <h1 className='text-4xl font-bold' >New Generation Ceramic Tile</h1>
          <span className='text-xl font-thin' >Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.</span>
          <button className='w-44 h-14 bg-white flex items-center justify-center' >
            <span className='text-black text-base font-black' >LEARN MORE</span>
          </button>
        </div>
      </div>

      <div id='products' className='container mb-32' >

        <div id='texts' className='w-full flex flex-col items-center mb-10 ' >
          <h1 className='font-bold text-5xl w-full text-center mt-20' >Products</h1>
          <div className='w-48 my-5 h-1 bg-[#C4C4C4]' ></div>
          <span className='text-xl leading-7 text-center w-1/2  ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
        </div>

        <div id='imgs' className='flex items-center justify-between gap-6 relative' >

          <div className='flex items-center gap-6' >
            <div className='img-product' >
              <img src={small1} />
              <div id='black-box' className='w-[535px]' >
                <h1 id='title'>Bathroom Tiles</h1>
                <span id='description'>Ante mus blandit sapien sociosqu per consequat ad.</span>
              </div>
            </div>
            <div className='img-product' >
              <img src={small2} />
              <div id='black-box' className='w-[300px]' >
                <h1 id='title'>Marble</h1>
                <span id='description'>Ante mus blandit sapien sociosqu.</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-between h-[619px] ' >
            <div className='img-product' >
              <img src={small3} />
              <div id='black-box' className='w-[415px]' >
                <h1 id='title'>Outdoor Flooring</h1>
                <span id='description'>Ante mus blandit sapien sociosqu per consequat ad.</span>
              </div>
            </div>
            <div className='img-product' >
              <img src={small4} />
              <div id='black-box' className='w-[415px]' >
                <h1 id='title'>Kitchen Interior</h1>
                <span id='description'>Ante mus blandit sapien sociosqu per consequat ad.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id='banner' className='flex items-center justify-end relative container mb-28 ' >
        <img src={banner}/>
        <div className='w-[708px] h-[402px] bg-[#F7F7F7] absolute left-0 shadow-md shadow-black flex items-start justify-around flex-col px-9' >
          <h1 className='text-4xl font-bold' >Vision</h1>
          <span className='text-xl' >Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.</span>
          <button className='w-44 h-14 bg-black flex items-center justify-center' >
            <span className='text-white text-base font-black' >LEARN MORE</span>
          </button>
        </div>
      </div>

      <div id='contents' className='container flex items-center justify-between gap-28 ' >

        <div className='flex grow items-start flex-col justify-between h-[726px] relative' >
          <div>
            <h1 className='font-bold text-5xl' >Creative Solutions</h1>
            <h1 className='font-bold text-5xl' >by Professional Designers</h1>
          </div>
          <span className='w-[450px] text-[#616161] ' >
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
          </span>
          <div className='flex items-center justify-between w-full' >
            <img src={content1} alt="" />
            <img src={content2} alt="" />
            <img src={content3} alt="" />
          </div>
          <button className='w-44 h-14 bg-black flex items-center justify-center' >
            <span className='text-white text-base font-black' >READ MORE</span>
          </button>
        </div>

        <div id='img' >
          <img src={videoImg} alt="" />
        </div>

      </div>

      <div id='projects' className='container mb-32' >

        <div id='texts' className='w-full flex flex-col items-center mb-10 ' >
          <h1 className='font-bold text-5xl w-full text-center mt-20' >Projects</h1>
          <div className='w-48 my-5 h-1 bg-[#C4C4C4]' ></div>
          <span className='text-xl leading-7 text-center w-1/2  ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
        </div>

        <div className='flex w-full items-center justify-between mb-14 ' >
          <div className='flex flex-col items-center gap-8' >
            <img src={project1} alt="" />
            <div className='flex flex-col items-center justify-center' >
              <h1 className='font-semibold text-2xl ' >Kingdom Tower</h1>
              <span className='text-[#111010] ' >Kingdom Tower</span>
            </div>
          </div>
          <div className='flex flex-col items-center gap-8' >
            <img src={project2} alt="" />
            <div className='flex flex-col items-center justify-center' >
              <h1 className='font-semibold text-2xl ' >Dubai Mall</h1>
              <span className='text-[#111010] ' >Wood Flooring</span>
            </div>
          </div>
          <div className='flex flex-col items-center gap-8' >
            <img src={project3} alt="" />
            <div className='flex flex-col items-center justify-center' >
              <h1 className='font-semibold text-2xl ' >King Road Offices</h1>
              <span className='text-[#111010] ' >Outdoor Flooring</span>
            </div>
          </div>
          <div className='flex flex-col items-center gap-8' >
            <img src={project4} alt="" />
            <div className='flex flex-col items-center justify-center' >
              <h1 className='font-semibold text-2xl ' >Beach Tower Alupang</h1>
              <span className='text-[#111010] ' >Wood Flooring</span>
            </div>
          </div>
        </div>

        <button className='w-44 h-14 bg-black flex items-center justify-center mx-auto ' >
            <span className='text-white text-base font-black' >VIEW ALL</span>
          </button>

      </div>

      <div id='collections' className='container mb-32' >

        <div id='texts' className='w-full flex flex-col items-center mb-10 ' >
          <h1 className='font-bold text-5xl w-full text-center mt-20' >Tile Collections</h1>
          <div className='w-48 my-5 h-1 bg-[#C4C4C4]' ></div>
          <span className='text-xl leading-7 text-center w-1/2  ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
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
            <span className='text-white text-base font-black' >MORE PRODUCTS</span>
        </button>

      </div>

      <div id='showroom' className='container flex items-center justify-center relative gap-6 mb-32' >
        <img src={showroom} alt="" />
        <div className='shadow-lg shadow-black right-0 w-[692px] h-[522px] bg-[#F9F9F9] p-32  flex flex-col justify-between items-start' >
          <h1 className='font-bold text-5xl ' >Our Showrooms</h1>
          <span className='text-[#616161] text-lg' >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </span>
          <button className='w-44 h-14 bg-black flex items-center justify-center ' >
            <span className='text-white text-base font-black' >LEARN MORE</span>
        </button>
        </div>
      </div>  

      <footer id='footer' className='w-full bg-black h-80 flex items-start p-24 justify-evenly text-white' >
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
