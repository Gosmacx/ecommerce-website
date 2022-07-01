function App(params) {
    return (
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
    )
}

export default App