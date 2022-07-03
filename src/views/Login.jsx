function App() {
    return (
        <div className="w-96 flex flex-col items-center justify-center gap-4 mx-auto h-[51vh] " >
            <input type="email" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Email' />
            <input type="password" className='border w-full h-11 placeholder-[#828282] px-5 border-opacity-40 border-[#828282] outline-none' placeholder='Password' />
            <button className='w-full h-11 bg-black flex items-center justify-center' >
                <span className='font-bold text-xl text-white' >Login</span>
            </button>
        </div>
    )
}

export default App