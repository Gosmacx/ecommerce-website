import { useState } from 'react'

import searchIcon from './assets/search.png'
import basketIcon from './assets/basket.png'
import userIcon from './assets/user.png'
import heartIcon from './assets/heart.png'
import product1 from './assets/product1.png'
import product2 from './assets/product2.png'
import product3 from './assets/product3.png'
import product4 from './assets/product4.png'
import collection1 from './assets/collection1.png'
import collection2 from './assets/collection2.png'
import collection3 from './assets/collection3.png'
import collection4 from './assets/collection4.png'
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

            <div id='product' className='flex container items-center justify-between mb-36 mt-20 gap-16' >

                <div id='product-images' className='flex flex-col gap-6' >
                    <img src={product1} alt="" />
                    <div className='flex gap-6' >
                        <img src={product2} alt="" />
                        <img src={product3} alt="" />
                        <img src={product4} alt="" />

                    </div>
                </div>

                <div className='flex flex-col grow self-start' >
                    <h1 className='font-bold text-5xl' >Product Name</h1>
                    <span className='text-3xl' >199,50 TL</span>
                    <span className='w-[500px] text-[#616161] mt-6' >
                        Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
                    </span>
                    <div className='flex mt-6 gap-3' >
                        <div className='w-44 h-16 border border-black flex justify-around items-center' >
                            <button className='text-xl' >-</button>
                            <span className='text-xl' >1</span>
                            <button className='text-xl' >+</button>
                        </div>
                        <button className='bg-black w-44 h-16 text-white' >
                            <span className='text-xl font-thin' >Add to Card</span>
                        </button>
                        <div className='border border-black w-16 h-16 flex items-center justify-center cursor-pointer' >
                            <img src={heartIcon} alt="" />
                        </div>
                    </div>
                    <ul className='list-disc mt-5' >
                        <li className='text-lg' >Lorem ipsum dolor sit amet,</li>
                        <li className='text-lg' >Lorem ipsum dolor sit amet,</li>
                        <li className='text-lg' >Lorem ipsum dolor sit amet,</li>
                        <li className='text-lg' >Lorem ipsum dolor sit amet,</li>
                    </ul>
                </div>
            </div>

            <div id='product-info' className='flex flex-col items-center justify-center container gap-10 mb-28' >
                <div className='flex gap-6' >
                    <span className='font-semibold text-xl text-gray-500' >Description</span>
                    <span className='font-semibold text-xl' >Details</span>
                    <span className='font-semibold text-xl' >Reviews(0)</span>
                </div>
                <span className='text-center text-xl w-2/3 ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare euismod arcu, ac laoreet metus pulvinar feugiat. Praesent in feugiat ante, a dictum nunc. Pellentesque convallis tortor quis purus finibus aliquet. In hac habitasse platea dictumst. Proin vestibulum ante ac faucibus tristique. Integer quis efficitur dolor, at dignissim dolor.
                </span>
            </div>

            <div id='related-products' className='container flex flex-col items-center justify-center gap-9 mb-28' >
                <h1 className='font-bold text-3xl' >Related Products</h1>
                <div className='justify-between flex items-center w-full' >
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
                </div>


            </div>

            <div id='recently-products' className='container flex flex-col items-center justify-center gap-9 mb-28' >
                <h1 className='font-bold text-3xl' >Recently Viewed Products</h1>
                <div className='justify-between flex items-center w-full' >
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
                </div>


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
