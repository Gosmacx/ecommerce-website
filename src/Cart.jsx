import { useState } from 'react'

import collection1 from './assets/collection1.png'
import collection2 from './assets/collection2.png'
import collection3 from './assets/collection3.png'
import collection4 from './assets/collection4.png'
import backarrow from './assets/backarrow.png'
import uparrow from './assets/uparrow.png'
import smallproduct from './assets/smallproduct.png'
import deleteicon from './assets/deleteicon.png'

function App() {

    return (
        <div className="flex flex-col w-full items-center ">

            <div className='container flex flex-col items-start justify-center gap-3 mb-20 mt-3' >
                <h1 className='text-4xl font-bold' >Shopping Cart</h1>
                <div className='flex gap-2 items-center justify-center cursor-pointer' >
                    <img src={backarrow} className="object-none" alt="" />
                    <span className='text-xl' >Continue Shopping</span>
                </div>
            </div>

            <div className='container flex items-center justify-between gap-8' >
                
                <div className='bg-[#FAFAFA] flex flex-col grow' >
                    
                    <div id='titles' className='w-full h-16 border-b border-b-[#DEDEDE] ' >
                        <div className='ml-96 h-full flex items-center justify-evenly' >
                            <span className='font-bold text-xl' >Unit Price</span>
                            <span className='font-bold text-xl' >QTY</span>
                            <span className='font-bold text-xl' >Total Sar</span>
                        </div>
                    </div>

                    <div id='product-section' className='flex flex-col px-8 items-center gap-8' >
            
                        <div className='flex items-center w-full border-b border-b-white py-8' >
                            <div className='flex items-center gap-2 mr-auto' >
                                <img src={smallproduct} />
                                <div className='flex flex-col items-start justify-center gap-3' >
                                    <span className='text-xl' >Product Name</span>
                                    <span className='text-lg text-[#A1A1A1] ' >Lorem Ipsum</span>
                                </div>
                            </div>
                            <span className='text-xl mr-28' >199.000</span>
                            <div className='flex items-center gap-5 mr-24' >
                                <button className='w-6 h-6 border border-black flex items-center justify-center' >
                                    <span className='text-xl' >-</span>
                                </button>
                                <span className='text-xl' >1</span>
                                <button className='w-6 h-6 border border-black flex items-center justify-center' >
                                    <span className='text-xl' >+</span>
                                </button>
                            </div>
                            <span className='text-xl mr-20' >199.000</span>
                            <img src={deleteicon} className="cursor-pointer" alt="" />
                        </div>

                        <div className='flex items-center w-full border-b border-b-white py-8' >
                            <div className='flex items-center gap-2 mr-auto' >
                                <img src={smallproduct} />
                                <div className='flex flex-col items-start justify-center gap-3' >
                                    <span className='text-xl' >Product Name</span>
                                    <span className='text-lg text-[#A1A1A1] ' >Lorem Ipsum</span>
                                </div>
                            </div>
                            <span className='text-xl mr-28' >199.000</span>
                            <div className='flex items-center gap-5 mr-24' >
                                <button className='w-6 h-6 border border-black flex items-center justify-center' >
                                    <span className='text-xl' >-</span>
                                </button>
                                <span className='text-xl' >1</span>
                                <button className='w-6 h-6 border border-black flex items-center justify-center' >
                                    <span className='text-xl' >+</span>
                                </button>
                            </div>
                            <span className='text-xl mr-20' >199.000</span>
                            <img src={deleteicon} className="cursor-pointer" alt="" />
                        </div>

                        <div className='flex items-center w-full border-b border-b-white py-8' >
                            <div className='flex items-center gap-2 mr-auto' >
                                <img src={smallproduct} />
                                <div className='flex flex-col items-start justify-center gap-3' >
                                    <span className='text-xl' >Product Name</span>
                                    <span className='text-lg text-[#A1A1A1] ' >Lorem Ipsum</span>
                                </div>
                            </div>
                            <span className='text-xl mr-28' >199.000</span>
                            <div className='flex items-center gap-5 mr-24' >
                                <button className='w-6 h-6 border border-black flex items-center justify-center' >
                                    <span className='text-xl' >-</span>
                                </button>
                                <span className='text-xl' >1</span>
                                <button className='w-6 h-6 border border-black flex items-center justify-center' >
                                    <span className='text-xl' >+</span>
                                </button>
                            </div>
                            <span className='text-xl mr-20' >199.000</span>
                            <img src={deleteicon} className="cursor-pointer" alt="" />
                        </div>

                    </div>
                </div>

                <div className='w-[422px] bg-[#FAFAFA] flex flex-col p-6 gap-7 self-start' >
                    <div className='flex items-center cursor-pointer' >
                        <span className='font-bold text-xl mr-2' >Do you have a voucher</span>
                        <span>(optional)</span>
                        <img src={uparrow} className="ml-auto" alt="" />
                    </div>
                    <div className='flex items-center justify-between' >
                    <button className='w-44 h-14 border border-black flex items-center justify-center' >
                        <span className='font-bold text-xl' >Enter the code</span>
                    </button>
                    <button className='w-44 h-14 bg-black flex items-center justify-center' >
                        <span className='font-bold text-xl text-white' >Reedem</span>
                    </button>
                    </div>
                    <div className='flex items-center justify-between border-t border-[#DEDEDE] py-3' >
                        <div className='flex flex-col items-start justify-ceneter' >
                            <span className='text-xl' >Subtotal</span>
                            <span className='text-[#A7A7A7]' >shipping</span>
                        </div>
                        <div className='flex flex-col items-end justify-ceneter' >
                            <span className='text-xl' >1399 TL</span>
                            <span className='text-[#A7A7A7]' >5,91 TL</span>
                        </div>
                    </div>
                    <div className='flex items-center border-t border-[#DEDEDE] py-3' >
                        <span className='text-xl mr-4' >Total</span>
                        <span className='text-[#A7A7A7]' >(vat included.)</span>
                        <span className='text-xl ml-auto' >2499,15 TL</span>
                    </div>
                    <button className='w-full h-14 bg-black flex items-center justify-center' >
                        <span className='font-bold text-xl text-white' >Safe to checkout</span>
                    </button>
                </div>

            </div>

            <div id='recently-products' className='container flex flex-col items-center justify-center gap-9 mt-14 mb-28' >
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

        </div>
    )
}

export default App
