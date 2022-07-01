import { useState } from 'react'

import searchIcon from './assets/search.png'
import basketIcon from './assets/basket.png'
import userIcon from './assets/user.png'
import heartIcon from './assets/heart.png'
import backarrow from './assets/backarrow.png'
import downarrow from './assets/downarrow.png'
import paypal from './assets/paypal.png'
import paypalplus from './assets/paypalplus.png'
import bank from './assets/bank.png'
import checkicon from './assets/checkicon.png'
import smallproduct from './assets/smallproduct.png'

function App() {

    return (
        <div className="flex flex-col w-full items-center ">
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

            <div className='container flex flex-col items-start justify-center gap-3 mb-20 mt-3' >
                <h1 className='text-4xl font-bold' >Check Out</h1>
                <div className='flex gap-2 items-center justify-center cursor-pointer' >
                    <img src={backarrow} className="object-none" alt="" />
                    <span className='text-xl' >Continue Shopping</span>
                </div>
            </div>

            <div className='flex container mt-7 justify-between mb-28' >

                <div className='flex flex-col items-center px-7 w-96 bg-[#FAFAFA] gap-5 py-8' >
                    <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='First Name*' />
                    <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Last Name*' />
                    <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='E-mail' />
                    <div className='w-full flex items-center gap-2' >
                        <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Street*' />
                        <input type="text" className='border w-28 h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Houses*' />
                    </div>
                    <div className='w-full flex items-center gap-2' >
                        <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Post Code*' />
                        <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Location*' />
                    </div>
                    <div className='w-full relative flex items-center' >
                        <img src={downarrow} className="absolute cursor-pointer right-5" alt="" />
                        <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Select Country*' />
                    </div>
                    <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Phone Number' />
                    <span className='text-[#828282] opacity-80 w-full text-start' >*Required Fields</span>
                    <div className='flex items-center gap-3' >
                        <div className='h-4 w-6 bg-white border border-[#707070] border-opacity-40' ></div>
                        <span>Create a customer account now and benefit from many advantages.</span>
                    </div>
                    <div className='flex items-center w-full gap-3' >
                        <div className='h-4 w-4 bg-white border border-[#707070] border-opacity-40 flex items-center justify-center' >
                            <img src={checkicon} alt="" />
                        </div>
                        <span>Shipping Address is Different.</span>
                    </div>
                    <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='First Name*' />
                    <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Last Name*' />
                    <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='E-mail' />
                    <div className='w-full flex items-center gap-2' >
                        <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Street*' />
                        <input type="text" className='border w-28 h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Houses*' />
                    </div>
                    <div className='w-full flex items-center gap-2' >
                        <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Post Code*' />
                        <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Location*' />
                    </div>
                    <div className='w-full relative flex items-center' >
                        <img src={downarrow} className="absolute cursor-pointer right-5" alt="" />
                        <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Select Country*' />
                    </div>
                </div>

                <div className='flex flex-col gap-3' >
                    <div className='flex items-center justify-between bg-[#FAFAFA] w-[424px] p-6 ' >
                        <div className='flex gap-4 items-center' >
                            <img src={paypal} className="border" />
                            <span>Paypal</span>
                        </div>
                        <div className='h-4 w-4 bg-white border border-[#707070] border-opacity-40' ></div>
                    </div>
                    <div className='flex items-center justify-between bg-[#FAFAFA] w-[424px] p-6 ' >
                        <div className='flex gap-4 items-center' >
                            <img src={paypalplus} className="border" />
                            <span>Paypal Plus</span>
                        </div>
                        <div className='h-4 w-4 bg-white border border-[#707070] border-opacity-40' ></div>
                    </div>
                    <div className='flex flex-col items-center bg-[#FAFAFA]' >
                        <div className='flex items-center justify-between w-[424px] p-6' >
                            <div className='flex gap-4 items-center' >
                                <img src={bank} className="border" />
                                <span>Investment Bank</span>
                            </div>
                            <div className='h-4 w-4 bg-white flex items-center justify-center border border-black relative' >
                                <div className='w-3 h-3 bg-black' ></div>
                            </div>
                        </div>
                        <div className='flex items-center flex-col gap-4 w-full p-6' >
                            <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='E-mail' />
                            <div className='w-full flex items-center gap-2' >
                                <input type="text" className='border w-28 h-11 placeholder-[#828282] px-1 border-opacity-40 border-[#828282] outline-none' placeholder='Expiry Date*' />
                                <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='CVC / CVV*' />
                            </div>
                            <input type="text" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Name of Cardholder*' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center p-7 h-max bg-[#FAFAFA] w-[432px] ' >
                    <div className='flex items-center justify-between w-full pb-4 border-b border-[#E0E0E0] ' >
                        <span className='text-lg font-medium' >Article</span>
                        <span className='text-lg font-medium' >Total TL</span>
                    </div>
                    <div className='flex items-center justify-between w-full border-b-2 border-white ' >
                        <div className='flex items-center gap-2 py-3' >
                            <img src={smallproduct} />
                            <div className='flex flex-col items-start justify-center gap-3' >
                                <span className='text-lg' >1x</span>
                                <span className='text-xl' >Product Name</span>
                                <span className='text-lg text-[#A1A1A1] ' >Lorem Ipsum</span>
                            </div>
                        </div>
                        <span className='text-xl' >500.44 TL</span>
                    </div>
                    <div className='flex items-center justify-between w-full border-b-2 border-white ' >
                        <div className='flex items-center gap-2 py-3' >
                            <img src={smallproduct} />
                            <div className='flex flex-col items-start justify-center gap-3' >
                                <span className='text-lg' >1x</span>
                                <span className='text-xl' >Product Name</span>
                                <span className='text-lg text-[#A1A1A1] ' >Lorem Ipsum</span>
                            </div>
                        </div>
                        <span className='text-xl' >500.44 TL</span>
                    </div>
                    <div className='flex items-center justify-between w-full border-b-2 border-white ' >
                        <div className='flex items-center gap-2 py-3' >
                            <img src={smallproduct} />
                            <div className='flex flex-col items-start justify-center gap-3' >
                                <span className='text-lg' >1x</span>
                                <span className='text-xl' >Product Name</span>
                                <span className='text-lg text-[#A1A1A1] ' >Lorem Ipsum</span>
                            </div>
                        </div>
                        <span className='text-xl' >500.44 TL</span>
                    </div>

                    <div className='flex items-center cursor-pointer mt-5 mb-7 w-full' >
                        <span className='text-xl mr-2' >Do you have a voucher</span>
                        <span>(optional)</span>
                    </div>
                    <div className='flex items-center justify-bert w-full gap-2' >

                        <input type="text" className='border w-44 h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Enter the code' />

                        <button className='w-44 h-11 bg-black flex items-center justify-center' >
                            <span className='font-bold text-xl text-white' >Reedem</span>
                        </button>
                    </div>
                    <div className='flex items-center w-full mt-10 justify-between' >
                        <div className='flex flex-col items-start justify-ceneter' >
                            <span className='text-xl' >Subtotal</span>
                            <span className='text-[#A7A7A7]' >shipping</span>
                        </div>
                        <div className='flex flex-col items-end justify-ceneter' >
                            <span className='text-xl' >1399 TL</span>
                            <span className='text-[#A7A7A7]' >5,91 TL</span>
                        </div>
                    </div>
                    <span className='text-[#A7A7A7] w-full text-start mb-7' >Delivery time 2 - 4 working days</span>
                    <button className='w-full h-14 bg-black flex items-center justify-center' >
                        <span className='font-bold text-xl text-white' >Safe to checkout</span>
                    </button>
                    <div className='flex items-start justify-start gap-3 mt-4' >
                        <div className='h-5 w-6 mt-2 bg-white border border-[#707070] border-opacity-40' ></div>
                        <span className='text-[#828282] opacity-80 ' >Do you read and approve text that you will never read?</span>
                    </div>
                    <div className='flex items-center w-full mt-6 justify-between' >
                        <div className='flex flex-col items-start justify-ceneter' >
                            <span className='text-xl' >Total</span>
                            <span className='text-[#A7A7A7]' >(VAT)</span>
                        </div>
                        <div className='flex flex-col items-end justify-ceneter' >
                            <span className='text-xl' >143,910.00 TL</span>
                            <span className='text-[#A7A7A7]' >7,195.00 TL</span>
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
