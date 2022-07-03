import { Link } from 'react-router-dom'

import searchIcon from '../assets/search.png'
import basketIcon from '../assets/basket.png'
import userIcon from '../assets/user.png'
import heartIcon from '../assets/heart.png'

function App() {
    return (
        <div className='w-full' >
            <h1 className='w-full text-center font-bold text-4xl mt-5' >Gosmac Shop</h1>
            <nav id='navbar' className='w-full flex items-center justify-around my-7' >
                <div id='search' >
                    <img src={searchIcon} alt="" />
                </div>
                <div id='links' className='flex items-center justify-center gap-10' >
                    <Link to='/' className='font-bold' >HOME</Link>
                    <Link to='/catalog' className='font-bold' >CATALOG</Link>
                    <Link to='/product' className='font-bold' >PRODUCTS & SERVİCES</Link>
                    <Link to='/checkout' className='font-bold' >CHECKOUT</Link>
                    <Link to='/cart' className='font-bold' >CART</Link>
                    <a href='#' className='font-bold' >MEDIA</a>
                    <a href='#' className='font-bold' >CONTACT</a>
                </div>
                <div id='tools' className='flex items-center gap-2 ' >
                    <img src={basketIcon} alt="" />
                    <img src={heartIcon} alt="" />
                    <Link to='/login' >
                        <img src={userIcon} alt="" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default App