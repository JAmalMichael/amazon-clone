import React from 'react'
import './Styles/header.css'
import { FaSearch } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStateValue } from "../api/StateProvider";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

  return (
            <div className='header bg-[#131921] flex h-[60px]
            items-center sticky top-0 z-[100] '>
            <Link
            to="/" >
            <img
            className="header__logo w-[100px] object-contain my-0 mx-[20px] mt-[18px]"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>
            
        

            <div className="header__search flex flex-1 items-center rounded-3xl">
                <input className="header__searchInput h-[12px] p-[10px] w-[100%]" type="text" />
                <FaSearch className="header__searchIcon p-[2px] bg-[#cd9042]" />
            </div>

            <div className="header__nav flex justify-evenly">
                
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            

            
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            
            

            <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>

            
            <div className="header__optionBasket flex items-center text-white">
                <FaShoppingCart />
                <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
                </span>
            </div>
            
        </div>
        </div>
  )
}

export default Header